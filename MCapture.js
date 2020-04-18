var MCaptureExampleDeviceReady=function(){
 mcAudio=true;
 mcVideo=true;
 mcImages=true;
};
jQuery('#MCaptureExample').bind('pageinit',function(event){
 	jQuery('#mbCapture').bind('click',mbCaptureJSClick);
if(typeof PhoneGap !== 'undefined' && PhoneGap.available)
 MCaptureExampleDeviceReady();
else
 document.addEventListener("deviceready", MCaptureExampleDeviceReady, false);

});
function mbCaptureJSClick(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
          var option=$("input[name='mrgOption']:checked").val();
          if(option==0)
            mcAudioCapture();
          else if(option==1)
            mcVideoCapture();
          else
            mcImagesCapture();
        //end
        
}

var mcAudio=null;
function mcAudioJSSuccess(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
        var text="Files Captured: "+event.length+"<br>";
        for(var x=0;x<event.length;x++)
        {
          text+="File: "+event[x].name+"<br>";
          text+="type: "+event[x].type+"<br>";
          text+="Size: "+event[x].size+"<hr>";
        }

        $('#mpResults').html(text);
        //end
        
}

function mcImagesJSError(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
        // event has the error message
         $('#mpResults').html(event);
        //end
        
}

var mcAudioCapture=function(ExtraOptions) {
  if(mcAudio){
    Options={limit:3,duration:10};
    var ExtraOptions = ExtraOptions || {}
    jQuery.extend(Options,ExtraOptions);
    navigator.device.capture.captureAudio(mcAudioJSSuccess,mcImagesJSError,Options);
  }
}
var mcVideo=null;
var mcVideoCapture=function(ExtraOptions) {
  if(mcVideo){
    Options={limit:2,duration:10};
    var ExtraOptions = ExtraOptions || {}
    jQuery.extend(Options,ExtraOptions);
    navigator.device.capture.captureVideo(mcAudioJSSuccess,mcImagesJSError,Options);
  }
}
var mcImages=null;
var mcImagesCapture=function(ExtraOptions) {
  if(mcImages){
    Options={limit:2,duration:1};
    var ExtraOptions = ExtraOptions || {}
    jQuery.extend(Options,ExtraOptions);
    navigator.device.capture.captureImage(mcAudioJSSuccess,mcImagesJSError,Options);
  }
}
