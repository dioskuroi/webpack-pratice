import Header from './header'
import Content from './content'
import Sidebar from './sidebar'

const root = document.querySelector('#root')

new Header(root)
new Content(root)
new Sidebar(root)