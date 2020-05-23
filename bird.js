class Bird {
    constructor(x, y) {
      var options = {
          'restitution':1.7,
          'friction':1.0,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      //this.body.position.x = 100;
      //this.body.position.y = 100;
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };