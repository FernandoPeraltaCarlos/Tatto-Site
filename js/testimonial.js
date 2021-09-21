var padre = $("#card > blockquote");
var a=-1;
padre.eq(0).css("display","flex");
function Slide(){
    a++;
    if(a>4){
        a=0;
    }
    /*padre.eq(a-1).css("display","none");
    padre.eq(a).css("display","flex");*/
    padre.eq(a-1).fadeOut(1000);
    setTimeout(function(){
        padre.eq(a).fadeIn(1000);
        padre.eq(a).css("display","flex");
    },1000);
}
setInterval(Slide,6000,a);