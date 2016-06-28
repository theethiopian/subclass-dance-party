var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  // Makes BlinkyDancer an instance of the makeDancer superclass with same properties
  makeDancer.call(this, top, left, timeBetweenSteps);
  console.log(this)
};

// Import the methods of the makeDancer superclass
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

// Reset the constructor to of BlinkyDancer to BlinkyDancer
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// Call the makeDancer step method, which repeatedly calls the step method
makeBlinkyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  console.log(this)
  // Makes BlinkyDancer "blink" on and off
  this.$node.toggle();
var randColor = function(){
    return Math.floor(Math.random() * 256);
  };

  // New random CSS background color for zeeee blinkies so they look pretty
  var styleSettings = {
    border: "10px solid rgb(" + 
      randColor() + ',' + 
      randColor() + ',' + 
      randColor() + ')'};

  // Sets new CSS background color for this.$node
  this.$node.css(styleSettings);
};



//Functional Code:
// var makeBlinkyDancer = function(top, left, timeBetweenSteps){
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function(){
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

