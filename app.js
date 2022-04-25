
const p1DisplayElement = document.querySelector('.p1')
const p2DisplayElement = document.querySelector('.p2')
const p3DisplayElement = document.querySelector('.p3')
const p4DisplayElement = document.querySelector('.p4')
const button = document.querySelector('button')

const AllChars = [];

const generateAllChars = () => {
    for (let i = 32; i < 127; i++)
        AllChars.push(String.fromCharCode(i));
}

const generateRandomPassword = () => {
    let password = ''
    let passwordLength = document.querySelector('input[type="number"]').value
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * AllChars.length)
        password += AllChars[randomIndex]
    }
    return password
}

generateAllChars()

button.addEventListener('click', e => {
    e.preventDefault()
    generatePasswords()
})

function generatePasswords() {
    p1DisplayElement.innerText = generateRandomPassword()
    p2DisplayElement.innerText = generateRandomPassword()
    p3DisplayElement.innerText = generateRandomPassword()
    p4DisplayElement.innerText = generateRandomPassword()
}

