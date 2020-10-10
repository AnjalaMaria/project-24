class Paper {
    constructor(x,y){
      var options={
        isStatic:false,
        restition:0.3,
        friction:0.5,
        density:1.2
      } 
      this.body = Bodies.circle (x,y,5,options);
      this.x=x;
      this.y=y;
      World.add(world,this.body);
    }
    display(){
      push();
      translate(this.body.position.x,this.body.position.y);
      strokeWeight(4);
      stroke("red");
      fill("pink");
      circle(0,0,this.radius);
      pop();
    }
}