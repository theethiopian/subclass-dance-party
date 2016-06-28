var kDancer = function(top, left, timeBetweenSteps){
  albreyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('khaled');
  this.$node.removeClass('brey');
  
};

kDancer.prototype = Object.create(makeDancer.prototype);
kDancer.prototype.constructor = kDancer;
kDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.slideToggle();
  var self = this;
   $('.khaled').on('mouseover', function() {
     var styleSettings = {
       height: 200,
       width: 200
     };
     self.$node.css(styleSettings);
   });

};