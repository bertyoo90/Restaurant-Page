import { initialLoad } from './initial-page-load.js'
import { menuPage } from './menu.js'
import { contactPage } from './contact.js'

// initialLoad()

const homeContent = initialLoad()
console.log(homeContent.container)

const pageContent = {
    home: document.querySelector('#home'),
    menu: document.querySelector('#menu'),
    contact: document.querySelector('#contact')
}
let container = document.querySelector('#container')



function removeChildren() {
    let parent = document.querySelector('#container')
    let child = document.querySelector('#container-wrapper')
    // while (child) {
    // parent.removeChild(child)
    // child = parent.lastElementChild
    // }
    parent.removeChild(child)
}


pageContent.home.addEventListener('click', function(){
    removeChildren()
    container.append(homeContent.container.containerWrapper)

})

pageContent.menu.addEventListener('click', function() {
    removeChildren()
    menuPage()
})

pageContent.contact.addEventListener('click', function(){
    removeChildren()
    contactPage()
})







