import { initialLoad } from './initial-page-load.js'
import { menuPage } from './menu.js'

initialLoad()

let home = document.querySelector('#home')
let menu = document.querySelector('#menu')

home.addEventListener('click', function(){
    home.classList.add('test')
    if (home.classList.contains('test')) {
        home.disabled = true;
    } else if (!home.classList.contains('test')) {
        initialLoad()
    }
})

menu.addEventListener('click', function() {
    // menu.classList.add('test')
    menuPage()
})





