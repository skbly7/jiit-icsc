var win_w,
	win_h,
	w_ratio,
	is_horizontal,
	is_small,
	no_touch,
	is_loading= true,
	current_image,
	t_nav = 110, // top nav height
	container = {w: 0, h: 0},
	idx = 0, //index number for masonry
	cel_total = 0, //this is actually the total number of images for masonry gets broken up into pages
	cel_max = 40, //defult number of cells for masonry
	grid_ratio = 1550 / 804, //defult ratio for home grid used to keep things consistant 1.9278607
	pdf_array,
	live_area = {
		w: 0,
		h: 0,
		ratio: function(){
			return this.w / this.h;
		}
	};

jQuery(document).ready(function($) {
	var is_home = $('#container.home').length > 0 ? true : false,
		is_home_grid = $('#container.home_grid').length > 0 ? true : false,
		is_project = $('#container.project').length > 0 ? true : false,
		is_vimeo = $('#container.vimeo').length > 0 ? true : false,
		is_news = $('#container.news').length > 0 ? true : false,
		container_offset = $('#container').offset();
		is_grid = $('#container.grid').length > 0  ? true : false;
		no_touch = $('.no-touch').length > 0 ? true : false;

	//$.cookie.json = true;

	/* ---------------------------------------------------------------------------------------
	LOADING
	--------------------------------------------------------------------------------------- */
	function set_loading_position(){
		$('.loading').show(1, function() {
			$(this).css({ 'top' : (win_h - 50)/2, 'left' : (win_w - 30)/2 });
		}).hide();
	}
	set_loading_position();

	$.loading = function(loading){
		is_loading = loading;
		setTimeout( function() {
			if(is_loading){
					$('.loading').show().addClass('loading_anim');
			}else{
				$('.loading').hide();
			}
		}, 500);
	}

	/* ---------------------------------------------------------------------------------------
	SET UP FUNCTIONS
	--------------------------------------------------------------------------------------- */
	function set_up_screen(){
		win_w = $(window).innerWidth();
		win_h = $(window).innerHeight();
		w_ratio = win_w/win_h;
		is_horizontal = w_ratio >= 1 ? true : false;
		is_small = win_w < 1024 ? true : false;

		set_live_area();
		small_screen_adjust();
		set_container();

		img_h = Math.floor(container.h * .95);

		$('.upm-images').css({'height' : img_h, 'top': Math.floor( (container.h - img_h)/2 ) });
		//keep container element centered
		$('#container').css({'top' : ( (win_h-container.h)/2 ), 'height' : container.h });
		container_offset = $('#container').offset();
		$('#main_nav').css({'top' : container_offset.top - $('#main_nav').height() });
	}

	function set_live_area(){
		live_area.h = win_h - $('#main_nav').height();
		live_area.h = live_area.h - 15;
		live_area.w = win_w;
		//if(is_project){	live_area.h = live_area.h - $('#slideshow-info .controls').height(); }
	}

	function set_container(){
		if( grid_ratio < live_area.ratio() ){
			container.h = Math.floor( (win_h * grid_ratio) / grid_ratio  );
		}else{
			container.h = Math.floor( win_w /grid_ratio);
		}

		if(is_home && !is_home_grid){
			// limit so images don't get too big
			if(container.h > 1300){ container.h = 1300; }
			if(is_horizontal){
				if(container.h > (live_area.h * 0.90) ){
					container.h = Math.floor(live_area.h * 0.90);
				}
			}
		}else{
			if(container.h > 910){	container.h = 910; }
			if(is_horizontal){
				if(container.h > (live_area.h * 0.90) ){
					container.h = Math.floor(live_area.h * 0.90);
				}
			}
		}
		container.w = Math.ceil(container.h*grid_ratio);
	}

	function small_screen_adjust(){
		//controls to tweak elements on a small screen aka tablet
		if(is_small){
			if( $('.control_rule').length > 0 ){
				$('.control_rule').attr('width', 34);
			}
			if( $('.controls').length > 0 ){
				$('.controls .prev img').hide();
				$('.controls .next img').hide();
			}
		}else{ // rest if screen goes small to big
			if( $('.control_rule').length > 0 ){
				$('.control_rule').attr('width', 54);
			}
			if( $('.controls').length > 0 ){
				$('.controls .prev img').show();
				$('.controls .next img').show();
			}
		}
	}

	function set_image_controls_position(){
		var i_pos = ( container.h - 46 ) / 2; //46 is the height of icon_pos object but its hidden at first so hard coded it here.
		$('.icon_pos').css({'top' : i_pos - 34});
		$('#slideshow-container .controls').css({ top: (container.h+(container.h * .03)) });
		//$('.upm-image-container').css({ 'top' : ((image_container_h - new_image_height)/2) });

		var p_pos = ( container.h - 22 ) / 2, //22 is the height of switch_project object but its hidden at first so hard coded it here.
			s_top = $('#slideshow-info').css('top');
		p_pos = p_pos + Number(s_top.substring(0, 2));
		if(is_small){
			p_pos = p_pos - 13;
		}
		$('.switch_project').css({'top' : p_pos });
	}

	/* ---------------------------------------------------------------------------------------
	PDF CREATOR
	--------------------------------------------------------------------------------------- */
	function add_to_pdf(image_id){
		pdf_array = new Array ();

		if( $.cookie('fl_pdf_creator') ){
			var str = $.cookie('fl_pdf_creator');
			pdf_array = str.split(",");
		}
		
		pdf_array.push( Number(image_id) );
		$.cookie('fl_pdf_creator', pdf_array, { expires: 1, path: '/' });
		$('#add_pdf').fadeOut(200);
		$('#image_added').delay(250).fadeIn(200);
	}

	function remove_from_pdf(image_id){
		pdf_array = new Array ();

		if( $.cookie('fl_pdf_creator') ){
			var str = $.cookie('fl_pdf_creator');
			pdf_array = str.split(",");
			var index = pdf_array.indexOf( image_id );
			pdf_array.splice(index, 1);
			$.cookie('fl_pdf_creator', pdf_array, { expires: 1, path: '/' });

			if(pdf_array.length <= 0){
				$.removeCookie('fl_pdf_creator', { path: '/' });
				location.reload();
			}
		}
	}

	$('a.delete_img').click(function(){
		var img_delete = $(this).attr('index');
		//console.log("image delete: " + img_delete);
		remove_from_pdf(img_delete);
		$(this).closest('li').fadeOut('fast', function() {
			$(this).remove();
		});
		return false;
	});

	$('#remove_pdf').click(function() {
		var test_remove = $.removeCookie('fl_pdf_creator', { path: '/' });
	});


	/* ---------------------------------------------------------------------------------------
	CONDITIONS
	--------------------------------------------------------------------------------------- */
	if(is_home || is_project || is_grid){
		set_up_screen();
	}else{
		$('#main_nav').addClass('main_nav_top').removeClass('main_nav').css({'height' : 80});
	}

	if(is_project && !is_vimeo){
		var $slideshow_project = $('.upm-images');
		$slideshow_project.project_slideshow({ container_h: container.h });

		//helps position the next and prev image buttons and project bottons
		//on the sides of the screen
		set_image_controls_position();

		var total_images = $('#slideshow_images li').length,
			base_url = get_base_url(),
			pathname = window.location.pathname;

		function setup_slideshow_counter(){
			$('#slideshow-info .controls .total').html( total_images );
			$('#slideshow-info .controls .current_index').html( current_image );
		}

		function next_prev_image(){
			if(current_image <= 0){
				current_image = total_images;
			}else if(current_image > total_images){
				current_image = 1;
			}
			window.location = base_url + pathname + '#portfolio=' + Number(current_image);

			if($('#image_added').is(':visible')) {
				$('#image_added').fadeOut(200);
				$('#add_pdf').delay(250).fadeIn(200);
			}
		}

		$('.next').click(function() {
			current_image ++;
			next_prev_image();
			return false;
		});
		$('.prev').click(function() {
			current_image --;
			next_prev_image();
			return false;
		});

		// PDF CREATOR ==============================================================
		$('#add_pdf').click(function() {
			var img_add = $('#slideshow_images .current img').attr('id');
			add_to_pdf(img_add);
			return false;
		});

		if( no_touch ){
			$('.image-controls-prev').hover(
				function () {
					$(this).find('.icon').stop(true, true).animate({color: '#3c98cc'}, 500);
					$(this).find('.arrow').stop(true, true).fadeTo(500, 1);
					$(this).find('.up').stop(true, true).fadeTo(500, 0);
					$(this).find('.over').stop(true, true).fadeTo(500, 1);
				},
				function () {
					$(this).find('.arrow').stop(true, true).fadeTo(500, 0.2);
					$(this).find('.up').stop(true, true).fadeTo(500, 1);
					$(this).find('.over').stop(true, true).fadeTo(500, 0);
					$(this).find('.icon').stop(true, true).animate({color: '#d6d6d6'}, 500);
				}
			);
			$('.image-controls-next').hover(
				function () {
					$(this).find('.icon').stop(true, true).animate({color: '#3c98cc'}, 500);
					$(this).find('.arrow').stop(true, true).fadeTo(500, 1);
					$(this).find('.up').stop(true, true).fadeTo(500, 0);
					$(this).find('.over').stop(true, true).fadeTo(500, 1);
		    	},
				function () {
					$(this).find('.arrow').stop(true, true).fadeTo(500, 0.2);
					$(this).find('.up').stop(true, true).fadeTo(500, 1);
					$(this).find('.over').stop(true, true).fadeTo(500, 0);
					$(this).find('.icon').stop(true, true).animate({color: '#d6d6d6'}, 500);
				}
			);
			$('.prev-project').hover(
				function () {
					$(this).stop(true, true).animate({color: '#3c98cc'}, 500);
				},
				function () {
					$(this).stop(true, true).animate({color: '#d6d6d6'}, 500);
				}
			);
			$('.next-project').hover(
				function () {
					$(this).stop(true, true).animate({color: '#3c98cc'}, 500);
				},
				function () {
					$(this).stop(true, true).animate({color: '#d6d6d6'}, 500);
				}
			);
		}
	}

	if(is_project && is_vimeo){
		console.log('video');

		var $vimeo_project = $('.uvm-video');
		$vimeo_project.vimeo_video({ container_h: container.h });

		//helps position the next and prev image buttons and project bottons
		//on the sides of the screen
		set_image_controls_position();
	}

	if(is_grid){
		$.loading(true);
		var $grid = $('.masonry-container');
		$grid.grid_menu({parent_box: {w: win_w, h: container.h} });
	}

	if(is_home_grid){
		$.loading(true);
		var $grid = $('.masonry-container');
		$grid.grid_menu({parent_box: {w: win_w, h: container.h}, pages:false });
	}

	if(is_home && !is_home_grid){
		if( $('.home_single').length>0 ){
			set_image_ratio( $('.home_single img'), $('#container') );
		}
		
		if( $('.upm-images').length>0 ){
			var $home_slideshow = $('.upm-images');
			$home_slideshow.project_slideshow({ container_h: container.h, auto_run:true, delay: 50 });
		}

		$('#menu-primary_nav').prepend('<li class="dropdown-title menu-item"><a href="">MENU</a></li>');
		var dropdown = $('.menu-primary_nav-container');
		dropdown.menu_dropdown();
	}
	if(is_home && is_vimeo){
		var $vimeo_project = $('.uvm-video');
		$vimeo_project.vimeo_video({ container_h: container.h });
	}
	if(is_news){
		$('.news_slideshow').each(function(i){
			var $new_news_slideshow = $(this);
			$new_news_slideshow.news_slideshow();
		});
	}
	/* ---------------------------------------------------------------------------------------
	WINDOW URL
	--------------------------------------------------------------------------------------- */
	// $(window).hashchange( function () {

		// if(is_project && !is_vimeo){
			// current_image = getUrlVars()["portfolio"];
			// if(typeof(current_image) == 'undefined' || current_image==0){
				// current_image = 1;
			// }
			// $slideshow_project.trigger('goto', current_image - 1);
			// setup_slideshow_counter();
		// }
		// return false;

	// });
	// $(window).hashchange();

	var rtime = new Date(1, 1, 2000, 12,00,00),
		timeout = false;
		delta = 50;
		
	$(window).resize(function() {
	    rtime = new Date();
	    if (timeout === false) {
	        timeout = true;
	        setTimeout(resize_end, delta);
	    }
	});

	function resize_end() {
	    if (new Date() - rtime < delta) {
	        setTimeout(resize_end, delta);
	    } else {
	        timeout = false;
	        resize_window();
	    }               
	}

	function resize_window(){
		if(is_home || is_project || is_grid){
			set_up_screen();
		}
		if(is_project && !is_vimeo){
			$('#slideshow_images li img').each(function(){
				$(this).next('.project_meta').css({width: $(this).width()});
				var p_height = $(this).parent('li').height(),
					i_height = $(this).height();

				$(this).css({'margin-top': (p_height - i_height)/2 });
			});
			set_image_controls_position();
		}
		if(is_grid || is_home_grid){
			$.grid_menu.resize(win_w, container.h);
		}
		if(is_project && is_vimeo){
			$.fn.vimeo_video.set_video_position(container.h);
			set_image_controls_position();
		}
		if(is_home && is_vimeo){
			$.fn.vimeo_video.set_video_position(container.h);
		}
	}
	/* ---------------------------------------------------------------------------------------
	GENERAL HELPER FUNCTIONS
	--------------------------------------------------------------------------------------- */
	function set_image_ratio(img, box_object){
		//if image is wider format than its container
		if(parseInt( $(img).attr('org_w') ) / parseInt( $(img).attr('org_h') ) > box_object.width() / box_object.height()){
			$(img).removeClass('horz');
			$(img).addClass('vert');
		}else{
			$(img).removeClass('vert');
			$(img).addClass('horz');
		}
	}
	function center_horz(object, box_object){
		object.css({ 'left': ( box_object.width() - object.width())/2 });
	}
	function center_vert(object, box_object){
		object.css({ 'top': ( box_object.height() - object.height())/2 });
	}
	function getUrlVars(){
		var vars = new Array(),
			hash,
			hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');
		for(var i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	}
	function get_base_url(){
		pathArray = window.location.href.split( '/' );
		protocol = pathArray[0];
		host = pathArray[2];
		url = protocol + '//' + host;

		return url;
	}
	/* ---------------------------------------------------------------------------------------
	FACEBOOK BUTTON LOWER RIGHT CORNER
	--------------------------------------------------------------------------------------- */
	$('.facbook-link a').hover(
		function () {
			$(this).find('.up').stop(true, true).fadeTo(500, 0);
			$(this).find('.over').stop(true, true).fadeTo(500, 1);
			$(this).find('.cta').stop(true, true).fadeTo(600, 1);
		},
		function () {
			$(this).find('.up').stop(true, true).fadeTo(500, 1);
			$(this).find('.over').stop(true, true).fadeTo(500, 0);
			$(this).find('.cta').stop(true, true).fadeTo(600, 0);
		}
	);
	/* ---------------------------------------------------------------------------------------
	SINGLE IMAGE PAGE SHARE BUTTON
	--------------------------------------------------------------------------------------- */
	$('.share').hover(
		function () {
	        $(this).find('.box').stop(true, true).css({'height': 0, 'top' : 0, 'opacity' : 1.0}).show().animate({
	            height: "44px",
	            top: "-41px"
	        });
		},
		function () {
			$(this).find('.box').stop(true, true).fadeTo(300, 0, function(){
				$(this).hide();
			});
		}
	);
	$('.tumblr-share a').click(function(){
        return false;
    });

}); /* --------------- End of document ready */