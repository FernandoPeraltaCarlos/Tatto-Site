var menuMobile = $("#menu-mobile");
var menu = $("#menu");
var tamaño = screen.width;
/* if(tamaño<=768){
    menu.css("display","none");
}
menuMobile.click(function(){
    console.log("click");
    if(menu.css("display")=="none"){
        menu.css("display","flex");
    }
    else if(menu.css("display")=="flex"){
        menu.css("display","none");
    }
});  */
menuMobile.click(function(){
    menu.slideToggle();
});