


// validacion del formulario

$(document).ready(function() {
    

    $("#formulario").submit(function(e){

            console.log(e);
            $("#cargando").fadeIn(2000);
            
            setTimeout(function(){
                $("#cargando").fadeOut(1000);
            },7000);
    })

    $("select").change(function(){

        if($('#opcion').val() == 'si'){
            $('#abono').fadeIn(500);
            $("#abono").prop("required", true);
        }else{
            $('#abono').fadeOut(500);
            $("#abono").prop("required", false);
        }
    })

    $("#ver").click(function(){

        $('#informacion').fadeIn(1000);
            // $('#informacion').css("display", "block");
            $('#ver').css("display", "none");
            $('#nover').css("display", "block");
            
    })

    $("#nover").click(function(){
     
        $('#informacion').fadeOut(1000);
        // $('#informacion').css("display", "none");
        $('#ver').css("display", "block");
        $('#nover').css("display", "none");
        
    })


                    /* $("input").keyup(function(){
                            let contador; 

                            if($("#nombre").val().length < 1 || $("#apellidos").val().length < 1 || $("#poblacion").val().length < 1 || $("#email").val().length < 1 ){
                                contador = 1;
                            }else{
                                contador = 0;
                            }   
                            if(contador == 1){
                                $("#enviar").attr("disabled", true);
                                }else if(contador == 0){

                                    $('#opcion').change(function(){

                                        if($('#opcion').val() == 'no' ){
                                            $("#enviar").attr("disabled", false);
                                        }else if($('#opcion').val() == 'si'){

                                            $("#enviar").attr("disabled", true);

                                            $('#abono').keyup(function(){
                                                if($("#abono").val().length > 0){
                                                    $("#enviar").attr("disabled", false);
                                                }else{
                                                    $("#enviar").attr("disabled", true);
                                                }
                                            }) 
                                        }
                                    })
                                    
                                } 
                            
                        })*/

});


// activa el boton con el captcha
function enableBtn(){
    document.getElementById("enviar").disabled = false;

    setTimeout(function(){
        document.getElementById("enviar").disabled = true;
    },59600)
}

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




