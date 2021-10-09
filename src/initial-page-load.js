export function initialLoad() {
    //content div with skeleton HTML
    let content = document.querySelector('#content')

    //Content under header
    let navigation = document.createElement('nav')
    let restaurantName = document.createElement('h2')  
    let pageHeader = document.createElement('header')
    let homeHeader = document.createElement('button')
    let menuHeader = document.createElement('button')
    let aboutHeader = document.createElement('button')


    //Content under container div
    let containerContent = document.createElement('div')
    let chefPic = document.createElement('img')
    let description = document.createElement('p')

    //Content under footer
    let footerContent = document.createElement('footer')
    let author = document.createElement('p')
    
    //#content --> appending child elements
    content.appendChild(pageHeader)
    content.appendChild(containerContent)
    content.appendChild(footerContent)

    //header --> appending child header/nav elements
    pageHeader.appendChild(restaurantName)
    pageHeader.appendChild(navigation)
    navigation.appendChild(homeHeader)
    navigation.appendChild(menuHeader)
    navigation.appendChild(aboutHeader)

    //container --> appending container child content
    containerContent.appendChild(description)
    containerContent.appendChild(chefPic)

    //footer --> appending footer child content
    footerContent.appendChild(author)

    //content #id's
    homeHeader.setAttribute('id', 'home')
    menuHeader.setAttribute('id', 'menu')
    aboutHeader.setAttribute('id', 'about')
    containerContent.setAttribute('id', 'container')
    restaurantName.setAttribute('id', 'english-title')
    description.setAttribute('id', 'description')
    chefPic.setAttribute('id', 'chef-pic')
    author.setAttribute('id', 'author')

    //Home elements
    homeHeader.textContent = 'Home'
    menuHeader.textContent = 'Menu'
    aboutHeader.textContent = 'About'


    //Container elements
    restaurantName.textContent = 'Gatji Meokja!'
    description.textContent = 'Come enjoy some authentic Korean Cuisine!'
    menuButton.textContent = 'Menu'
    chefPic.src = 'image/Chef_Roy_Choi.jpeg'

    //Footer elements
    author.textContent = 'Developed by Albert Yoo'


    return {
        content,
        pageHeader,
        homeHeader,
        aboutHeader,
        containerContent,
        restaurantName,
        description,
        foodPic,
        menuButton
    }

}




