var moDancer = function(top, left, timeBetweenSteps){
  albreyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('mo');
  this.$node.removeClass('brey');
  
};

moDancer.prototype = Object.create(makeDancer.prototype);
moDancer.prototype.constructor = moDancer;
moDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.slideToggle();
  var self = this;
   $('.mo').on('mouseover', function() {
     var styleSettings = {
       height: 200,
       width: 200
     };
     self.$node.addClass('alan');
  self.$node.removeClass('mo');
     self.$node.css(styleSettings);
   });

};