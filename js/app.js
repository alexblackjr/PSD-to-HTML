
$(document).ready(function(){
    'use strict';
    $('#bigWave').delay(1500).css('visibility', 'visible').animate({opacity: 1.0, top: '-300px'}, 6500);  
    $('#wakeUp').delay(4500).css('visibility', 'visible').animate({opacity: 1.0, top: '50px'}, 3000);
    $('#wakeUp').fadeOut(2000);
    $('#bigWave').delay(1500).animate({opacity:0.3}, 1500);
    $('#alive').delay(11000).css('visibility', 'visible').animate({opacity: 1.0, top: '50px'}, 1200); 
    $('#nixon').delay(11800).css('visibility', 'visible').animate({opacity: 1.0, top: '50px'}, 1000); 
    $('#nixon').delay(1000).fadeOut(1000);
    $('#alive').delay(1800).fadeOut(1000);
    $('#bigWave').delay(4250).fadeOut(1500);
    $('#backDrop').delay(16000).css('visibility', 'visible').animate({opacity: 1.0}, 1000); 
    $('#watch').delay(17000).css('visibility', 'visible').animate({opacity: 1.0}, 1000);
    $('#diplo').delay(17500).css('visibility', 'visible').animate({opacity: 1.0}, 1000);
    $('#shop').delay(18000).css('visibility', 'visible').animate({opacity: 1.0}, 1000);
    $('#logo').delay(18750).css('visibility', 'visible').animate({opacity: 1.0, top: '50px'}, 1000); 
    
     $("#collapse").on("click", function(){
        $("#collapse").css('visibility', 'hidden');  
        $("img").remove(".bigView");
        $("#innerFrame").css('background','white');
        $("#expand").css('visibility', 'visible');        
    });
    
    $("#expand").on("click", function(){
       
        $("#expand").css('visibility','hidden');
        $("img").remove(".smallView");
        $("#collapse").css('visibility', 'visible');
         
      
      
        $(".bottom").before('<img id="backDrop" class="bigView" src="img/backDrop.png"/>');
        $('#backDrop').css('visibility', 'visible').animate({opacity: 1.0}, 1000); 
        $(".bottom").before('<img id="watch" class="bigView" src="img/watch.png"/>');
        $('#watch').delay(1000).css('visibility', 'visible').animate({opacity: 1.0}, 1000);
        $(".bottom").before('<img id="diplo" class="bigView" src="img/diplo.png"/>');
        $('#diplo').delay(1750).css('visibility', 'visible').animate({opacity: 1.0}, 1000);
        $(".bottom").before('<img id="shop" class="bigView"  src="img/shopButton.png"/>');
        $("#shop").delay(2500).css('visibility', 'visible').animate({opacity: 1.0}, 1000);
        $(".bottom").before('<img id="logo" class="bigView" src="img/nixon.png"/>');
        $('#logo').delay(3000).css('visibility', 'visible').animate({opacity: 1.0, top: '50px'}, 1000);
        $(".bottom").before('<img class="smallView" src="img/smallAd.png"/>');            
        $("#innerFrame").css('background','#000000');
 });
    
});


