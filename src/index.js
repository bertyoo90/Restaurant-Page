import { initialLoad } from './initial-page-load.js'
import { menuPage } from './menu.js'
import { contactPage } from './contact.js'

// initialLoad()

const homeContent = initialLoad()

const pageContent = {
    home: document.querySelector('#home'),
    menu: document.querySelector('#menu'),
    contact: document.querySelector('#contact')
}
let container = document.querySelector('#container')
pageContent.home.classList.add('button-click')

let removeChildren = () => {
    let parent = document.querySelector('#container')
    let child = document.querySelector('#container-wrapper')
    parent.removeChild(child)
}


pageContent.home.addEventListener('click', function(){
    removeChildren()
    container.append(homeContent.container.containerWrapper)
    pageContent.home.classList.add('button-click')
    pageContent.menu.classList.remove('button-click')
    pageContent.contact.classList.remove('button-click')

})

pageContent.menu.addEventListener('click', function() {
    removeChildren()
    menuPage()
    pageContent.menu.classList.add('button-click')
    pageContent.home.classList.remove('button-click')
    pageContent.contact.classList.remove('button-click')
})

pageContent.contact.addEventListener('click', function(){
    removeChildren()
    contactPage()
    pageContent.contact.classList.add('button-click')
    pageContent.home.classList.remove('button-click')
    pageContent.menu.classList.remove('button-click')
})







