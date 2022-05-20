$(document).ready(function(){
    
    
    $("#btn1").click(function(){
        $("#p1").text("Hi Srkar Majid");
    });
    
    
    $("#btn2").click(function(){
        $("#p2").html("<h1> this is html tag </h1>");
    });
    
    
    $("#btn3").click(function(){
        $("#p3").val("Enter your first name");
    });
    
    
    $("#btn4").click(function(){
        $("#p4").attr("href","https://www.moshiur.me");
    });
    
})