var kevinDancer = function(top, left, timeBetweenSteps){
  albreyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('kevin');
  this.$node.removeClass('brey');
  
};

kevinDancer.prototype = Object.create(makeDancer.prototype);
kevinDancer.prototype.constructor = kevinDancer;
kevinDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
  var self = this;
   $('.kevin').on('mouseover', function() {
     var styleSettings = {
       height: 100,
       width: 200
     };
     self.$node.css(styleSettings);
   });

};