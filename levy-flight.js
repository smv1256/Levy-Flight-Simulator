/* canvas setup */
const ctx = document.getElementsByTagName("canvas")[0].getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

/* Monte Carlo method */
const monteCarlo = () => {
    while (true) {
        var r1 = Math.random();
        const probability = r1;
        const r2 = Math.random();
        if (r2 > probability) { return r1; }
    }
};

/* choose between two b'cuz I'm lazy */
const choice = (op1, op2) => {
    return (1 - Math.random() >= 0.5) ? op1 : op2;
};

/* create walker */
class Walker {
    constructor () {
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;
    }
    display () {
        ctx.fillStyle = "rgb(0, 180, 180)";
        ctx.fillRect(this.x - 0.5, this.y - 0.5, 1, 1);
    }
    walk () {
        let step = monteCarlo() * 10;

        this.x += choice(step, -step);
        this.y += choice(step, -step);
    }
    all () {
        this.display();
        this.walk();
    }
};

const w = new Walker();

/* animate */
const draw = () => {
    w.all ();

    setTimeout(draw, 0);
}

draw ();
