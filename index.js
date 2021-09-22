const clear = document.querySelector('#clear')
clear.onclick =() => {bottomScreen.textContent = ''; topScreen.textContent=''}

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
const dot = document.querySelector('#dot')


seven.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + 7}
eight.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + 8}
nine.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + 9}
four.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + 4}
five.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + 5}
six.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + 6}
one.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + 1}
two.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + 2}
three.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + 3}
zero.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + 0}
dot.onclick = (num) => {bottomScreen.textContent= bottomScreen.textContent + '.'}


const division = document.querySelector('#divide')
const times = document.querySelector('#times')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const equals = document.querySelector('#equals')

plus.onclick = () => {topScreen.textContent=bottomScreen.textContent + ' +'; bottomScreen.textContent=''}
minus.onclick = () => {topScreen.textContent=bottomScreen.textContent + ' -'; bottomScreen.textContent=''}
times.onclick = () => {topScreen.textContent=bottomScreen.textContent + ' x'; bottomScreen.textContent=''}
division.onclick = () => {topScreen.textContent=bottomScreen.textContent + ' /'; bottomScreen.textContent=''}

equals.onclick = () => {let string = topScreen.textContent + ' ' + bottomScreen.textContent; 
topScreen.textContent=topScreen.textContent+ ' ' + bottomScreen.textContent;
string = string.split(' ');
console.log(string[1])
if (string[1] == '+') {bottomScreen.textContent= (+string[0] + +string[2])}
else if (string[1] == '-') {bottomScreen.textContent= (+string[0] - +string[2])}
else if (string[1] == 'x') {bottomScreen.textContent= (+string[0] * +string[2])}
else if (string[1] == '/') {bottomScreen.textContent= (+string[0] / +string[2])}
}