const divContainer = document.getElementById('main-container')
const btnAdd = document.querySelector(".btn-add")
const btnBlue = document.querySelector(".btn-blue")
btnAdd.addEventListener("click", makeSquare);

btnBlue.addEventListener('click', chooseColor)


function chooseColor(){
    let boxes = [...document.querySelectorAll('.square')]

    boxes.forEach(box => {
        box.addEventListener('mouseover', () =>{
            box.style.backgroundColor = 'blue'
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

let square=16;
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




