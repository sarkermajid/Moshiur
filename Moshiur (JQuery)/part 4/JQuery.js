$(document).ready(function(){
    $("p").on({
        mouseenter : function(){
            $(this).css("background","red");
        },
        mouseleave :function(){
            $(this).css("background","green");
        },
        click : function(){
            $(this).css("background","yellow");
        }
    });
});