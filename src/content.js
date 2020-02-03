/**
 * 
 * @param {HTMLParagraphElement} root 
 */
function Content (root) {
  const content = document.createElement('p')
  content.innerText = '这是项目内容'
  root.appendChild(content)
}

export default Content