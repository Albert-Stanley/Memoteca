import ui from './ui.js'
import api from './api.js'

document.addEventListener('DOMContentLoaded', () => {
  ui.renderizarPensamentos()

  const formularioPensamento = document.getElementById('pensamento-form')
  formularioPensamento.addEventListener("submit", manipularSubmitFormulario)
})
async function manipularSubmitFormulario(event) {
  event.preventDefault()
  const id = document.getElementById('pensamento-id').value
  const conteudo = document.getElementById('pensamento-conteudo').value
  const aurotia = document.getElementById('pensamento-autoria').value

  try {
    await api.salvarPensamentos({ conteudo, autoria })
    ui.renderizarPensamentos()
  } catch {
    alert("Erro ao salvar os pensamentos")
  }
}