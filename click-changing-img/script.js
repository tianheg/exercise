let myImage = document.querySelector('img')
let myButton = document.querySelector('button')
const buttons = document.querySelectorAll('.ripple')
let myHeading = document.querySelector('h1')

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src')
  if (mySrc === 'firefox-icon.png') {
    myImage.setAttribute('src', 'firefox2.png')
  } else {
    myImage.setAttribute('src', 'firefox-icon.png')
  }
}

function setUserName() {
  let myName = prompt('What is your name?')
  if (!myName) {
    setUserName()
  } else {
    localStorage.setItem('name', myName)
    myHeading.textContent = 'Hello ' + myName
  }
}

if (!localStorage.getItem('name')) {
  setUserName()
} else {
  let storedName = localStorage.getItem('name')
  myHeading.textContent = 'Hello ' + storedName
}

myButton.onclick = function () {
  setUserName()
}

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const x = e.clientX
    const y = e.clientY

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
  })
})
