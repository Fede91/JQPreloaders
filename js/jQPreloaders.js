/*
* jQPreloaders.js
* Author: Fede91
* Github: https://github.com/Fede91
*
* Made available under a MIT License:
* http://www.opensource.org/licenses/mit-license.php
*
* jQPreloaders.js Copyright Fede91 2014.
*/
(function ( $ ) {
	
	var PRL_ANGULAR_01 = 'angular_01';
	var PRL_ANGULAR_02 = 'angular_02';
	
	var __angular_01 = function(obj, settings){
		obj.addClass('jQP_container')
		   .css('width', settings.dimension)
		   .css('height', settings.dimension)
		   .append("<div class='jQP_angular jQP_angular_l'></div>")
		   .append("<div class='jQP_angular jQP_angular_r'></div>")
		   .css('-moz-animation', 'jQP_an_rot_01_p 1s infinite linear');
	} // __angular_01
	
	var __angular_02 = function(obj, settings){
		obj.append("<div id='jQP_ext'></div>")
		   .append("<div id='jQP_int'></div>");
	    
	    $('#jQP_ext').append("<div id='jQP_ext_container' class='jQP_container'></div>");
	    
	    $('#jQP_ext_container').css('width', settings.dimension)
							   .css('height', settings.dimension)
							   .append("<div class='jQP_angular jQP_angular_l'></div>")
							   .append("<div class='jQP_angular jQP_angular_r'></div>")
							   .css('-moz-animation', 'jQP_an_rot_01_p 1s infinite linear');
		
		$('#jQP_int').append("<div id='jQP_int_container' class='jQP_container'></div>");
		
		$('#jQP_int_container').css('top', -1 * (settings.dimension - 0.25*settings.dimension))
							   .css('left', (settings.dimension - 0.75*settings.dimension))
							   .css('width', settings.dimension*0.5)
							   .css('height', settings.dimension*0.5)
							   .append("<div class='jQP_angular jQP_angular_l'></div>")
							   .append("<div class='jQP_angular jQP_angular_r'></div>")
							   .css('-moz-animation', 'jQP_an_rot_01_n 1s infinite linear');
		
		$('#jQP_int_container .jQP_angular').css('width', 20*0.5)
											.css('height', 20*0.5);
		
		$('#jQP_int_container .jQP_angular_l').css('top', settings.dimension*0.5 - 20*0.5);
		
			    
	} // __angular_02
	
	/**
     * Plugin - jQuery extension
	 */
	$.fn.jQPreloaders = function(type, options) {
	    
	    var defaults = {
	    	            dimension: 50
	    			  };
	    
	    var settings = $.extend(defaults, options);
	    
		switch (type) {
			case PRL_ANGULAR_01:
				__angular_01($(this), settings);
			    break;
			case PRL_ANGULAR_02:
				__angular_02($(this), settings);
			    break;
		}
		
		return this;
		 
	}; // EndOf: "jQPreloaders()"
	
}( jQuery ));