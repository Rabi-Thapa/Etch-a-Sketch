const btnAdd= document.querySelector(".btn-add")
// btnAdd.addEventListener("click", addNew);
const divContainer= document.getElementById( 'container' ) 


for(let i=0; i<100 ; i++){
    
    const newDiv= document.createElement('div')
    newDiv.classList.add('card');
    divContainer.appendChild(newDiv)
}



// function addNew(){
//     const newDiv= document.createElement("div")
//     newDiv.classList.add('box')
//     divContainer.appendChild(newDiv)
//     console.log("add");
// }

