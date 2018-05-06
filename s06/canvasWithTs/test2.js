var board = document.querySelector("#board");
var ctx = board.getContext("2d");
for (var i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * 10);
    ctx.lineTo(i * 50, i * 10);
    ctx.stroke();
}
//command shift b for build.
ctx.font = "30px Arial";
ctx.fillText("coding is fun.", 450, 90, 200);
var grd = ctx.createLinearGradient(20, 300, 300, 350);
grd.addColorStop(0, "red");
grd.addColorStop(0.5, "Black");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(0, 300, 300, 350);
var smileImage = new Image();
smileImage.src = "smileyFace.jpeg";
smileImage.onload = function () {
    ctx.drawImage(smileImage, 500, 500);
};
