jQuery('#MButtonExample').bind('pageinit',function(event){
 	jQuery('#mbtJavaScript').bind('click',mbtJavaScriptJSClick);
	jQuery('#mbtClick').bind('click',function(event){jsWrapper(event,'mbtClickSubmitEvent','mbtClick_mbtClickClick')});

});
function mbtJavaScriptJSClick(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
        alert ('"Click to fire the javascript OnClick event" fired Javascript OnClick event');
        //end
        
}

