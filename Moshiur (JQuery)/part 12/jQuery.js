$(document).ready(function(){
    
    
    $("#btn1").click(function(){
        alert("TEXT : " + $("#p1").text());
    });
    
    $("#btn2").click(function(){
        alert("HTML : " + $("#p1").html());
    });
    
    $("#btn3").click(function(){
        alert($("#valu1").val());
    });
    
    $("#btn4").click(function(){
        alert($("#attr1").attr("href"));
    });
});