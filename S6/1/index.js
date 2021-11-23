
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))             // oproepen van de folder waar files staan om te laten zien

app.get('/', (req, res) => {
  console.log(' get local call');
  res.redirect('/index.html')                  // doorsturen van gebruiker naar opgegeven pagina
})
app.get('/test', (req, res) => {
  console.log('Iets proberen')
})
app.get('/data', (req, res) => {
  let testData = {
    name: "test",
    probleem: "pc"
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})