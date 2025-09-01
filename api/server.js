const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

let verses = require("../data/verses.json")

function dayOfTheYear(year, day) {
  const d1 = new Date(year, 0, 1)
  const d2 = day
  const numberDay = parseInt(Math.abs((d1 - d2) / (1000 * 60 * 60 * 24)) + 1)

  return numberDay
}

const today = new Date()
const numberToday = dayOfTheYear(today.getFullYear(), today)
const messageToday = verses.filter(i => i.day == numberToday)

app.get('/message', (req, res) => {
  res.json(messageToday)
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})