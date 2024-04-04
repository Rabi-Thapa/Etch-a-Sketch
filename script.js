const divContainer = document.getElementById('main-container')
const btnAdd = document.querySelector(".btn-add")
btnAdd.addEventListener("click", makeSquare);


var slider = document.getElementById("myRange")
var output = document.getElementById("demo")
output.innerHTML = slider.value; // Display

slider.oninput = function () {
    output.innerHTML = this.value;
    square = this.value;
}

let square=8;
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
    let draw = false;
    boxes.forEach(box => {
        // box.addEventListener('mousedown', () => {
        //     box.style.backgroundColor = 'drakgray'
        //     draw = true;
        // })

        
        // box.addEventListener('mouseup', () => {
        //     draw = false;
        // });

        box.addEventListener('mouseover', () =>{
            box.style.backgroundColor = 'darkgray'
            // draw = true;
        });

        // box.addEventListener('mouseout', () =>{
        //     if(draw){
        //         box.style.backgroundColor = 'blue'
        //         // draw = true;
        //     }
        // });
    });
}





