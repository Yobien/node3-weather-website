console.log('Client side Javascript file is loaded')

// fetch('http://localhost:3000/weather?address=Boston').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             return console.log(data.error)
//         }
//         console.log(data.location)
//         console.log(data.forecast)
//     })
// })

const weatherForm = document.querySelector('form') // permet de target une banniere html
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1') // #message-1 permet de target l'ID message-1 du document HTML
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From Javascript'


weatherForm.addEventListener('submit', (event) => {
    event.preventDefault() // permet au browser de ne pas se refraichir apres une recherche, il "handle".

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return messageOne.textContent = data.error
            }
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        })
    })

})