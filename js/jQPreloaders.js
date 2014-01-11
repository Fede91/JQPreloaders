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
		   .css('-moz-animation', 'jQP_an_rot_01 .8s infinite linear');
	} // __angular_01
	
	var __angular_02 = function(obj, settings){
		/* TODO */
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
		}
		
		return this;
		 
	}; // EndOf: "jQPreloaders()"
	
}( jQuery ));