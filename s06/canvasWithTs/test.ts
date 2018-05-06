var board = document.querySelector("#board") as HTMLCanvasElement
var ctx = board.getContext('2d');



for(let i = 0; i < 10; i++){

    if(i%2 == 0){
        for(let j = 0; j< 10; j++){
            if(j%2 == 0){
                ctx.fillStyle = 'red';
                ctx.fillRect(j*100,i*100,100,100);
            }
            else{
                ctx.fillStyle = 'black';
                ctx.fillRect(j*100,i*100,100,100);
            }
        }
    }
    else{
        for(let j = 0; j< 10; j++){
            if(j%2 == 0){
                ctx.fillStyle = 'black';
                ctx.fillRect(j*100,i*100,100,100);
            }
            else{
                ctx.fillStyle = 'red';
                ctx.fillRect(j*100,i*100,100,100);
            }
        }
    }
    
}


for(let i = 1; i < 10; i++){
    for(let j = 1; j<10; j++){
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.arc(i*100,j*100,40,0,Math.PI*2);
        ctx.fill(); 
    }
    
}



