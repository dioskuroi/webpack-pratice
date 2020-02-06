import imgSrc from './cat.jpeg'

const root = document.querySelector('#root')

const img = new Image()
img.src = imgSrc

root.appendChild(img)