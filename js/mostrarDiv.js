

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




