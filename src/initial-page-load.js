export function initialLoad() {
    //content div with skeleton HTML
    let content = document.querySelector('#content')

    //Content under header
    const header = {
        navigation: document.createElement('nav'),
        restaurantName: document.createElement('h2'),  
        pageHeader: document.createElement('header'),
        homeHeader: document.createElement('button'),
        menuHeader: document.createElement('button'),
        aboutHeader: document.createElement('button')
    }

    //Content under container div
    const container = {
        containerContent: document.createElement('div'),
        containerWrapper: document.createElement('div'),
        chefPic: document.createElement('img'),
        description: document.createElement('p'),
        welcome: document.createElement('p'),
        comeSoon: document.createElement('p')
    }
    // let containerContent = document.createElement('div')
    // let chefPic = document.createElement('img')
    // let description = document.createElement('p')
    // let welcome = document.createElement('p')
    // let comeSoon = document.createElement('p')
    
    //Content under footer
    const footer = {
        footerContent: document.createElement('footer'),
        author: document.createElement('p')
    }

    
    //#content --> appending child elements
    content.appendChild(header.pageHeader)
    content.appendChild(container.containerContent)
    container.containerContent.appendChild(container.containerWrapper)
    content.appendChild(footer.footerContent)

    //header --> appending child header/nav elements
    header.pageHeader.appendChild(header.restaurantName)
    header.pageHeader.appendChild(header.navigation)
    header.navigation.appendChild(header.homeHeader)
    header.navigation.appendChild(header.menuHeader)
    header.navigation.appendChild(header.aboutHeader)

    //container --> appending container child content
    container.chefPic.src = './image/Chef_Roy_Choi.jpeg'
    container.containerWrapper.appendChild(container.description)
    container.containerWrapper.appendChild(container.welcome)
    container.containerWrapper.appendChild(container.chefPic)
    container.containerWrapper.appendChild(container.comeSoon)
    
    //footer --> appending footer child content
    footer.footerContent.appendChild(footer.author)

    //content #id's
    header.homeHeader.setAttribute('id', 'home')
    header.menuHeader.setAttribute('id', 'menu')
    header.aboutHeader.setAttribute('id', 'about')
    container.containerContent.setAttribute('id', 'container')
    container.containerWrapper.setAttribute('id', 'container-wrapper')
    header.restaurantName.setAttribute('id', 'english-title')
    container.description.setAttribute('id', 'description')
    container.welcome.setAttribute('id', 'welcome')
    container.comeSoon.setAttribute('id', 'come-soon')
    container.chefPic.setAttribute('id', 'chef-pic')
    footer.author.setAttribute('id', 'author')


    //Home elements
    header.homeHeader.textContent = 'Home'
    header.menuHeader.textContent = 'Menu'
    header.aboutHeader.textContent = 'About'

    //Container elements
    header.restaurantName.textContent = 'Gatji Meokja!'
    container.description.textContent = 'Gatji Meokja means lets eat together!'
    container.welcome.textContent = 'Come enjoy some authentic Korean Cuisine with us!'
    container.comeSoon.textContent = 'We hope to see you soon!'

    //Footer elements
    footer.author.textContent = 'Developed by Albert Yoo'


    return {
        content,
        header,
        container,
        footer
    }

}




