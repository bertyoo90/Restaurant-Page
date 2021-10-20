export function contactPage() {
    let container = document.querySelector('#container')
    let containerWrapper = document.createElement('div')
    containerWrapper.classList.add('container-contact')

    const contactPageItems = {
        phoneNum: document.createElement('div'),
        email: document.createElement('div'),
        address: document.createElement('div'),
        location: document.createElement('img')
    }

    //container --> appending containerWrapper to container
    container.appendChild(containerWrapper)

    //containerWrapper --> appending contactPageItems to containerWrapper
    containerWrapper.appendChild(contactPageItems.phoneNum)
    containerWrapper.appendChild(contactPageItems.email)
    containerWrapper.appendChild(contactPageItems.address)
    containerWrapper.appendChild(contactPageItems.location)

    contactPageItems.phoneNum.textContent = '703-123-4567'
    contactPageItems.email.textContent = 'fake-address@gmail.com'
    contactPageItems.address.textContent = '9700 Fairfax Blvd'
    contactPageItems.location.src = './image/location.jpg'
    
    contactPageItems.phoneNum.setAttribute('id', 'phone-num')
    contactPageItems.email.setAttribute('id', 'email')
    contactPageItems.address.setAttribute('id', 'address')
    contactPageItems.location.setAttribute('id', 'location')

    containerWrapper.setAttribute('id', 'container-wrapper')
}