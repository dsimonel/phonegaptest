jQuery('#MCollapsibleSetExample').bind('pageinit',function(event){
 	jQuery('.mcsMain_class').bind('expand',mcsMainJSExpand);
	jQuery('.mcsMain_class').bind('collapse',mcsMainJSCollapse);

});
function mcsMainJSCollapse(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
          alert($(this).attr('id')+" Collapsed");
        //end
        
}

function mcsMainJSExpand(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
          alert($(this).attr('id')+" Expanded");
        //end
        
}

