const divContainer = document.getElementById('main-container')
const btnAdd = document.querySelector(".btn-add")

const btnErase = document.querySelector(".btn-erase")
const btnBlue = document.querySelector(".btn-blue")
const btnRed = document.querySelector(".btn-red")
const btnYellow = document.querySelector(".btn-yellow")
const btnGreen = document.querySelector(".btn-green")

btnAdd.addEventListener("click", makeSquare);

btnErase.addEventListener("click", erase);
btnBlue.addEventListener('click', blueCol)
btnRed.addEventListener('click', redCol)
btnYellow.addEventListener('click', yellowCol)
btnGreen.addEventListener('click', greenCol)

function erase(){
    let boxes = [...document.querySelectorAll('.square')]
    boxes.forEach(box => {
        box.addEventListener('mouseover', () =>{
            box.style.backgroundColor = 'whitesmoke'
        });
    });
}
function blueCol(){
    let boxes = [...document.querySelectorAll('.square')]
    boxes.forEach(box => {
        box.addEventListener('mouseover', () =>{
            box.style.backgroundColor = 'blue'
        });
    });
}

function redCol(){
    let boxes = [...document.querySelectorAll('.square')]

    boxes.forEach(box => {
        box.addEventListener('mouseover', () =>{
            box.style.backgroundColor = '#dc143b'
        });
    });
}


function yellowCol(){
    let boxes = [...document.querySelectorAll('.square')]
    boxes.forEach(box => {
        box.addEventListener('mouseover', () =>{
            box.style.backgroundColor = '#FFD700'
        });
    });
}

function greenCol(){
    let boxes = [...document.querySelectorAll('.square')]

    boxes.forEach(box => {
        box.addEventListener('mouseover', () =>{
            box.style.backgroundColor = '#04AA6D'
        });
    });
}

var slider = document.getElementById("myRange")
var output = document.getElementById("demo")
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
    square = this.value;
}

let square=34;
function makeSquare() {
    divContainer.innerHTML = "";
    for (let i = 0; i < square*square; i++) {
        console.log(square);
        const newDiv = document.createElement('div')
        newDiv.classList.add('square');
        divContainer.appendChild(newDiv)
    }
    addEventListen();
}

function addEventListen() {
    let boxes = [...document.querySelectorAll('.square')]
    // let draw = false;

    boxes.forEach(box => {
        box.addEventListener('mouseover', () =>{
            box.style.backgroundColor = 'black'
            // draw = true;
        });
    });
}





















 // box.addEventListener('mousedown', () => {
    //     box.style.backgroundColor = 'drakgray'
    //     draw = true;
    // })

    
    // box.addEventListener('mouseup', () => {
    //     draw = false;
// });


 // box.addEventListener('mouseout', () =>{
    //     if(draw){
    //         box.style.backgroundColor = 'blue'
    //         // draw = true;
    //     }
// });




