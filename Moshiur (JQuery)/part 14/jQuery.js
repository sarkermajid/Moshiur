$(document).ready(function(){
    $("button").click(function(){
        $(".p1").prepend("<b> Srkar Majid </b>");
    });
    
    $("#button2").click(function(){
        $(".p2").append(" Srkar majid");
    });
    
    $("#btn2").click(function(){
        $(".p3").before("Hi .....");
    });
});