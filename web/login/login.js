

$(document).ready(function() {
    


  
    $(document).mousemove(function(event) {
        TweenLite.to($("body"), 
        .5, {
            css: {
                backgroundPosition: "" + parseInt(event.pageX / 8) + "px " + parseInt(event.pageY / '12') + "px, " + parseInt(event.pageX / '15') + "px " + parseInt(event.pageY / '15') + "px, " + parseInt(event.pageX / '30') + "px " + parseInt(event.pageY / '30') + "px",
            	"background-position": parseInt(event.pageX / 8) + "px " + parseInt(event.pageY / 12) + "px, " + parseInt(event.pageX / 15) + "px " + parseInt(event.pageY / 15) + "px, " + parseInt(event.pageX / 30) + "px " + parseInt(event.pageY / 30) + "px"
            }
        })
    })





   $("#login").click(function(){  

   alert($("#username").val());
   alert($("#password").val());


    $.ajax({
                      async:true, 
                      dataType:"html", 
                      type: 'POST',   
                      url: "acesso/login.php",
                      data: { username: $("#username").val(), password: $("#password").val() } ,
                      success:  function(respuesta){

                          alert(respuesta);
                          window.location.replace("menu_principal.php");
                      },
                      beforeSend:function(){ alert("ya");},
                      error:function (xhr, ajaxOptions, thrownError) {
                      alert(xhr.status);
                      alert(thrownError);
                          }
                    });






     });

















})