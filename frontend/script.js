const diaData = document.querySelector(".dia-data")
const main = document.querySelector("main")
const verse = document.querySelector(".versiculo")
const reference = document.querySelector(".referencia")
const API_URL = "/api/message"

const today = new Date().toLocaleDateString("pt-br")

async function getMessage(){
  const res = await fetch(API_URL)
  const data = await res.json()

  console.log(data)

  data.map(i => {
    diaData.innerHTML = `Dia ${i.day} · <span>${today}</span>`
    verse.innerText = `"${i.verse}"`
    reference.innerHTML = `${i.reference}`
  })
}

getMessage()

// Redirecionar ao instagram quando clicar na tela

main.addEventListener('click', () => {
  window.open("https://instagram.com/atelieeestampariarealize", "_blank")
})