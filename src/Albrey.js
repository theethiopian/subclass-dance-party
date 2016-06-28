var albreyDancer = function(top, left, timeBetweenSteps){
  // Makes albrey an instance of the Dancer superclass with same properties
  makeDancer.call(this, top, left, timeBetweenSteps);

  // Adds "brey" class to brey, which allows additional styling
  this.$node.addClass('brey');
};

// Import the methods of the Dancer superclass
albreyDancer.prototype = Object.create(makeDancer.prototype);

// Reset the constructor to of brey to brey
albreyDancer.prototype.constructor = albreyDancer;

// Call the Dancer step method, which repeatedly calls the step method
albreyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);

  // Creates random y and x coordinates
  var randY = $("body").height() / 3 * (2 * Math.random() - 1);
  var randX = $("body").width() / 3 * (2 * Math.random() - 1);

  // Changes HRDancer's position with animate transition (in style.css)
  setTimeout(function(){

    // albrey current x and y coordinates
    var currentY = this.$node.position().top;
    var currentX = this.$node.position().left;

    // Calls the makeDancer superclass setPosition method with new x and y coordinates
    makeDancer.prototype.setPosition.call(this, currentY + randY, currentX + randX);

  }.bind(this), 0);

  // X and Y coordinates for center of albrey
  var $nodeNewX = this.$node.position().left + 50;
  var $nodeNewY = this.$node.position().top + 50;

  // Iterates through each dancer in the global "dancers" array
  window.dancers.forEach(function(dancer) {

    // Only perform actions for instances of albrey
    if (dancer instanceof albreyDancer){
      
      // X and Y coordinates for center of each albrey
      var dancerNewX = dancer.$node.position().left + 50;
      var dancerNewY = dancer.$node.position().top + 50;

      // Calculates distance between albrey
      var dist = Math.sqrt(Math.pow(($nodeNewX - dancerNewX), 2) + Math.pow(($nodeNewY - dancerNewY),2));
      
      // Logic for when albrey collide with one another
      var dancerCollision = dist !== 0 && dist <= 100;

      // Logic for when albrey collide with the wall
      var wallCollision = 
        dancerNewX - 50 <= 0 || 
        dancerNewX + 50 >= $("body").width() || 
        dancerNewY - 50 <= 0 || 
        dancerNewY + 50 >= $("body").height();
      
      // When dancers collide with one another, trigger sound and bounce back
      if (dancerCollision){
          $('.collision-sound').attr('src', 'letmeinspreyou.mp3');
          randY = -3 * randY;
          randX = -3 * randX;
      }

      // When dancers collide with the wall, transition to new X and Y coordinates
      if (wallCollision){ 
        dancer.setPosition(
          Math.random() * $("body").height(), 
          Math.random() * $("body").width()
        );
      }
    }
  });

  // Reset the brey pic
  var styleSettings = {
    height: 100,
    width: 100
  };
  this.$node.css(styleSettings);

  // // On mouseover, grow the brey size
   var self = this;
   $('.brey').on('mouseover', function() {
     var styleSettings = {
       height: 200,
       width: 200
     };
     self.$node.css(styleSettings);
   });
};