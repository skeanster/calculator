add = (num1, num2) => {return num1 + num2}
subtract = (num1, num2) => {return num1 - num2}
multilply = (num1, num2) => {return num1*num2}
divide = (num1, num2) => {return num1/num2}

const functionBtns = document.querySelectorAll("#functionBtns")
const topScreen = document.querySelector("#topScreen")
const bottomScreen = document.querySelector("#bottomScreen")

const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const zero = document.querySelector('#zero')

seven.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + '7'}
eight.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + '8'}
nine.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + '9'}
four.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + '4'}
five.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + '5'}
six.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + '6'}
one.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + '1'}
two.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + '2'}
three.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + '3'}
zero.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + '0'}



