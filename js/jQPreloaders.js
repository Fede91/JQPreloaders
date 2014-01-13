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
	
	var PRL_SQUARE_01 = 'square_01';
	var PRL_SQUARE_02 = 'square_02';
	var PRL_SQUARE_03 = 'square_03';
	
	var __angular_01 = function(obj, settings){
		obj.addClass('jQP_container')
		   .css('width', settings.dimension)
		   .css('height', settings.dimension)
		   .append("<div class='jQP_angular jQP_angular_l'></div>")
		   .append("<div class='jQP_angular jQP_angular_r'></div>")
		   .css('-moz-animation', 'jQP_an_rot_01_p 1s infinite linear')
		   .css('-webkit-animation', 'jQP_an_rot_01_p 1s infinite linear');
	} // __angular_01
	
	var __angular_02 = function(obj, settings){
	    var _id = obj.attr('id');
		
		obj.append("<div id='jQP_ext'></div>")
		   .append("<div id='jQP_int'></div>");
	    
	    obj.children('#jQP_ext').append("<div id='jQP_ext_container' class='jQP_container'></div>");
	    
	    obj.children('#jQP_ext').children('#jQP_ext_container').css('width', settings.dimension)
															   .css('height', settings.dimension)
															   .append("<div class='jQP_angular jQP_angular_l'></div>")
															   .append("<div class='jQP_angular jQP_angular_r'></div>")
															   .css('-moz-animation', 'jQP_an_rot_01_p 1s infinite linear')
															   .css('-webkit-animation', 'jQP_an_rot_01_p 1s infinite linear');
		
		obj.children('#jQP_int').append("<div id='jQP_int_container' class='jQP_container'></div>");
		
		obj.children('#jQP_int').children('#jQP_int_container').css('top', -1 * (settings.dimension - 0.25*settings.dimension))
															   .css('left', (settings.dimension - 0.75*settings.dimension))
															   .css('width', settings.dimension*0.5)
															   .css('height', settings.dimension*0.5)
															   .append("<div class='jQP_angular jQP_angular_l'></div>")
															   .append("<div class='jQP_angular jQP_angular_r'></div>")
															   .css('-moz-animation', 'jQP_an_rot_01_n 1s infinite linear')
															   .css('-webkit-animation', 'jQP_an_rot_01_n 1s infinite linear');
		
		obj.children('#jQP_int').children('#jQP_int_container').children('.jQP_angular').css('width', 20*0.5)
																						.css('height', 20*0.5);
		
		obj.children('#jQP_int').children('#jQP_int_container').children('.jQP_angular_l').css('top', settings.dimension*0.5 - 20*0.5);
	} // __angular_02
	
	var __square_01 = function(obj, settings) {
	    var _num_el = 6;
		var _time = 1;
		for (var i=0; i<_num_el; i++) {
		    _delay = _time/_num_el * i;
			obj.append("<div id='jQP_sqr_" + i + "' class='jQP_square'></div>");
			obj.children('#jQP_sqr_'+i).css('width', settings.dimension)
									   .css('height', settings.dimension)
									   .css('-moz-animation', 'jQP_sqr_01 ' + _time + 's infinite linear')
									   .css('-webkit-animation', 'jQP_sqr_01 ' + _time + 's infinite linear')
									   .css('-moz-animation-delay', _delay+'s')
									   .css('-webkit-animation-delay', _delay+'s');
		}
	} // __square_01
	
	var __square_02 = function(obj, settings) {
	    var _num_el = 6;
		var _time = 1;
		var _delay = .5;
		
		for (var i=0; i<_num_el; i++) {
		    obj.append("<div id='jQP_sqr_" + i + "' class='jQP_square'></div>");
			obj.children('#jQP_sqr_'+i).css('width', settings.dimension)
									   .css('height', settings.dimension)
									   .css('-moz-animation', 'jQP_sqr_02 ' + _time + 's infinite linear')
									   .css('-webkit-animation', 'jQP_sqr_02 ' + _time + 's infinite linear');
			if ( i%2 == 0)
				obj.children('#jQP_sqr_'+i).css('-moz-animation-delay', _delay+'s')
										   .css('-webkit-animation-delay', _delay+'s');
		}
		
	} // __square_02
	
	var __square_03 = function(obj, settings){
	    var _num_el = 4;
		var _time = 2;
		var _delay = .5;
		var _idcontainer;
		
		for (var i=0; i<_num_el; i++) {
		    _delay = _time/_num_el * i;
		    if ( i%2 == 0){
			    _idcontainer = i;
				
				obj.append("<div id='jQP_sqr_container_" + _idcontainer +"'></div>");
				obj.children('#jQP_sqr_container_'+_idcontainer).css('padding-top', settings.dimension+5 +'px');
			}
			
		    obj.children('#jQP_sqr_container_'+_idcontainer).append("<div id='jQP_sqr_" + i + "' class='jQP_square'></div>");
			obj.children('#jQP_sqr_container_'+_idcontainer).children('#jQP_sqr_'+i).css('width', settings.dimension)
			 														                .css('height', settings.dimension)
																					.css('-moz-animation', 'jQP_sqr_03 ' + _time + 's infinite linear')
																					.css('-webkit-animation', 'jQP_sqr_03 ' + _time + 's infinite linear')
																					.css('-moz-animation-delay', _delay+'s')
																					.css('-webkit-animation-delay', _delay+'s');
		}
		
	} // __square_03
	
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
		    case PRL_SQUARE_01:
			    __square_01($(this), settings);
				break;
			case PRL_SQUARE_02:
			    __square_02($(this), settings);
				break;
			case PRL_SQUARE_03:
			    __square_03($(this), settings);
				break;
		}// switch-case
		
		return this;
	}; // EndOf: "jQPreloaders()"
	
}( jQuery ));