let showing = false;

$(document).ready(function(){
    $("#cart").on("click", function() {
        if(showing){
            $(".shopping-cart").css("display", "none");
        } else {
            $(".shopping-cart").css("display", "block");
        }
        
        showing = !showing;
    });
})