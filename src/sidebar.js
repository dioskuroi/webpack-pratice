/**
 * 
 * @param {HTMLParagraphElement} root 
 */
function Sidebar (root) {
  const sidebar = document.createElement('p')
  sidebar.innerText = '这是项目侧边栏'
  root.appendChild(sidebar)
}

export default Sidebar