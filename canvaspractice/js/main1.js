/**
 * Created by Administrator on 2/27/14.
 */
(function(){
    var canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;
for (var i = 0; i < 1000; i++){
    ctx.beginPath();
    ctx.fillStyle = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255);
    ctx.lineWidth = 1;
    ctx.arc(Math.floor(Math.random()*400),Math.floor(Math.random()*400),Math.floor(Math.random()*50),0,2*Math.PI);

    ctx.fill();
}




}());