const axios = require('axios')
const fs = require('fs')

const reactVersionToDownload = process.argv[2]

downloadProdReact()
downloadDevReact()

downloadProdReactDom()
downloadDevReactDom()

function downloadProdReact() {
  axios
  .get(`https://unpkg.com/react@${reactVersionToDownload}/cjs/react.production.min.js`)
  .then((data) => {
    fs.writeFile('react.min.js', data.data, (err) => {
      if (err) throw err

      console.log('React production file saved.')
    })
  })
  .catch(
  (error) => console.log('Something went wrong and could not retrieve prod React: ' + error)
  )
}

function downloadProdReactDom() {
  axios
  .get(`https://unpkg.com/react-dom@${reactVersionToDownload}/cjs/react-dom.production.min.js`)
  .then((data) => {
    fs.writeFile('react-dom.min.js', data.data, (err) => {
      if (err) throw err

      console.log('ReactDom production file saved.')
    })
  })
  .catch(
  (error) => console.log('Something went wrong and could not retrieve prod ReactDom: ' + error)
  )
}

function downloadDevReact() {
  axios
  .get(`https://unpkg.com/react@${reactVersionToDownload}/cjs/react.development.js`)
  .then((data) => {
    fs.writeFile('react.js', data.data, (err) => {
      if (err) throw err

      console.log('React development file saved.')
    })
  })
  .catch(
  (error) => console.log('Something went wrong and could not retrieve dev React: ' + error)
  )
}

function downloadDevReactDom() {
  axios
  .get(`https://unpkg.com/react-dom@${reactVersionToDownload}/cjs/react-dom.development.js`)
  .then((data) => {
    fs.writeFile('react-dom.js', data.data, (err) => {
      if (err) throw err

      console.log('ReactDom development file saved.')
    })
  })
  .catch(
  (error) => console.log('Something went wrong and could not retrieve dev ReactDom: ' + error)
  )
}

