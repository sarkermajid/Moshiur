$(document).ready(function(){
    
    
    $(".div1").click(function(){
        $(".div2").slideToggle(2000);
    });
    
    
    $("button").click(function(){
        $(".div2").stop();
    })
    
});