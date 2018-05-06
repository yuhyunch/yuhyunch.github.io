var board = document.querySelector("#board");
var ctx = board.getContext('2d');
for (var i_1 = 0; i_1 < 10; i_1++) {
    if (i_1 % 2 == 0) {
        for (var j = 0; j < 10; j++) {
            if (j % 2 == 0) {
                ctx.fillStyle = 'red';
                ctx.fillRect(j * 100, i_1 * 100, 100, 100);
            }
            else {
                ctx.fillStyle = 'black';
                ctx.fillRect(j * 100, i_1 * 100, 100, 100);
            }
        }
    }
    else {
        for (var j = 0; j < 10; j++) {
            if (j % 2 == 0) {
                ctx.fillStyle = 'black';
                ctx.fillRect(j * 100, i_1 * 100, 100, 100);
            }
            else {
                ctx.fillStyle = 'red';
                ctx.fillRect(j * 100, i_1 * 100, 100, 100);
            }
        }
    }
}
for (var i_2 = 1; i_2 < 10; i_2++) {
    for (var j = 1; j < 10; j++) {
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.arc(i_2 * 100, j * 100, 40, 0, Math.PI * 2);
        ctx.fill();
    }
}
