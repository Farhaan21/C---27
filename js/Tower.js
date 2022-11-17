
class Tower {
    constructor(x, y, width, height) {
      var options = {
//set the static body(challenge 2)
      isStatic: true
      };
        //Load the image of the tower(challenge 5)
this.width = width;
    this.height = height;
      //write the instruction to create a rectangular tower body(challenge1)
      
      this.Tower = Bodies.rectangle(x, y, this.width, this.height, options)
      World.add(world, this.Tower)
      this.image = loadImage("assets/tower.png")
      //add the option inside the rectangular body(challenge 2)
      //Add this object to the World(challenge 2)
    }
display() {
    var pos = this.Tower.position;
    var angle = this.Tower.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    // rectMode(CENTER)
    image(this.image, 0, 0, this.width, this.height)
            //change the rect as image(challenge 5)

//display the rect function (challenge 3)
  pop();
  }
}
