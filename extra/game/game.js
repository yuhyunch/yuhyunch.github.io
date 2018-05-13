var myGame = /** @class */ (function () {
    function myGame() {
        //initialize attribute of class.
        this.board = document.querySelector("#board");
        this.ctx = this.board.getContext('2d');
    }
    myGame.prototype.start = function () {
        this.components = new Array();
        for (var i_1 = 0; i_1 < 10; i_1++) {
            this.components[i_1] = new icomponent(50, 50, "mario.gif", 100, 100);
            this.components[i_1].dx = i_1 + 5;
            this.components[i_1].dy = i_1 + 5;
        }
        this.update();
        //window.setInterval(()=>{this.update()},20);
    };
    myGame.prototype.update = function () {
        this.ctx.clearRect(0, 0, 1000, 1000);
        for (var i_2 = 0; i_2 < this.components.length; i_2++) {
            //this.components[i].update();
            this.components[i_2].draw(this.ctx);
        }
    };
    return myGame;
}());
var icomponent = /** @class */ (function () {
    function icomponent(x, y, color, width, height) {
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = color;
        this.width = width;
        this.height = height;
    }
    icomponent.prototype.draw = function (ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    };
    icomponent.prototype.update = function () {
    };
    return icomponent;
}());
//main
var round = new myGame();
round.start();
