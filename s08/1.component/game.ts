namespace game2 {

    class MyGame {
        public board: HTMLCanvasElement;
        public ctx: CanvasRenderingContext2D;
        public Rects: RectComponent[];

        public constructor() {
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext('2d');
        }

        public start() {
            this.Rects = new Array<RectComponent>();
            for(let i = 0; i < 10; i++){
                this.Rects[i] = new RectComponent(0,0,10,10,"red",i);
            }
            window.setInterval(()=>{update()},20);
        }

        public update(){
            this.ctx.clearRect(0,0,600,800);
            for(let i = 0; i < 10; i++){
                this.Rects[i].update();
                this.Rects[i].draw(this.ctx);
            }
        }
    }

    //x,y,w,h,color,dx,dy
    class RectComponent {

        constructor(public x: number, public y: number, public w: number, public h: number, public color: string, public dx: number) {
            //once you have this format, you don't have to set the values. It willa automatically set it up for you.
        }

        public update() {
            this.x += this.dx;
        }

        public draw(ctx: CanvasRenderingContext2D) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
        }
    }

    var game = new MyGame();
    game.start();

}

