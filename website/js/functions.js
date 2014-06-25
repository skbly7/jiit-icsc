jQuery(document).ready(function(){
	
	/*initialize tabs*/
	jQuery(function() { 
		jQuery('.okrdx-tabs').tabs({ fxFade: true, fxSpeed: 'fast' }); 
	});

	/*toogle*/
	/*Case when by default the toggle is closed */
	jQuery(".open_title").toggle(function(){ 
			jQuery(this).next('div').slideDown();
			jQuery(this).find('a').removeClass('show');
			jQuery(this).find('a').addClass('hide');
			jQuery(this).find('.title_closed').hide();
			jQuery(this).find('.title_open').show();
		}, function () {
		
			jQuery(this).next('div').slideUp();
			jQuery(this).find('a').removeClass('hide');
			jQuery(this).find('a').addClass('show');		 
			jQuery(this).find('.title_open').hide();
			jQuery(this).find('.title_closed').show();
			
	});

	/*Case when by default the toggle is oppened */		
	jQuery(".close_title").toggle(function(){ 
			jQuery(this).next('div').slideUp();
			jQuery(this).find('a').removeClass('hide');
			jQuery(this).find('a').addClass('show');		 
			jQuery(this).find('.title_open').hide();
			jQuery(this).find('.title_closed').show();
		}, function () {
			jQuery(this).next('div').slideDown();
			jQuery(this).find('a').removeClass('show');
			jQuery(this).find('a').addClass('hide');
			jQuery(this).find('.title_closed').hide();
			jQuery(this).find('.title_open').show();
			
	});	
	
	/*Accordion*/
	jQuery('.okrdx-acc-container').hide();
	jQuery('.okrdx-acc-trigger:first').addClass('active').next().show();
	jQuery('.okrdx-acc-trigger').click(function(){
		if( jQuery(this).next().is(':hidden') ) {
			jQuery('.okrdx-acc-trigger').removeClass('active').next().slideUp();
			jQuery(this).toggleClass('active').next().slideDown();
		}
		return false;
	});
	
	
	//Fixed social media sharing
	jQuery(function () {
		var msie6 = jQuery.browser == 'msie' && jQuery.browser.version < 7;
		if (!msie6 && jQuery('.share_buttons_single_page').length != 0) {
			var top = jQuery('#share_buttons_single_page').offset().top - parseFloat(jQuery('#share_buttons_single_page').css('margin-top').replace(/auto/, 0));
			jQuery(window).scroll(function (event) {
				// what the y position of the scroll is
				var y = jQuery(this).scrollTop();
				// whether that's below the form
				if (y >= top-90) {
					// if so, ad the fixed class
					jQuery('#share_buttons_single_page').addClass('fixed');
				} else {
					// otherwise remove it
					jQuery('#share_buttons_single_page').removeClass('fixed');
				}
			});
		}
	});

	//Comment form
	jQuery("#toggle_link").toggle(
		function() {
			jQuery("#commentform").show("fast");
			jQuery("#toggle_link");
		},
		function() {
			jQuery("#commentform").hide("fast");
			jQuery("#toggle_link");
		}
	);	
	
	jQuery('.comment-reply-link').click(function() {
		jQuery("#commentform").show("fast");
	});
	
	/*scrol the window to make the entire reply visible*/
	var offset = jQuery('#toggle_link').offset();

	jQuery('#toggle_link').click(function() {
		jQuery('body,html').animate({scrollTop:offset.top},300);
	});
	
	function getInternetExplorerVersion()
	// Returns the version of Internet Explorer or a -1
	// (indicating the use of another browser).
	{
	  var rv = -1; // Return value assumes failure.
	  if (navigator.appName == 'Microsoft Internet Explorer')
	  {
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
		  rv = parseFloat( RegExp.$1 );
	  }
	  return rv;
	}
	
	var ver = getInternetExplorerVersion();
	
	if(ver == -1 || ver > 8.0){
		//Fade menu
		jQuery(function() {
			jQuery(".okrdx-social a").css("opacity","0.5");
			jQuery(".okrdx-social a").hover(function () {
				jQuery(this).stop().animate({
				opacity: 1.0
				}, 300 );
			},
			function () {
				jQuery(this).stop().animate({
					opacity: 0.5
				}, 300 );
			});
		});

		jQuery(function() {
			jQuery(".hover, ul.okrdx-menu li a").css("opacity","1");
			jQuery(".hover, ul.okrdx-menu li a").hover(function () {
				jQuery(this).stop().animate({
				opacity: 0.7
				}, 300);
			},
			function () {
				jQuery(this).stop().animate({
					opacity: 1
				}, 300);
			});
		});
	}	

	//Login lightbox
	function launch() {
			 jQuery('#sign_up').lightbox_me({centered: true, onLoad: function() { jQuery('#sign_up').find('input:first').focus()}});
		}
		jQuery('#login').click(function(e) {
			jQuery("#sign_up").lightbox_me({centered: true, onLoad: function() {
				jQuery("#sign_up").find("input:first").focus();
			}});

			e.preventDefault();
		});

	//Mosaic fade
	jQuery('.readmore, .circle, .gallery-icon').mosaic({
		opacity:	0.7
	});
	jQuery('.fade').mosaic({
		animation:	'slide'		//fade or slide
	});

	//Back to top
	jQuery('.backtotop').click(function(){
		jQuery('html, body').animate({scrollTop:0}, 'slow');
	});

	//Superfish menu
	jQuery("ul.sf-menu").supersubs({
			minWidth:    12,
			maxWidth:    32,
			extraWidth:  1
		}).superfish({
			delay: 200,
			speed: 250
		});

	//okrdx-sharing
	jQuery(function(){
		jQuery('.okrdx-sharing').mobilyblocks({
			trigger: 'click',
			direction: 'clockwise',
			duration:500,
			zIndex:50,
			widthMultiplier:1.7
		});
		
	});

	//Tooltips
	jQuery(function() {
        jQuery('.tooltip').tipsy({gravity: jQuery.fn.tipsy.autoNS});
      });
	
	//twitter widget
	if (jQuery().slides) { 
		jQuery(".dynamic .okrdx_twitter").slides({
			play: 5000,
			effect: 'fade',
			generatePagination: false,
			autoHeight: true
		});	
		
	}

	
	/*adjust width for post image that contains caption*/
	jQuery('[id^="attachment_"]').each(function(index) {
	    var div_width = jQuery(this).css('width').split('px');
	    var new_div_width = eval(parseInt(div_width[0]) + parseInt(10)); 
	    jQuery(this).css('width',new_div_width + 'px');
	});
});