class Tree {
    constructor(x,y,width,height){
        var options = {
            'isStatic':true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width+100;
        this.height = height;
        World.add(world,this.body);
        //loads the image
        this.image = loadImage("images/tree.png");
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}