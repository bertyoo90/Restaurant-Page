export function menuPage() {

    function removeContainer() {
        let parent = document.querySelector('#container')
    
        let child = parent.lastElementChild;
        while (child) {
        parent.removeChild(child)
        child = parent.lastElementChild
        }
    }

    removeContainer()

    let pageContent = document.querySelector('#content')
    let menuContainer = document.querySelector('#container')
    menuContainer.classList.add('container-menu')


    //menu items
    const menuItems = {
        gopchang: document.createElement('div'),
        samgyupsal: document.createElement('div'),
        chadolbaegi: document.createElement('div'),
        bulgogi: document.createElement('div')
    }
    

    //item descriptions
    const itemDescriptions = {
        gopDescription: document.createElement('p'),
        samDescription: document.createElement('p'),
        chadolDescription: document.createElement('p'),
        bulDescription: document.createElement('p')
    }
    

    //item pictures
    const itemPics = {
        gopPic: document.createElement('img'),
        samPic: document.createElement('img'),
        chadolPic: document.createElement('img'),
        bulPic: document.createElement('img')
    }
    

    // menu --> appending menu items to container
    menuContainer.appendChild(menuItems.gopchang)
    menuContainer.appendChild(menuItems.samgyupsal)
    menuContainer.appendChild(menuItems.chadolbaegi)
    menuContainer.appendChild(menuItems.bulgogi)

    // menu item names
    menuItems.gopchang.textContent = 'Gopchang'
    menuItems.samgyupsal.textContent = 'Samgyupsal'
    menuItems.chadolbaegi.textContent = 'Chadolbaegi'
    menuItems.bulgogi.textContent = 'Bulgogi'

    //description --> appending item descriptions to menu items
    menuItems.gopchang.appendChild(itemDescriptions.gopDescription)
    menuItems.samgyupsal.appendChild(itemDescriptions.samDescription)
    menuItems.chadolbaegi.appendChild(itemDescriptions.chadolDescription)
    menuItems.bulgogi.appendChild(itemDescriptions.bulDescription)

    //Menu item descriptions
    itemDescriptions.gopDescription.textContent = 'Small beef or pork intestine'
    itemDescriptions.samDescription.textContent = 'Thick cut pieces of pork belly'
    itemDescriptions.chadolDescription.textContent = 'Thinly sliced pieces of beef brisket'
    itemDescriptions.bulDescription.textContent = 'Marinated slices of beef or pork cooked on a hot griddle'


    // Placing pictures underneath the description
    itemDescriptions.gopDescription.appendChild(itemPics.gopPic)
    itemDescriptions.samDescription.appendChild(itemPics.samPic)
    itemDescriptions.chadolDescription.appendChild(itemPics.chadolPic)
    itemDescriptions.bulDescription.appendChild(itemPics.bulPic)
    itemPics.gopPic.src = './image/gopchang.jpg'
    itemPics.samPic.src = './image/samgyupsal.jpg'
    itemPics.chadolPic.src = './image/chadolbaegi.jpg'
    itemPics.bulPic.src = './image/bulgogi.jpg'

    //Setting container ID
    menuContainer.setAttribute('id', 'container')

    //Setting menu IDs
    menuItems.gopchang.setAttribute('id', 'gopchang')
    menuItems.samgyupsal.setAttribute('id', 'samgyupsal')
    menuItems.chadolbaegi.setAttribute('id', 'chadolbaegi')
    menuItems.bulgogi.setAttribute('id', 'bulgogi')

    //Setting description id's
    itemDescriptions.gopDescription.setAttribute('id', 'g-des')
    itemDescriptions.samDescription.setAttribute('id', 's-des')
    itemDescriptions.chadolDescription.setAttribute('id', 'c-des')
    itemDescriptions.bulDescription.setAttribute('id', 'b-des')

    //Setting picture id's
    itemPics.gopPic.setAttribute('id', 'gop-pic')
    itemPics.samPic.setAttribute('id', 'sam-pic')
    itemPics.chadolPic.setAttribute('id', 'chadol-pic')
    itemPics.bulPic.setAttribute('id', 'bul-pic')




   

    
   

}