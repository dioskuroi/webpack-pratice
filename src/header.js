/**
 * 
 * @param {HTMLParagraphElement} root 
 */
function Header (root) {
  const header = document.createElement('p')
  header.innerText = '这是项目头部'
  root.appendChild(header)
}

export default Header