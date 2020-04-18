jQuery('#MCheckBoxExample').bind('pageinit',function(event){
 	jQuery('#mcbTwo').bind('click',mcbTwoJSClick);
	jQuery('#mcbOne').bind('click',mcbTwoJSClick);

});
function mcbTwoJSClick(event)
{

  var event = event || window.event;
  var params=null;
        //begin js
          alert('"'+$(this).val()+'" checked: '+jQuery(this).attr('checked'));
        //end
        
}

