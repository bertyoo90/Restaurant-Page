export default function initialLoad() {
    let content = document.querySelector('#content')
    let pageHeader = document.createElement('header')
    let homeHeader = document.createElement('p')
    let menuHeader = document.createElement('p')
    let aboutHeader = document.createElement('p')

    homeHeader.setAttribute('id', 'home')
    menuHeader.setAttribute('id', 'menu')
    aboutHeader.setAttribute('id', 'about')

    content.appendChild(pageHeader)
    pageHeader.appendChild(homeHeader)
    pageHeader.appendChild(menuHeader)
    pageHeader.appendChild(aboutHeader)

    homeHeader.textContent = 'Home'
    menuHeader.textContent = 'Menu'
    aboutHeader.textContent = 'About'



}


