const search = document.querySelector('.search') // input wrong selector: querySelectorAll()
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})