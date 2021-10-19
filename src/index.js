import { initialLoad } from './initial-page-load.js'
import { menuPage } from './menu.js'

// initialLoad()

const homeContent = initialLoad()
console.log(homeContent)

let container = document.querySelector('#container')
let home = document.querySelector('#home')
let menu = document.querySelector('#menu')


function removeChildren() {
    let parent = document.querySelector('#container')
    let child = parent.lastElementChild;
    while (child) {
    parent.removeChild(child)
    child = parent.lastElementChild
    }
}


home.addEventListener('click', function(){
    removeChildren()
    container.append(homeContent)


})

menu.addEventListener('click', function() {
    removeChildren()
    menuPage()
})





