class myGame{

    board: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    components: icomponent[];

    constructor(){
        //initialize attribute of class.
        this.board = document.querySelector("#board");
        this.ctx = this.board.getContext('2d');
    }

    public start(){
        this.components = new Array<icomponent>();
        for(let i = 0; i<10; i++){
            this.components[i] = new icomponent(50,50,"mario.gif",100,100);
            this.components[i].dx = i+5;
            this.components[i].dy = i+5;  
        }
        this.update();
        //window.setInterval(()=>{this.update()},20);
    }

    public update(){
        this.ctx.clearRect(0,0,1000,1000);
        for(let i= 0; i<this.components.length; i++){
            //this.components[i].update();
            this.components[i].draw(this.ctx);
        }
    }
}

class icomponent{
    x:number;
    y:number;
    image:HTMLImageElement;
    width:number;
    height:number;

    dx:number;
    dy:number;

    constructor(x,y,color,width,height){
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = color;
        this.width = width;
        this.height = height;
    }

    public draw(ctx:CanvasRenderingContext2D){
        ctx.drawImage(this.image,this.x, this.y,this.width, this.height);
    }

    public update(){

    }

}

//main

var round = new myGame();
round.start();