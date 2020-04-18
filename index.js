 var IndexMPageJSAjaxCallError=function(){
          jQuery("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h1>"+ jQuery.mobile.pageLoadErrorMessage +"</h1></div>")
						.css({ "display": "block", "opacity": 0.96, "top": jQuery(window).scrollTop() + 100 })
						.appendTo( jQuery.mobile.pageContainer )
						.delay( 800 )
						.fadeOut( 400, function(){
							jQuery(this).remove();
						});
        };
 