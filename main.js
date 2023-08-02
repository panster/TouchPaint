var last_position_of_x, last_position_of_y;

var canvas = document.getElementById('mycanvas')
var ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

var width = screen.width;
var new_width = width - 70;
var height = screen.height;
var new_heiight = heiight - 300;

if(width < 992) {
    document.getElementById('mycanvas').width = new_width;
    document.getElementById('mycanvas').height = new_height;
    document.body.style.overflow = "hidden";
}
function myTouchStart(e){
    console.log ('my touchstart');
    last_posiition_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_posiition_of_y = e.touches[0].clientY - canvas.offsetTop;
    
}
function myTouchMove(e){
    console.log("my touchmove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = document.getElementById("color").value;
    ctx.lineWidth = document.getElementById("width_of_line").value;

    console.log(last_position_of_x, last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log(current_position_of_touch_x,current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
ctx.stroke();

last_position_of_x=current_position_of_touch_x;
last_position_of_y=current_position_of_touch_y;

}
canvas.addEventListener("touchstart", myTouchStart);



canvas.addEventListener("touchmove", myTouchMove);

document.getElementById("clear").addEventListener('touchstart', function() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
});