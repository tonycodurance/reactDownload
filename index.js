const axios = require('axios')
const fs = require('fs')

axios
  .get('https://unpkg.com/react@16.7.0/cjs/react.production.min.js')
  .then((data) => {
    fs.writeFile('react.min.js', data.data, (err) => {
      if (err) throw err

      console.log('React production file saved.')
    })
  })
  .catch(
    (error) => console.log('Something went wrong and could not retrieve prod React: ' + error)
  )

axios
  .get('https://unpkg.com/react@16.7.0/cjs/react.development.js')
  .then((data) => {
    fs.writeFile('react.js', data.data, (err) => {
      if (err) throw err

      console.log('React development file saved.')
    })
  })
  .catch(
    (error) => console.log('Something went wrong and could not retrieve dev React: ' + error)
  )