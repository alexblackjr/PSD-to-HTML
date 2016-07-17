
$(document).ready(function(){
    'use strict';
    $('#bigWave').delay(100).css('visibility', 'visible')
        .animate({opacity: 1.0, top: '-240px'}, 6500)
        .delay(100).animate({opacity:0.3}, 1500)
        .delay(3500).fadeOut(1400);
    $('#wakeUp').delay(2700).css('visibility', 'visible')
        .animate({opacity: 1.0, top: '30px'}, 3000).fadeOut(800);
    $('#alive').delay(8500).css('visibility', 'visible')
        .animate({opacity: 1.0, top: '5px'}, 1000)
        .delay(1500).fadeOut(800);
    $('#nixon').delay(9500).css('visibility', 'visible')
        .animate({opacity: 1.0, top: '17px'}, 1000)
        .delay(700).fadeOut(700);
    $('#backDrop').delay(16000).css('visibility', 'visible')
        .animate({opacity: 1.0}, 1000);
    $('#watch').delay(13500).css('visibility', 'visible')
        .animate({opacity: 1.0}, 1000);
    $('#diplo').delay(14000).css('visibility', 'visible')
        .animate({opacity: 1.0}, 1000);
    $('#shop').delay(14500).css('visibility', 'visible')
        .animate({opacity: 1.0}, 1000);
    $('#logo').delay(15000).css('visibility', 'visible')
        .animate({opacity: 1.0, top: '1px'}, 800);
    
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
        $(".bottom").before('<img id="backDrop" class="bigView" src="img/backDrop.png"/>')
            .before('<img id="watch" class="bigView" src="img/watch.png"/>')
            .before('<img id="diplo" class="bigView" src="img/diplo.png"/>')
            .before('<img id="shop" class="bigView"  src="img/shopButton.png"/>')
            .before('<img id="logo" class="bigView" src="img/nixon.png"/>')
            .before('<img class="smallView" src="img/smallAd.png"/>');
        $('#backDrop').css('visibility', 'visible').animate({opacity: 1.0}, 1000);
        $('#watch').delay(1000).css('visibility', 'visible').animate({opacity: 1.0}, 1000);
        $('#diplo').delay(1750).css('visibility', 'visible').animate({opacity: 1.0}, 1000);
        $("#shop").delay(2500).css('visibility', 'visible').animate({opacity: 1.0}, 1000);
        $('#logo').delay(3000).css('visibility', 'visible').animate({opacity: 1.0, top: '1px'}, 1000);
        $("#innerFrame").css('background','#000000');
 });
    
});


