class Stone {
    constructor(x,y,radius){
        var options = {
            'isStatic':false,
            'restitution':0.8,
            'friction':1,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius*2;
        World.add(world,this.body);
        //loads image
        this.image = loadImage("images/stone.png");
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}