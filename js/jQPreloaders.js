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
	var PRL_ANGULAR_03 = 'angular_03';
	
	var PRL_SQUARE_01 = 'square_01';
	var PRL_SQUARE_02 = 'square_02';
	var PRL_SQUARE_03 = 'square_03';
	var PRL_SQUARE_04 = 'square_04';
	var PRL_SQUARE_05 = 'square_05';
	
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
	
	var __angular_03 = function(obj, settings){
	    var _speed_anim = 1;
		var _delay = 0.2;
		var _num_el = 6;
		var _border_size = 5;
		
	    obj.addClass('jQP_container');
		
		for (var i=0; i<_num_el; i++){
		    obj.append("<div id='jQP_ang_" + i + "'></div>");
			obj.children('#jQP_ang_'+i).css('width', settings.dimension)
									   .css('height', settings.dimension)
									   .css('position', 'absolute')
									   .css('border', _border_size+'px solid rgba(0,183,229,0.9)')
									   .css('top', 0 +'px')
									   .css('left', (settings.dimension+5)*i +'px')
									   .css('opacity', '.3');
			if(i<_num_el/2){
			     // angle left
				 obj.children('#jQP_ang_'+i).css('border-top', _border_size+'px solid rgba(0,0,0,0)')
											.css('border-right', _border_size+'px solid rgba(0,0,0,0)')
											.css('-moz-animation', 'jQP_an_border_color_l '+_speed_anim+'s infinite linear')
											.css('-webkit-animation', 'jQP_an_border_color_l '+_speed_anim+'s infinite linear')
											.css('-moz-animation-delay', _delay+(_delay*(_num_el/2-i-1))+'s')
											.css('-webkit-animation-delay', _delay+(_delay*(_num_el/2-i-1))+'s')
											.addClass('jQP_angular_rot_n');
			}else{
			    // angle right
				obj.children('#jQP_ang_'+i).css('border-bottom', _border_size+'px solid rgba(0,0,0,0)')
										   .css('border-left', _border_size+'px solid rgba(0,0,0,0)')
										   .css('-moz-animation', 'jQP_an_border_color_r '+_speed_anim+'s infinite linear')
										   .css('-webkit-animation', 'jQP_an_border_color_r '+_speed_anim+'s infinite linear')
										   .css('-moz-animation-delay', _delay*(i+1-_num_el/2)+'s')
										   .css('-webkit-animation-delay',  _delay*(i+1-_num_el/2)+'s')
										   .addClass('jQP_angular_rot_p');
			}
		}
	} // __angular_03
	
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
	
	var __square_04 = function(obj, settings){
	    var _num_el = 4;
		var _time = 2;
		var _delay = .5;
		var _row = 0;
		var _col = 0;
		
		obj.append("<div id='jQP_sqr_container'></div>");
		obj.children('#jQP_sqr_container').css('position', 'relative');
		
		for (var i=0; i<_num_el; i++) {
		    obj.children('#jQP_sqr_container').append("<div id='jQP_sqr_" + i + "' class='jQP_square'></div>");
			obj.children('#jQP_sqr_container').children('#jQP_sqr_'+i).css('width', settings.dimension)
																	  .css('height', settings.dimension)
																	  .css('background-color', settings.colors[i])
																	  .css('position', 'absolute')
																	  .css('top', (settings.dimension+5)*_row +'px')
																	  .css('left', (settings.dimension+5)*_col +'px')
																	  .css('-moz-animation', 'jQP_sqr_04_'+i +' ' + _time + 's infinite linear')
																	  .css('-webkit-animation', 'jQP_sqr_03 ' + _time + 's infinite linear');
			if (i%2 > 0){
			    _row = _row+1;
				_col = 0;
			}else{
			    _col = _col +1;
			}
			
			if (i == 1 || i == 2){
			    obj.children('#jQP_sqr_container').children('#jQP_sqr_'+i).css('-moz-animation-delay', _delay+'s')
																	      .css('-webkit-animation-delay', _delay+'s');
			}
		}
	} // __square_04
	
	var __square_05 = function(obj, settings){
	    var _num_el = 9;
		var _time = 2;
		var _idcontainer;
		
		for (var i=0; i<_num_el; i++) {
		    _delay = _time/_num_el * i;
		    if ( i%Math.sqrt(_num_el) == 0){
			    _idcontainer = i;
				
				obj.append("<div id='jQP_sqr_container_" + _idcontainer +"'></div>");
				obj.children('#jQP_sqr_container_'+_idcontainer).css('padding-top', settings.dimension+5 +'px');
			}
			
		    obj.children('#jQP_sqr_container_'+_idcontainer).append("<div id='jQP_sqr_" + i + "' class='jQP_square'></div>");
			obj.children('#jQP_sqr_container_'+_idcontainer).children('#jQP_sqr_'+i).css('width', settings.dimension)
			 														                .css('height', settings.dimension)
																					.css('-moz-animation', 'jQP_sqr_05 ' + _time + 's infinite linear')
																					.css('-webkit-animation', 'jQP_sqr_05 ' + _time + 's infinite linear')
																					.css('-moz-animation-delay', Math.random()+'s')
																					.css('-webkit-animation-delay', Math.random()+'s');
		}
	} // __square_05
	
	/**
     * Plugin - jQuery extension
	 */
	$.fn.jQPreloaders = function(type, options) {
	    
	    var defaults = {
	    	            dimension: 50,
						colors: [ '#4B4BDB',
								  '#FFA600',
								  '#E00202',
								  '#02C202'
								]
	    			  };
	    
	    var settings = $.extend(defaults, options);
	    
		//console.log(settings.colors.length);
		
		switch (type) {
			case PRL_ANGULAR_01:
				__angular_01($(this), settings);
			    break;
			case PRL_ANGULAR_02:
				__angular_02($(this), settings);
			    break;
		    case PRL_ANGULAR_03:
				__angular_03($(this), settings);
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
			case PRL_SQUARE_04:
			    __square_04($(this), settings);
				break;
			case PRL_SQUARE_05:
			    __square_05($(this), settings);
				break;
		}// switch-case
		
		return this;
	}; // EndOf: "jQPreloaders()"
	
	$.fn.jQPreloaders_pause = function() {
	    $(this).find('*').toggleClass('stop');
	};
	
}( jQuery ));