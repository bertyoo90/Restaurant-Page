
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
    let gopDescription = document.createElement('p')
    let samDescription = document.createElement('p')
    let chadolDescription = document.createElement('p')
    let bulDescription = document.createElement('p')

    //item pictures
    let gopPic = document.createElement('img')
    let samPic = document.createElement('img')
    let chadolPic = document.createElement('img')
    let bulPic = document.createElement('img')

    //Setting menu IDs
    gopchang.setAttribute('id', 'gopchang')
    samgyupsal.setAttribute('id', 'samgyupsal')
    chadolbaegi.setAttribute('id', 'chadolbaegi')
    bulgogi.setAttribute('id', 'bulgogi')

    //Setting description id's
    gopDescription.setAttribute('id', 'g-des')
    samDescription.setAttribute('id', 's-des')
    chadolDescription.setAttribute('id', 'c-des')
    bulDescription.setAttribute('id', 'b-des')

    //Setting picture id's
    gopPic.setAttribute('id', 'gop-pic')
    samPic.setAttribute('id', 'sam-pic')
    chadolPic.setAttribute('id', 'chadol-pic')
    bulPic.setAttribute('id', 'bul-pic')
  


    // menu --> appending menu items to container
    // menuContainer.appendChild(gopchang)
    // menuContainer.appendChild(samgyupsal)
    // menuContainer.appendChild(chadolbaegi)
    // menuContainer.appendChild(bulgogi)

    
    // menu item names
    // gopchang.textContent = 'Gopchang'
    // samgyupsal.textContent = 'Samgyupsal'
    // chadolbaegi.textContent = 'Chadolbaegi'
    // bulgogi.textContent = 'Bulgogi'


    //description --> appending item descriptions to menu items
    // gopchang.appendChild(gopDescription)
    // samgyupsal.appendChild(samDescription)
    // chadolbaegi.appendChild(chadolDescription)
    // bulgogi.appendChild(bulDescription)


    //Menu item descriptions
    // gopDescription.textContent = 'Small beef or pork intestine'
    // samDescription.textContent = 'Thick cut pieces of pork belly'
    // chadolDescription.textContent = 'Thinly sliced pieces of beef brisket'
    // bulDescription.textContent = 'Marinated slices of beef or pork cooked on a hot griddle'


    //Placing pictures underneath the description
    gopPic.src = './image/gopchang.jpg'
    samPic.src = './image/samgyupsal.jpg'
    chadolPic.src = './image/chadolbaegi.jpg'
    bulPic.src = './image/bulgogi.jpg'
    menuContainer.appendChild(gopPic)
    menuContainer.appendChild(samPic)
    menuContainer.appendChild(chadolPic)
    menuContainer.appendChild(bulPic)

    
   

}