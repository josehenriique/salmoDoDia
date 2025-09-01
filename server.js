const express = require("express")
const cors = require("cors")
const { getMessage } = require("./lib/getMessage")

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/message', (req, res) => {
  res.json(getMessage())
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})