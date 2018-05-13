var game2;
(function (game2) {
    var MyGame = /** @class */ (function () {
        function MyGame() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext('2d');
        }
        MyGame.prototype.start = function () {
            this.Rects = new Array();
            for (var i_1 = 0; i_1 < 10; i_1++) {
                this.Rects[i_1] = new RectComponent(0, 0, 10, 10, "red", i_1);
            }
            window.setInterval(function () { update(); }, 20);
        };
        MyGame.prototype.update = function () {
            this.ctx.clearRect(0, 0, 600, 800);
            for (var i_2 = 0; i_2 < 10; i_2++) {
                this.Rects[i_2].update();
                this.Rects[i_2].draw(this.ctx);
            }
        };
        return MyGame;
    }());
    //x,y,w,h,color,dx,dy
    var RectComponent = /** @class */ (function () {
        function RectComponent(x, y, w, h, color, dx) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.color = color;
            this.dx = dx;
            //once you have this format, you don't have to set the values. It willa automatically set it up for you.
        }
        RectComponent.prototype.update = function () {
            this.x += this.dx;
        };
        RectComponent.prototype.draw = function (ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        };
        return RectComponent;
    }());
    var game = new MyGame();
    game.start();
})(game2 || (game2 = {}));
