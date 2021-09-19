var padre = $("#card > blockquote");
var a=-1;
padre.eq(0).css("display","flex");
function Slide(){
    a++;
    if(a>4){
        a=0;
    }
    padre.eq(a-1).css("display","none");
    padre.eq(a).css("display","flex");
    console.log(a);
}
setInterval(Slide,6000,a);