$(function(){
    $(".featured-products .product-item").hover(function(){
        $(".affiche .affiche-overlay").css("display","block");
        $(" .affiche .affiche-product-item").css("display","block");

        
    }, function(){
        $(" .affiche .affiche-product-item").css("display","none");
        $(".affiche .affiche-overlay").css("display","none");

     });
   
});