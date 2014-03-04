/**
 * Created by Administrator on 2/27/14.
 */
console.log("start canvas");

(function(){

    var canvas = document.createElement("canvas"); //creates a canvas element programmatically
    document.body.appendChild(canvas);//adds the canvas to the DOM
    var ctx = canvas.getContext("2d");//gain access to the canvas API
    canvas.width = 400;
    canvas.height = 400;

    ctx.beginPath(); //starts drawing path or resets the current path
    ctx.strokeStyle = "#ff0000"; //sets stroke color
    ctx.lineWidth = 2; //sets stroke size
    ctx.moveTo(200,0); //defines the starting point of the line
    ctx.lineTo(200, 400); //defines the ending point of the line
    ctx.stroke(); //draws the line on canvas


    ctx.beginPath();
    ctx.fillStyle = "#ff0000"; //defines a fill color
    ctx.rect(175, 175, 50, 50); //defines the rectangle at x=175 and y=175 with a width and height of 50
    ctx.fill(); //renders the fill
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();

    //draw circle with stroke
    ctx.beginPath();
    ctx.fillStyle = "rgb(0,0,255,255)";
    ctx.lineWidth = 8;
    ctx.arc(300,100,40,0,2*Math.PI); //defines the arc at x=300, y=100, and radius of 40, starting at
    ctx.stroke();
    ctx.fill();



}());