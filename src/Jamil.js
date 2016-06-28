var jamilDancer = function(top, left, timeBetweenSteps){
  albreyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('jamil');
  this.$node.removeClass('brey');
  
};

jamilDancer.prototype = Object.create(makeDancer.prototype);
jamilDancer.prototype.constructor = jamilDancer;
jamilDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  this.$node.slideToggle();
  var self = this;
   $('.jamil').on('mouseover', function() {
     var styleSettings = {
       height: 200,
       width: 200
     };
     self.$node.css(styleSettings);
   });

};