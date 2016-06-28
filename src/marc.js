var marcDancer = function(top, left, timeBetweenSteps){
  albreyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('marc');
  this.$node.removeClass('brey');
  
};

marcDancer.prototype = Object.create(makeDancer.prototype);
marcDancer.prototype.constructor = marcDancer;
marcDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.slideToggle();
  var self = this;
   $('.marc').on('mouseover', function() {
     var styleSettings = {
       height: 200,
       width: 200
     };
     self.$node.css(styleSettings);
   });

};