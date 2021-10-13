
export function menuPage() {
    let menuContainer = document.querySelector('#container')
    menuContainer.textContent = ''
    menuContainer.classList.add('container-menu')

    //menu items
    let gopchang = document.createElement('div')
    let samgyupsal = document.createElement('div')
    let chadolbaegi = document.createElement('div')
    let bulgogi = document.createElement('div')

    //item descriptions
    let gopDescription = document.createElement('div')
    let samDescription = document.createElement('div')
    let chadolDescription = document.createElement('div')
    let bulDescription = document.createElement('div')

    //Setting menu IDs
    gopchang.setAttribute('id', 'gopchang')
    samgyupsal.setAttribute('id', 'samgyupsal')
    chadolbaegi.setAttribute('id', 'chadolbaegi')
    bulgogi.setAttribute('id', 'bulgogi')

    //Setting description classes
    gopDescription.setAttribute('class', 'description')
    samDescription.setAttribute('class', 'description')
    chadolDescription.setAttribute('class', 'description')
    bulDescription.setAttribute('class', 'description')

    //menu --> appending menu items to container
    menuContainer.appendChild(gopchang)
    menuContainer.appendChild(samgyupsal)
    menuContainer.appendChild(chadolbaegi)
    menuContainer.appendChild(bulgogi)

    //description --> appending item descriptions to menu items
    gopchang.appendChild(gopDescription)
    samgyupsal.appendChild(samDescription)
    chadolbaegi.appendChild(chadolDescription)
    bulgogi.appendChild(bulDescription)

    gopchang.textContent = 'Gopchang'
    samgyupsal.textContent = 'Samgyupsal'
    chadolbaegi.textContent = 'Chadolbaegi'
    bulgogi.textContent = 'Bulgogi'

    gopDescription.textContent = 'Small beef or pork intestine'
    samDescription.textContent = 'Thick cut pieces of pork belly'
    chadolDescription.textContent = 'Thinly sliced pieces of beef brisket'
    bulDescription.textContent = 'Marinated slices of beef or pork cooked on a hot griddle'



}