$(document).ready(function(){
    $("div").first().css("background-color","yellow");
    
    $("div").last().css("background-color","orange");
    
    $("p").eq(1).css("background-color","green");
    
    $("p").filter(".intro").css("background-color","black");
})