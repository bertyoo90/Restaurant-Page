import { initialLoad } from './initial-page-load.js'
import { menuPage } from './menu.js'

initialLoad()

let home = document.querySelector('#home')
let menu = document.querySelector('#menu')

// const parent = document.querySelector('#content')
// const header = document.querySelector('header')
// const container = document.querySelector('.container-menu')
// const footer = document.querySelector('footer')

// function removeChildren() {
//     let parent = document.querySelector('#content')

//     let child = parent.lastElementChild;
//     while (child) {
//     parent.removeChild(child)
//     child = parent.lastElementChild
//     }
// }


home.addEventListener('click', function(){
    // parent.removeChild(header)
    // parent.removeChild(container)
    // parent.removeChild(footer)
    initialLoad()


})

menu.addEventListener('click', function() {
    // parent.removeChild(header)
    // parent.removeChild(container)
    // parent.removeChild(footer)
    menuPage()

    
    // home.style.pointerEvents = 'auto'
    // home.classList.remove('test')
    // menu.classList.add('test')

    // menuPage()

    // if (menu.classList.contains('test')) {
    //     menu.style.pointerEvents = 'none'
    // } else if (!menu.classList.contains('test')) {
    //     menuPage()
    // }

})





