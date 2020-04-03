const axios = require('axios');

const options = {
  headers: {
    'pinata_api_key': process.env.IPFS_DEPLOY_PINATA__API_KEY,
    'pinata_secret_api_key': process.env.IPFS_DEPLOY_PINATA__SECRET_API_KEY
  }
};

function deletePin(hashToUnpin){
  const url = `https://api.pinata.cloud/pinning/unpin/${hashToUnpin}`;
  return axios.delete(url, options);
}

function unPinExceptLast() {
  const url = `https://api.pinata.cloud/data/pinList?status=pinned&pageOffset=1`;
  return axios.get(url, options)
    .then(function (response) {
      response.data.rows.forEach(function(item){
        deletePin(item.ipfs_pin_hash)
      });
    });
}

unPinExceptLast();
