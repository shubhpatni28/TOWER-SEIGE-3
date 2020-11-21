class Ball {
    constructor(x,y,r){
        var options={
            isStatic:false,
            'friction':0.4,
            'density':1,
           'restitution':0.5,
        }
        this.x=x;
        this.y=y;
        this.r=r;

        this.image=loadImage("hexagon.png");
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate (this.body.angle)
        fill ("pink");

        imageMode(CENTER);
    image(this.image,0,0,this.r,this.r)
        pop ()
    }
}


