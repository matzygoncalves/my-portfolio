// Página Inicial






const invisibleContent = document.querySelector("#invisible-content");
const $btnIniciarTour = $(".btn-iniciar-tour");
const $inputName = $("#name");
const textWelcome = document.querySelector("#welcome span");
const $header = $("header");
const alertNoName = document.querySelector(".alert-no-name");



$btnIniciarTour.click(() => {

    $name = $inputName.val();
        if ($name === "" || $name.length < 3){
            alertNoName.style.display = 'block'
        }
        else {

$header.slideUp()
    textWelcome.textContent = ` ${$name}`;
    invisibleContent.id = "visible-content";
   
}   
});

// Efeito mudando o que estou estudando...

const textHabilities = document.querySelector("#habilities");
const imgHabilities = document.querySelector("#img-habilities");

let i = 0

   const changeHabilities = () => {
        i++

            if(i){
                imgHabilities.src = `./assets/${i}.png`;
            }

                switch(i){

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

            if(i === 6){
                i = 0
            }
    }

    setInterval(changeHabilities, 800)