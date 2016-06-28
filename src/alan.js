var alanDancer = function(top, left, timeBetweenSteps){
  // Makes HungryDancer an instance of the Dancer superclass with same properties
  makeDancer.call(this, top, left, timeBetweenSteps);

  // Adds "alan" class to alanDancer, which allows additional styling
  this.$node.addClass('alan');
};

// Import the methods of the Dancer superclass
alanDancer.prototype = Object.create(makeDancer.prototype);

// Reset the constructor to of HungryDancer to HungryDancer
alanDancer.prototype.constructor = alanDancer;

// Call the Dancer step method, which repeatedly calls the step method
alanDancer.prototype.step = function(){
makeDancer.prototype.step.call(this);

  // Makes the HungryDancer "mouth" open and close
  this.$node.slideToggle();

  // On mouseover, change the HungryDancer background color
  var styleSettings = {
    height: 100,
    width: 100
  };
  this.$node.css(styleSettings);

  // // On mouseover, grow the brey size
   var self = this;
   $('.alan').on('mouseover', function() {
     var styleSettings = {
       height: 200,
       width: 200
     };
     self.$node.addClass('khaled');
  self.$node.removeClass('alan');
     self.$node.css(styleSettings);
   });
};