

  $("#registrara").submit(function(e){
    $.ajax({
      "url":"/verify",
      "data":$(this).serialize(),
      "type":"post",
      "error": function(){
        swal("error inesperado");
      },
      "success": function(r){
        if(r == 1){
            swal("Registro Exitoso verifique su correo.","", "success");
        } else if(r == 2) {
            swal("Documento de IdentificaciÃ³n ya existente.","", "error");
            grecaptcha.reset();
        } else if(r == 3){
            swal("Correo ya utilizado.","", "warning");
            grecaptcha.reset();
        } else {
            swal("Valores invalidos.","", "warning");
            grecaptcha.reset();
        }
      }
    });
  });


