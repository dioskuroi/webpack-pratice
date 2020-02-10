import imgSrc from './cat.jpeg'
import './index.scss'

throw Error()

const root = document.querySelector('#root')

const img = new Image()
img.src = imgSrc
img.classList.add('img')

const div = document.createElement('div')
div.classList.add('iconfont')
div.classList.add('icon-spin')

root.appendChild(img)
root.appendChild(div)