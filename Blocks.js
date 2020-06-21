class Blocks {
    constructor(x, y, width, height) {
      var options = {
       // isStatic: true
          'restitution':0.8,
          'friction' : 1.0,
          'density':1.0
      }
      this.visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      
      if(this.body.speed <4){
        var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("green");
      rect(0,0, this.width, this.height);
      pop();
      }
       else{
        World.remove(world, this.body);
        push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            pop();
        }
      }
      
      score(){
        if (this.Visiblity < 0 && this.Visiblity > -1005){
          score++;
        }
      }
  };