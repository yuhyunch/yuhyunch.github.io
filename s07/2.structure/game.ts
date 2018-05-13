class MyGame{

    board: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    players: RectComponent[];

    constructor(){
        //initialize attribute of class.
        this.board = document.querySelector("#board");
        this.ctx = this.board.getContext('2d');
    }

    public start(){
        this.players = new Array<RectComponent>();
        for(let i = 0; i<10; i++){
            this.players[i] = new RectComponent(i*10,i*100,20,20,"black");
            this.players[i].dx = i+5;
            this.players[i].dy = i+5;  
        }
        window.setInterval(()=>{this.update()},20);
    }

    public update(){
        this.ctx.clearRect(0,0,1000,1000);
        for(let i= 0; i<this.players.length; i++){
            this.players[i].update();
            this.players[i].draw(this.ctx);
        }
    }

}

class RectComponent {
    x:number;
    y:number;
    w:number;
    h:number;
    color:string;
    dx:number;
    dy:number;

    constructor(x,y,w,h,c){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = c;
    }
    
    public update(){
        if(this.x > 980 || this.x<0){
            this.dx *= -1;
        }
        this.x += this.dx;

        if(this.y > 980 || this.y<0){
            this.dy *= -1;
        }
        this.y += this.dy;
    }
    
    public draw(ctx:CanvasRenderingContext2D){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }

    
}

//this is our hw
class circleComponent{

}
//
class imageComponent{

}

//
var game = new MyGame();
game.start();