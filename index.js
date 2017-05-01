const fetch = require('node-fetch')
const ms = require('ms')

let API_GATEWAY_TOKEN = process.env.API_GATEWAY_TOKEN

let data = {}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  return data
}

// cache data now and every X ms
cacheData()
setInterval(cacheData, ms('15m'))

function log (text) {
  return console.log(text)
}

function fetchData (type) {
  return fetch(`https://api.envato.com/v1/market/total-${type}.json`, {
    headers: {
      'Authorization': `Bearer ${API_GATEWAY_TOKEN}`
    }
  })
  .then(res => {
    if (res.status !== 200) {
      return log('Non-200 response code from Api Gateway: ' + res.status)
    }
    return res.json()
  })
  .catch(err => {
    log('Error parsing response from Api Gateway: ' + err.stack)
  })
}

async function cacheData () {
  const start = Date.now()

  let items = await fetchData('items')
  let users = await fetchData('users')

  data = {
    total_items: items['total-items']['total_items'],
    total_users: users['total-users']['total_users']
  }

  log(`Re-built stats cache. ` +
        `Elapsed: ${(new Date() - start)}ms`)
}
