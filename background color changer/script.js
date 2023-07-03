const button = document.querySelector('button')
const body = document.querySelector('body')
const color = ['red','yellow','blue','green','orange','violet']

body.style.backgroundColor = 'white'

button.addEventListener('click', changecolor)

function changecolor(){
    const colorI = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorI]
}