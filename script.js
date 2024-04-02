const btnAdd= document.querySelector(".btn-add")
const divContainer= document.getElementById('container') 
btnAdd.addEventListener("click" ,makeSquare);

let no_of_square;

getInput =()=>{
    no_of_square= document.getElementById('no_of_squares').value;
    if(no_of_square > 100){
        console.log('invalid')
        return 
    }
    return no_of_square 
}


function makeSquare(){
    for(let i=0; i< getInput() ; i++){
        // console.log(no_of_square);
        const newDiv= document.createElement('div')
        newDiv.classList.add('square');
        divContainer.appendChild(newDiv)
    }
}





// for(let i=0; i< no_of_square ; i++){
//     console.log(no_of_square);
//     const newDiv= document.createElement('div')
//     newDiv.classList.add('square');
//     divContainer.appendChild(newDiv)
// }   


// function addNew(){
//     const newDiv= document.createElement("div")
//     newDiv.classList.add('box')
//     divContainer.appendChild(newDiv)
//     console.log("add");
// }

