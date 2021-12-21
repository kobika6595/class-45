class Rule {
    constructor() {
      
     
      this.heading = createElement("h1");
      this.r1=createElement("h2")
    }
  
    setElementsPosition() {
     this.heading.position(width/2,300)
     this.r1.position(300,400)
    }
  
    setElementsStyle() {
    this.heading.class("heading")
    this.r1.class("rules")
    }
  
    hide() {
      this.heading.hide();
      this.r1.hide();
      
    }
  
    
    
  
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.heading.html("RULES")
      this.r1.html("1.Throw the dice to decide who plays first - highest score goes first, if it's a draw, throw again.")

    }
  }
  