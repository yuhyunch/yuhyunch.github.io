var board = document.querySelector("#board") as HTMLCanvasElement;
var ctx = board.getContext('2d');

ctx.fillStyle = "red";

var x = 0;
var y = 0;
setInterval(update, 20);
var checkX = 5;
var checkY = 0;

function update() {
    ctx.clearRect(0,0,1000,1000);
    x += checkX;
    y += checkY;

    if(x == 990 && y == 0){
        checkX = 0;
        checkY = 5;
    }
    else if(x == 990 && y == 990){
        checkX = -5;
        checkY = 0;
    }
    else if(x==0 && y == 990){
        checkX = 0;
        checkY = -5;
    }
    else if(x == 0 && y == 0){
        checkX = 5;
        checkY = 0;
    } 
    ctx.fillRect(x,y,10,10);
}