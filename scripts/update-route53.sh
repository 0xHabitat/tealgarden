#!/bin/bash

### BEGIN INIT INFO
# Provides:             update-route53.sh
# Required-Start:       $remote_fs $syslog
# Required-Stop:        $remote_fs $syslog
# Default-Start:        2 3 4 5
# Default-Stop:         0 1 6
# Short-Description:    IPFS deploy & Update Route 53 record set
# Description:          At deployment deploy new version to IPFS and change Route 53 record set
### END INIT INFO

# troubleshooting file
# exec > /tmp/debug-my-script.txt 2>&1

echo Path is: $PATH
echo User is: $USER

# AWS Hosted Zone ID

echo Zone Id: $ZONEID

# The CNAME you want to update e.g. hello.example.com

echo Record Set: $RECORDSET

# More advanced options below
# The Time-To-Live of this recordset
TTL=60
# Change this if you want
COMMENT="Auto updating @ `date`"
# Change to AAAA if using an IPv6 address
TYPE="TXT"

# Get the external IP address
IPFS_HASH=`ipd -O -p pinata ./__sapper__/export/ `

# Get current dir (stolen from http://stackoverflow.com/a/246128/920350)
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo Current directory is: $DIR

LOGFILE="$DIR/update-route53.log"

if [ -z "$IPFS_HASH" ]; then
    echo "Unsuccessful IPFS Deployment." >> "$LOGFILE"
    exit 1
fi
echo "Successful IPFS deployment".
echo Got IPFS Hash: $IPFS_HASH

# Fill a temp file with valid JSON
TMPFILE=$(mktemp /tmp/temporary-file.XXXXXXXX)
cat > ${TMPFILE} << EOF
    {
      "Comment":"$COMMENT",
      "Changes":[
        {
          "Action":"UPSERT",
          "ResourceRecordSet":{
            "ResourceRecords":[
              {
                "Value":"\"dnslink=/ipfs/$IPFS_HASH\""
              }
            ],
            "Name":"$RECORDSET",
            "Type":"$TYPE",
            "TTL":$TTL
          }
        }
      ]
    }
EOF


# Update the Hosted Zone record
aws route53 change-resource-record-sets --hosted-zone-id $ZONEID --change-batch file://"$TMPFILE" >> "$LOGFILE"
echo "" >> "$LOGFILE"
cat $LOGFILE

# Clean up
rm $TMPFILE

echo Route53 update finished
