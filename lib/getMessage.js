let verses = require("../data/verses.json")

function dayOfTheYear(year, day) {
  const d1 = new Date(year, 0, 1)
  const d2 = new Date(day.getFullYear(), day.getMonth(), day.getDate())
  const numberDay = parseInt(Math.abs((d1 - d2) / (1000 * 60 * 60 * 24)) + 1)

  return numberDay
}

function getMessage() {
  const today = new Date()
  const numberToday = dayOfTheYear(today.getFullYear(), today)
  const messageToday = verses.filter(i => i.day == numberToday)

  return messageToday
}

module.exports = { getMessage }