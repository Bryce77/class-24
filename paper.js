class Paper{
    constructor(x,y,width,height){

        

        var options = {
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2,
        }

        this.body = Matter.Bodies.circle(200,200,30,options);
        
        World.add(world, this.body); 
      
    }

    display(){
        var pos = this.body.position;
          
        ellipse(pos.x,pos.y, 30, 30);


    }


}