var MCameraExampleDeviceReady=function(){
 mcCamera=true;
 mcLibrary=true;
};
jQuery('#MCameraExample').bind('pageinit',function(event){
 	jQuery('#mbtCamera').bind('click',mbtCameraJSClick);
	jQuery('#mbtLibrary').bind('click',mbtLibraryJSClick);
if(typeof PhoneGap !== 'undefined' && PhoneGap.available)
 MCameraExampleDeviceReady();
else
 document.addEventListener("deviceready", MCameraExampleDeviceReady, false);

});
function mbtCameraJSClick(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
          mcCameraGetPicture();
        //end
        
}

function mbtLibraryJSClick(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
         mcLibraryGetPicture();
        //end
        
}

var mcCamera=null;
function mcLibraryJSSuccess(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
         $('#imgDisplay').attr('src',event);
        //end
        
}

function mcLibraryJSError(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
          alert(event);
        //end
        
}

mcCameraGetPicture=function(extraOptions) {
 if(mcCamera){
  var options = {quality:100,allowEdit:false,destinationType:navigator.camera.DestinationType.FILE_URI,sourceType:navigator.camera.PictureSourceType.CAMERA};
  var extraOptions=extraOptions || {};
  jQuery.extend(options,extraOptions);  navigator.camera.getPicture(mcLibraryJSSuccess, mcLibraryJSError,options);
 }
}
var mcLibrary=null;
mcLibraryGetPicture=function(extraOptions) {
 if(mcLibrary){
  var options = {quality:100,allowEdit:false,destinationType:navigator.camera.DestinationType.FILE_URI,sourceType:navigator.camera.PictureSourceType.PHOTOLIBRARY};
  var extraOptions=extraOptions || {};
  jQuery.extend(options,extraOptions);  navigator.camera.getPicture(mcLibraryJSSuccess, mcLibraryJSError,options);
 }
}
