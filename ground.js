class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
  
show(){
  var pos = this.body.position
  Matter.Body.rotate(this.body, angle)
  push()
  rectMode(CENTER)
  stroke(255)
  fill(127)
  translate(pos.x, pos.y)
  rotate(angle)
  rect(0, 0, this.w, this.h)
  pop();
  angle+=0.1
}
 
   
}
