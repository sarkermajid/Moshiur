$(document).ready(function(){
    
    
    $(".div1").children().css({
        "color": "green",
        "border":"2px solid green"
    });
    
    
    $(".div1").find("span").css({
        "color": "red",
        "border": "2px solid red"
    });
    
    
});