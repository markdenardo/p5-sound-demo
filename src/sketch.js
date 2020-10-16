import p5 from '../node_modules/p5';

function sketch(p) {
    let rotation = 0;

    p.setup = function () {
        p.createCanvas(500,500);
    };

    p.draw = function () {
        if (p.mouseIsPressed) {
            p.fill(0);
        } else {
            p.fill(255);
        }
        p.ellipse(p.mouseX, p.mouseY, 80, 80);
    };
};


export default sketch;