 var caixa = $("#caixa");

 $("#animacao1").on('click', function(){
    caixa.animate({width:"1000px", height:"1000px", borderRadius:"100%"})
    
 });

 $("#animacao2").on('click', function(){
    caixa.animate({width:"300px", height:"300px", borderRadius:"0%"}).animate({marginLeft: "200px"})
    
 });

 $("#animacao3").on('click', function(){
    caixa.animate({marginTop: "300px", marginRight: "100px", rotate: "360deg"}, {duration:1000, complete: ()=>{alert("Se o cão tiver depressão,animacão")}})
    
 });

 
 $("#animacao4").on('click', function(){
    caixa.animate({margin: "0px", rotate: "-360deg"})
})
    
$("#animacao5").on('click', function(){
    caixa.hide(1000);
    // caixa.slideUp(1000);
    // caixa.fadeOut(1000)
})

$("#animacao6").on('click', function(){
  // caixa.slideDown(1000);
    // caixa.fadeIn(1000)
    caixa.show(1000)
})

$("#animacao7").on('click', function(){
    // caixa.slideToggle(1000);
      caixa.fadeToggle(1000);
  
  })
    
  $("#animacao8").on('click', function(){
      caixa.css("transition","1s");
   caixa.css("backgroundColor","blue");
  })

    
