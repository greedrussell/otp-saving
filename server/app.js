const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 8080

app.set('port', port)

app.use(express.static(path.join(__dirname, '../build')))

app.get('/', (req, res) => {
  res.render('index.html')
})

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`)
})
