class pink {
    constructor(x,y,width,height) {
      var options = {
         // isStatic: true
         'restitution':0.8,
         'friction':1.2,
         'density':1.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      //console.log(this.body.speed);
      var pos =this.body.position;
      rectMode(CENTER);
      fill("pink");
      if(this.body.speed<3){
      rect(pos.x, pos.y, this.width, this.height);
      } else{
        World.add(world,this.body);
        push();
        this.Visiblity=this.Visiblity-5;
        tint(255,this.Visiblity);
        pop();
      }
    }
    score(){
      if(this.Visiblity<0&&this.Visiblity>-1005){
        score++
      }
    }
  }