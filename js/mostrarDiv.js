

$(document).ready(function() {
    
    $("#formulario").submit(function(){
        
        $("#mensajeEnviado").fadeIn();
    })

    $("input").change(function(){
        let contador; 
        if($("#nombre").val() === "" || $("#apellidos").val() === "" || $("#poblacion").val() === "" || $("#email").val() === "" || $("#telefono").val() === ""){
            contador = 1;
        }else{
            contador = 0;
        }

        if(contador == 0){
            $("#enviar").attr("disabled", false);
        }else{
            $("#enviar").attr("disabled", true);
        }         
    })

});

/// PONER UN BOTON ACTIVO SI ESTAS EN ESA PAGINA
    const url = window.location.href;
    console.log(url);
    const enlaces = document.querySelectorAll('.nav-link');

     enlaces.forEach((enlace) => {   
    //console.log(enlace.href);
        if(url === enlace.href){
            enlace.classList.add('menu_activo');
            console.log('clase añadida en '+ enlace);
        }else{
            enlace.classList.remove('menu_activo');
            console.log('clase borrada en '+ enlace);
        }
    })

////////////////////////////////////////////////

// animacion del slider

//Pequeño script para el slider, no es necesario para que funcione pero podemos tunear muchas cosas-->

    $(document).ready(function(){
        
        $(".carousel").carousel({ /*para que funcione el slider con el intervalo que queremos*/
            interval: 4000
        });

        $('[data-toggle="tooltip"]').tooltip(); /*esto es para que funcionen los tooltips*/

        $('[data-toggle="popover"]').popover(); /*esto es para que funcionen los popovers*/

    });

    //////////////////////////////////////////////////////////////////////////////////




