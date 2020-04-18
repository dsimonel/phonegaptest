jQuery('#MAccelerometerExample').bind('pageinit',function(event){
 	jQuery('#mtMotionSwitch').bind('change',mtMotionSwitchJSChange);

});
function mtMotionSwitchJSChange(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
          if($('#mtMotionSwitch').val()=='1')
          {
            maAccelerometerActivate();
          }
          else
          {
            maAccelerometerDeactivate();
          }

        //end
        
}

var maAccelerometer=null;
function maAccelerometerJSChange(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
        //The event variable holds tha acceleration values in x,y,z
        // Lets get the new values
        var left=parseInt($('#Image_outer').css('left'))-event.x*5;
        var top=parseInt($('#Image_outer').css('top'))+event.y*5;

        // Get the width and height of the Image
        var width= parseInt($('#Image_outer').css('width'));
        var height= parseInt($('#Image_outer').css('height'));

        //Get the width and Height of the container Box
        var boxLeft=parseInt($('#mpBox_outer').css('width'));
        var boxTop=parseInt($('#mpBox_outer').css('height'));

        //re-establish left and top values so the Image does no go out of boundaries
        if(left>boxLeft-width) left=boxLeft-width;
        if(top>boxTop-height) top=boxTop-height;
        if(left<0) left=0;
        if(top<0) top=0;

        //Stablish the new values for top and left to the image
        $('#Image_outer').css('left',left);
        $('#Image_outer').css('top',top);

        //Update the labels that inform of the acceleration in both axes
         $('#lblXAcceleration').html('X: ' + Math.round(event.x*10) );
         $('#lblYAcceleration').html('Y: ' + Math.round(event.y*10) );
        //end
        
}

var maAccelerometerActivate=function(options) {
   var options = options || {frequency:10};
   maAccelerometer=navigator.accelerometer.watchAcceleration(maAccelerometerJSChange,function(){},options);
}
var maAccelerometerDeactivate=function() {
   navigator.accelerometer.clearWatch(maAccelerometer);
   maAccelerometer=null;
}
