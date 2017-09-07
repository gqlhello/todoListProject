
// check off specific todos by clicking
$("ul").on("click", "li", function(){
    // if li is gray
    // turn it black
    // else turn it gray
//    if($(this).css("color") === "rgb(128, 128, 128)"){
//        $(this).css({
//        color: "black",
//        textDecoration: "none"
//        });
//    }
//    else{
//        $(this).css({
//        color: "gray",
//        textDecoration: "line-through"
//        });
//    }

    $(this).toggleClass("completed");

    // click on X to delete

});

$("ul").on("click", "span", function(event){
    //$(this).parent().fadeOut().remove();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation(); //不执行其他父元素的事件比如li
});

$("input[type='text']").keypress(function(event){
    // check enter key
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});