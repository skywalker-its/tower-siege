class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);

        this.chain1= loadImage("sprites/chain1.png")
        this.chain2= loadImage("sprites/chain2.png")
        this.chain3= loadImage("sprites/chain3.png")

        World.add(world,this.chain);
    }
      Fly(){
          this.chain.bodyA = null;
      }

       
    attach(body){
        this.chain.bodyA = body;
    }

    display(){

        image(this.chain1,600,240);
        image(this.chain2,570,240)

       
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8)
            line(pointA.x+30, pointA.y, pointB.x+10, pointB.y);
            line(pointA.x+30, pointA.y, pointB.x-30, pointB.y);
            image(this.chain3,pointA.x,pointA.y,15,30)
        }
    }
    
}