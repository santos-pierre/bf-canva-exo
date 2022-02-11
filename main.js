/** @type {HTMLCanvasElement} */
let demo1 = document.querySelector('#demo1');

if (demo1.getContext) {
    let ctx = demo1.getContext("2d");

    ctx.fillStyle = 'red';
    ctx.fillRect(50, 50, 200, 200);
}

/** @type {HTMLCanvasElement} */
let demo2 = document.querySelector("#demo2");

if (demo2.getContext) {
    let ctx = demo2.getContext('2d');

    ctx.fillStyle = 'black';
    ctx.fillRect(50,50, 250, 250);

    ctx.fillStyle = 'white';
    ctx.fillRect(75,75, 200, 200);

    ctx.strokeStyle = 'black';
    ctx.strokeRect(100,100, 150,150);
}
/** @type {HTMLCanvasElement} */
let demo3 = document.querySelector("#demo3");

if (demo3.getContext) {
    let ctx = demo3.getContext('2d');

    ctx.strokeStyle = 'black';
    ctx.strokeRect(50, 125, 400, 240);

    ctx.fillStyle = 'red';
    ctx.fillRect(65, 142, 370, 205);

    ctx.fillStyle = 'white';
    ctx.fillRect(185, 225, 120, 30);

    ctx.fillStyle = 'white';
    ctx.fillRect(230, 180, 30, 120);
}
