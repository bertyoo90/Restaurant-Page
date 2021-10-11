import { initialLoad } from './initial-page-load.js'

initialLoad()

let home = document.querySelector('#home')

home.addEventListener('click', function(){
    initialLoad()
})



