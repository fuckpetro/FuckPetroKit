var webPage = require('webpage');
var page = webPage.create();

page.open('https://regpetro.mppeuct.gob.ve/natural', function (status) {
  var content = page.content;
 if (page.injectJs('petro.js')) {
  page.evaluate(function() {
   function rellenar() {
        min = 1;
        max = 10000000000000000;
        var grecaptcha = 2;
	     grecaptcha.getResponse=function getResponse(){return 1};
        $("#t_dni").val('2');
        $("#nombre").val(Math.floor(Math.random()*(max-min+1)+min)+' '+Math.floor(Math.random()*(max-min+1)+min));
        $("#email").val(Math.floor(Math.random()*(max-min+1)+min)+'@gmail.com');
        $("#dni").val(Math.floor(Math.random()*(max-min+1)+min));
        $('#registrar').submit();

      
     
       
  }

    rellenar();

    console.log(document.title);
  });
}
var min=1000;
  var max=1000000000000;
page.render('fillPetro'+Math.floor(Math.random()*(max-min+1)+min)+'.jpeg');
  setTimeout(function(){
       page.render('petro'+Math.floor(Math.random()*(max-min+1)+min)+'.jpeg'); 
      // console.log(r1);
  phantom.exit();
    }, 3000);

});




