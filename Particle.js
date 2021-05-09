class Particle {
    constructor(x, y, r){
        var options = {
            isStatic:false,
            restitution:0.1
        }
        this.body = Bodies.circle(x, y, r, options);
        this.x= x;
        this.y = y;
        this.r = r;
        this.colour = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.colour);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}
