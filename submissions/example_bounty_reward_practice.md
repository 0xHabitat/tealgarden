# Bounty Rewards Practice

If you have any questions reach out to us over the [discord channel](https://discord.gg/T5NU2q5). You can always check our more in-depth explainer [here](https://github.com/deora-earth/tealgarden/blob/track/docs/teal-basics.md).

You'll find format requirements and important info about each step in the [submission template](https://hackmd.io/@5-YIdqM_TiWI7n-xRmaUqg/H1ywNR6_I). Practice examples can be found the GitHub `/submission` folder.

---

:writing_hand: :`Please enter your input here`

---

Mail: max@deora.earth  
Address: `0x5B4dF17CA5A3339D722028a585582693742E5B5a`

## 1. Practice / Process ID

Bounty Reward Process

## 2. Category

`Payment & Incentives`, `To-dos`, `Commitment, Working Hours and Flexibility`, `Crypto`

Size: `Crew` `Organisation` `Community`

## 3. Summary

In our organisation bounties are an alternative to a monthly or weekly payout schedule to our members. They are payed out the moment after a set task has been accomplished. Bounties combine task management and incentives. They promote the autonomy of members and their respective roles by allowing them to create new bounties or fulfill existing ones.

Bounties allow an agile process of **"sense & respond"** within self-managed teams. Once a tension or opportunity is sensed and alligned with the purpose + current strategies of the organisation bounties can be created and tackled immediately. They are announced via the official communication channels for objections, clarification or support.

They incentivize creative bounty creators (bounty gardener) and motivated bounty hunters (bounty worker) alike.

The given process gives an exemplary insight about the structure, rules and parameters that are used in proven in our organisation. See **"Bounty Policy"** under **"Adoption Requirements"** for more info.

## 4. Benefits

- instant incentivation via bounty payouts after finished task
- fast sense & respond practice
- transparent to-do management alligned with purpose & strategies
- extra work -> extra money & recognitation

## 5. Adoption Requirements

### 5.1 :globe_with_meridians: Org Structure

Holacracy Constitution
Link: https://www.holacracy.org/constitution

### 5.2 :scroll: Policies

**Bounty Policy**
Domain: MultiSignature Web 3.0 wallet funds

Once a payout is requested for a properly defined bounty, Keybearers must sign it out.

Full Bounty Policy can be found here: https://github.com/leapdao/meta/blob/master/playbook/bounties.md

### 5.3 :performing_arts: Roles

_Role Title_
🔑 Keybearer

_Purpose_

- responsible for signing transaction in a responsible & honourable manner
- holding a key in the multisig wallet and sign according to policies.

_Domains_

- multisginature wallet

_Accountabilities_

- holding only one key and not loosing/revealing it.
- reporting on lost or revealed key asap.
- signing on proposals within short timeframe (hours and days, not weeks).

### 5.4 :hammer_and_wrench: Tools

- Slack
  https://slack.com/
  Digital collaboration chat to announce and discuss bounties.

- Github
  https://github.com/
  Software development platform used for us to keep track of bounties, description and their size.

- G Forms
  https://docs.google.com/forms/u/0/
  Easy way of creating forms that help us funnel the bounties and auto announce them on our communication channel.

### 5.5 :heart: Values

**👑 Individual Autonomy & Decision Making**
Bounties promote initiatives of team members. They allow purpose driven direction by designing tasks for others or themselves.

**👀 Full Transparency**
Every bounty is announced via the official communications channels of the organisations. Allowing them to be questioned, supporterd or approved.

## 6. Integration Steps / Instructions

### 6.1 "Title of First Step"

**Create a Bounty on Github**

#### A. "First Action"

**Upload Bounty Template on Github**
Open your github repository and save the template file inside the folder: /.github. You can alter the text and instructions to your desire.

Download File: [ISSUE_TEMPLATE.md](https://hackmd.io/@macerer/Hyf-y4JKL)

#### B. "Second Action"

**Create Bounty Labels in GitHub**
To easily size your bounty you can add new labels as seen here. They are defined according to the “Bounty Policy”. They can also be found in the issue_template.md.

![label gif](https://s6.gifyu.com/images/Create-github-labels.gif)

#### C. "Third Sub-Action"

**Create an Issue in Your Repository**

![image alt](https://s6.gifyu.com/images/Create-BountyIssue.gif)

Once the issue is created you can find under “Labels” your created bounty sizes of Step 2.

### 6.2 "Title of Second Step"

**Submit Bounty via GoogleForm**

#### A. "First Action"

**Create a Bounty Proposal Form**

To keep track of every new bounty proposed a form needs to be created and filled out every time a bounty is proposed. Later in Step 3 the form auto announces the newly created bounty on the official communication channel of the organisation.

![](https://i.imgur.com/afxZCmq.png)
An example can be found [here](https://docs.google.com/forms/d/e/1FAIpQLSfYDTzX5mPa52y3fdrUZ8MylwVRjEPAGP2QFSpTfE45YmopkQ/viewform)

### 6.3 "Title of Second Step"

Auto Announcement in Slack

#### A. "First Action"

**Enter your Slack webhookURL in script**
Find out your webhookURL of your Slack workspace. Read the following for more [info](https://api.slack.com/messaging/webhooks#create_a_webhook).

Copy your Webhook URL (❌) in the following script and change the parameters of channel, text, icons etc.

Script:

```
// This Google Sheets script will post to a slack channel when a user submits data to a Google Forms Spreadsheet
// View the README for installation instructions. Don't forget to add the required slack information below.
// Source: https://github.com/markfguerra/google-forms-to-slack
/////////////////////////
// Begin customization //
/////////////////////////
// Alter this to match the incoming webhook url provided by Slack
var slackIncomingWebhookUrl = ' ❌ 👉https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
';
// Include # for public channels, omit it for private channels
var postChannel = "#deora-bounty-board";
var postIcon = ":deora-white:";
var postUser = "Bounty Payout";
var postColor = "#0000DD";
var messageFallback = "The attachment must be viewed as plain text.";
var messagePretext = "A bounty was deliverd:";
///////////////////////
// End customization //
///////////////////////
// In the Script Editor, run initialize() at least once to make your code execute on form submit
function initialize() {
  var triggers = ScriptApp.getProjectTriggers();
  for (var i in triggers) {
    ScriptApp.deleteTrigger(triggers[i]);
  }
  ScriptApp.newTrigger("submitValuesToSlack")
    .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
    .onFormSubmit()
    .create();
}
// Running the code in initialize() will cause this function to be triggered this on every Form Submit
function submitValuesToSlack(e) {
  // Test code. uncomment to debug in Google Script editor
  // if (typeof e === "undefined") {
  //   e = {namedValues: {"Question1": ["answer1"], "Question2" : ["answer2"]}};
  //   messagePretext = "Debugging our Sheets to Slack integration";
  // }
  var attachments = constructAttachments(e.values);

  var columnNames = getColumnNames();
  for (var i = 0; i < columnNames.length; i++) {
    var colName = columnNames[i];
    if (colName == "Funding Circle") {
      if (e.values[i] == "deora") {
        postChannel = "#deora";
      }
    }
  }
  var payload = {
    "channel": postChannel,
    "username": postUser,
    "icon_emoji": postIcon,
    "link_names": 1,
    "attachments": attachments
  };
  var options = {
    'method': 'post',
    'payload': JSON.stringify(payload)
  };
  var response = UrlFetchApp.fetch(slackIncomingWebhookUrl, options);
}
// Creates Slack message attachments which contain the data from the Google Form
// submission, which is passed in as a parameter
// https://api.slack.com/docs/message-attachments
var constructAttachments = function(values) {
  var fields = makeFields(values);
  var attachments = [{
    "fallback" : messageFallback,
    "pretext" : messagePretext,
    "mrkdwn_in" : ["pretext"],
    "color" : postColor,
    "fields" : fields
  }]
  return attachments;
}
// Creates an array of Slack fields containing the questions and answers
var makeFields = function(values) {
  var fields = [];
  var columnNames = getColumnNames();
  for (var i = 0; i < columnNames.length; i++) {
    var colName = columnNames[i];
    var val = values[i];
    if (colName != "Timestamp" && colName != "Funding Circle" && colName != "How is the completion of this bounty aligned with the purpose?") {
      fields.push(makeField(colName, val));
    }
  }
  return fields;
}
// Creates a Slack field for your message
// https://api.slack.com/docs/message-attachments#fields
var makeField = function(question, answer) {
  var field = {
    "title" : question,
    "value" : answer,
    "short" : false
  };
  return field;
}
// Extracts the column names from the first row of the spreadsheet
var getColumnNames = function() {
  var sheet = SpreadsheetApp.getActiveSheet();
  // Get the header row using A1 notation
  var headerRow = sheet.getRange("1:1");
  // Extract the values from it
  var headerRowValues = headerRow.getValues()[0];
  return headerRowValues;
}
```

#### B. "Second Action"

**Enter full script**
Copy the completed script and go the "Responses" page of your form. Open it as a Google Sheet and copy the script under "Tools" --> "Script". As seen in the gif

![](https://s4.gifyu.com/images/Copy--Paste---Auto-Announce-Script.gif)

#### C. "Third Action"

**Fill out the Bounty Proposal Form**
Once a new bounty/task is defined on GitHub the member can fill out the form and the bounty will be auto-announced on Slack.

![](https://i.imgur.com/WmvJ5Kg.png)
