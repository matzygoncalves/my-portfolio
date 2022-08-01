const invisibleContent = document.querySelector("#invisible-content");
const btnIniciarTour = document.querySelector(".btn-iniciar-tour");
const inputName = document.querySelector("#name");
const textWelcome = document.querySelector("#welcome span");
const header = document.querySelector("header");
const alertNoName = document.querySelector(".alert-no-name");



btnIniciarTour.addEventListener("click", function(){

    const name = inputName.value;
    if (name === "" || name.length < 2){
        alertNoName.style.display = 'block'
    }
    else {

    textWelcome.textContent = ` ${name}`;
    invisibleContent.id = "visible-content";
    header.style.display = 'none' 
}
    
})


const textHabilities = document.querySelector("#habilities");
const imgHabilities = document.querySelector("#img-habilities");

let i = 0

function changeHabilities(){

i++

if(i){
    imgHabilities.src = `./assets/${i}.png`;
}

switch(i)
{
 case 1 : textHabilities.textContent = "HTML"
 break
 case 2 : textHabilities.textContent = "CSS"
 break

 case 3 : textHabilities.textContent = "JavaScript"
 break

 case 4 : textHabilities.textContent = "Git"
 break

 case 5 : textHabilities.textContent = "BootStrap"
 break

 case 6 : textHabilities.textContent = "Native"
 break

}

if(i === 6) {
    i = 0
}

}

setInterval(changeHabilities, 800)






