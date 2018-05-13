var MyGame = /** @class */ (function () {
    function MyGame() {
        //initialize attribute of class.
        this.board = document.querySelector("#board");
        this.ctx = this.board.getContext('2d');
    }
    MyGame.prototype.start = function () {
        var _this = this;
        this.players = new Array();
        for (var i_1 = 0; i_1 < 10; i_1++) {
            this.players[i_1] = new RectComponent(i_1 * 10, i_1 * 100, 20, 20, "black");
            this.players[i_1].dx = i_1 + 5;
            this.players[i_1].dy = i_1 + 5;
        }
        window.setInterval(function () { _this.update(); }, 20);
    };
    MyGame.prototype.update = function () {
        this.ctx.clearRect(0, 0, 1000, 1000);
        for (var i_2 = 0; i_2 < this.players.length; i_2++) {
            this.players[i_2].update();
            this.players[i_2].draw(this.ctx);
        }
    };
    return MyGame;
}());
var RectComponent = /** @class */ (function () {
    function RectComponent(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = c;
    }
    RectComponent.prototype.update = function () {
        if (this.x > 980 || this.x < 0) {
            this.dx *= -1;
        }
        this.x += this.dx;
        if (this.y > 980 || this.y < 0) {
            this.dy *= -1;
        }
        this.y += this.dy;
    };
    RectComponent.prototype.draw = function (ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    };
    return RectComponent;
}());
//this is our hw
var circleComponent = /** @class */ (function () {
    function circleComponent() {
    }
    return circleComponent;
}());
//
var imageComponent = /** @class */ (function () {
    function imageComponent() {
    }
    return imageComponent;
}());
//
var game = new MyGame();
game.start();
