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

    const $textHabilities = $("#habilities");
    const imgHabilities = document.querySelector("#img-habilities");
    const tecnologies = ["HTML", "CSS", "JavaScript", "Git", "BootStrap", "Native"];
    
    let counter = 0

    const changeHabilities = () => {

        $textHabilities.text(tecnologies[counter]) ;
        imgHabilities.src = `./assets/${counter}.png`;

            counter++

                if(counter === tecnologies.length){
                    counter = 0
                }
        }

        changeHabilities()

        setInterval(changeHabilities, 800)






        

        const $points = $(".points");
        const pointsQuantity = ["", ".", "..", "..."];
        let counterPoints = 0
        const pointsAnimation = () => {


            $points.text(pointsQuantity[counterPoints]);

            counterPoints++

            if(counterPoints === pointsQuantity.length){
                counterPoints = 0
            }
    }


    setInterval(pointsAnimation, 400)