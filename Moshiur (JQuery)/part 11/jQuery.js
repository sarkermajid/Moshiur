$(document).ready(function(){
    $("button").click(function(){
        $(".p1").css("background","red")
        .slideUp(1000)
        .slideDown(1000)
        .hide(1000);
    });
});