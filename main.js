//var mouse_event="empty";
var last_xposition, last_yposition;
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var color="black";
var width_of_line="1";
var width = screen.width;
var new_width = screen.width - 70;
var new_height = screen.height - 300;
if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", touchstart_event);
function touchstart_event(e) {
    console.log("touchstart is happening :D");
    last_xposition = e.touches[0].clientX - canvas.offsetLeft;
    last_yposition = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", touchmove_event);
function touchmove_event(e) {
    console.log("touchmove event is happening :D");
    current_xposition = e.touches[0].clientX - canvas.offsetLeft;
    current_yposition = e.touches[0].clientY  - canvas.offsetTop;
    ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_xposition, last_yposition);
        console.log(last_yposition + ": this is last y position");
        console.log(last_xposition + ": this is last x position"); 
        console.log(current_xposition + ": this is current x position");
        console.log(current_yposition + ": this is current y position"); 
        ctx.lineTo(current_xposition, current_yposition);
        ctx.stroke();
    last_yposition = current_yposition;
    last_xposition = current_xposition;
}
/*canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    mouse_event="mousedown";
    console.log(mouse_event);
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    var current_xposition=e.clientX-canvas.offsetLeft;
    var current_yposition=e.clientY-canvas.offsetTop;
    if (mouse_event="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.moveTo(last_xposition, last_yposition);
        console.log(last_yposition + ": this is last y position");
        console.log(last_xposition + ": this is last x position"); 
        console.log(current_xposition + ": this is current x position");
        console.log(current_yposition + ": this is current y position"); 
        ctx.lineTo(current_xposition, current_yposition);
        ctx.stroke();
        console.log(mouse_event);
    }
    last_xposition=current_xposition;
    last_yposition=current_yposition;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouse_event="mouseup";
    console.log(mouse_event);
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouse_event="mouseleave";
    console.log(mouse_event);
}*/
