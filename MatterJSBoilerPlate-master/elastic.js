class Elastic {
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:15
        }
        this.pointB = pointB;
        this.elastic = Constraint.create(options);
        World.add(world,this.elastic);
    }

    display(){

       
        if(this.elastic.bodyA){
        var pointA = this.elastic.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        
        
    }
        }
    fly(){
        this.elastic.bodyA = null;
    }

     attach(){
         if(this.elastic.bodyA){
            var pointA = this.elastic.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);  
         }
    }
}