import imgSrc from './cat.jpeg'
import './index.scss'

const root = document.querySelector('#root')

const img = new Image()
img.src = imgSrc
img.classList.add('img')

root.appendChild(img)