jQuery('#MCollapsibleExample').bind('pageinit',function(event){
 	jQuery('#mcSubPanel').bind('expand',mcPanelJSExpand);
	jQuery('#mcSubPanel').bind('collapse',mcPanelJSCollapse);

});
function mcPanelJSCollapse(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
           alert($(this).attr('id')+" has just collapsed");
        //end
        
}

function mcPanelJSExpand(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
             alert($(this).attr('id')+" has just expanded");
        //end
        
}

