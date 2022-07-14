const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const namer = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML = '<img src="laozi.jpg" alt="">'
  title.innerHTML = 'Hello Laozi!'
  excerpt.innerHTML = 'The Tao that can be described is not the enduring and unchanging Tao.<br>The name that can be named is not the enduring and unchanging name.'
  profile_img.innerHTML = '<img src="laozi.jpg" alt="">'
  namer.innerHTML = 'Laozi'
  date.innerHTML = 'Aug 18, 2021'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
