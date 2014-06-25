/* ---------------------------------------------------------------------------------------
09/23/13 NEW IMAGE LOADER NOT USED YET
--------------------------------------------------------------------------------------- */
(function($){
	$.fn.preloader = function(user_options){
		
		var defaults = {
						delay:200,
						preload_parent:"li",
						check_timer:300,
						ondone:function(){ },
						oneachload:function(image){  },
						fadein:500 
		};
		
		// variables declaration and precaching images and parent container
		var options = $.extend(defaults, user_options),
			root = $(this),
			images = root.find("img").css({"visibility":"hidden",opacity:0}),
			timer,
			counter = 0,
			i=0,
			checkFlag = [],
			delaySum = options.delay,
		 
			init = function(){
				
				timer = setInterval(function(){
					
					if(counter>=checkFlag.length){
						clearInterval(timer);
						options.ondone();
						return;
					}
				
					for(i=0;i<images.length;i++){
						if(images[i].complete==true){
							if(checkFlag[i]==false){
								checkFlag[i] = true;
								options.oneachload(images[i]);
								counter++;	
								delaySum = delaySum + options.delay;
							}
							$(images[i]).css("visibility","visible").delay(delaySum).animate({opacity:1},options.fadein,
							function(){ $(this).parent().removeClass("preloader");   });
						}
					}
				},options.check_timer) 
			};
		
		images.each(function(){
			if($(this).parent(options.preload_parent).length==0){
				$(this).wrap("<a class='preloader' />");
			}else{
				$(this).parent().addClass("preloader");
				checkFlag[i++] = false;
			}		
		}); 

		images = $.makeArray(images); 
		
		var icon = jQuery("<img />",{
				id : 'loadingicon' ,
				src : 'img/loading.gif'
			}).hide().appendTo("body");
			
		timer = setInterval(function(){
			
			if(icon[0].complete==true){
				clearInterval(timer);
				init();
				icon.remove();
				return;
			}
		},100);
	}
})( jQuery );

/* ---------------------------------------------------------------------------------------
HOME PAGE FLY-OUT MENU
--------------------------------------------------------------------------------------- */
(function($){
	$.fn.menu_dropdown = function(){

		return this.each(function(){
			var root = $(this),
				closed_w = 0,
				open_w = 0;

			function init(){
				closed_w = root.find('.dropdown-title').outerWidth();

				root.find('li').each(function(){
					open_w = open_w + $(this).outerWidth();
					console.log( $(this).outerWidth() );
				})
				//console.log('closed_w: ' + closed_w);
				//console.log('open_w: ' + open_w);

				root.css({'width': closed_w});
				root.hover(
					function(){
						$(this).stop(true, false).animate({
							width: open_w+'px'
						}, 200);
					},
					function(){
						$(this).stop(true, false).animate({
							width: closed_w + 'px'
						}, 200, function() {
						});
					}
				);
			}
			init();
		});
	}
})( jQuery );

/* ---------------------------------------------------------------------------------------
CUSTOM MASONRY SET-UP AND CONTROLS || USED ON HOME PAGE AND INDEX PAGES
--------------------------------------------------------------------------------------- */
(function($){

	$.fn.grid_menu = function(custom_options){

		return this.each(function(){
			var defaults = {
				pages: true,
				columns: 10,
				rows: 4,
				grid_ratio:	(1400 / 804), //defult ratio for home grid used to keep things consistant 1.9278607 masonry
				grid_dimensions: { w:1300 , h:800 },
				padding: 20,
				page_nav: 20,
				parent_box: {w: 0, h: 0}
			}


			var options = $.extend(true, defaults, custom_options),
				root = $(this),
				win_w = $(window).innerWidth();
				win_h = $(window).innerHeight();
				cells_per_page = function(){ return options.columns * options.rows; },
				gutter = 20, //defult gutter size 14px 
				base_cell = {
					w		: 80,		//standard cell width for all cells originally 215
					h		: 108, 		//standard cell height for horizontal cells
					ratio	: 0.7407	//ratio of standard horizontal cell base_cell.w/base_cell.h
				}, 
				h_cell = {
					w		: function() { return base_cell.w*2 + gutter; },
					h		: function() { return base_cell.h; }
				},
				v_cell = {
					w		: function() { return h_cell.w(); },
					h		: function() { return base_cell.h*2 + gutter; }
				},
				l_cell ={
					w		: function() { return h_cell.w()*2 + gutter; },
					h		: function() { return v_cell.h(); }
				},
				cells_taken = 0,
				image_index = 0;
				options.grid_dimensions.w = gutter * options.columns + base_cell.w * options.columns; //width of the container that holds all the cells

			function calculate_cell_size(){
				var calc_ratio = options.parent_box.w / options.parent_box.h;

				if(	options.grid_ratio < calc_ratio ){
					calc_width = options.parent_box.h * options.grid_ratio;
					calc_width = calc_width - options.padding;
				}else{
					calc_width = options.parent_box.w;
					calc_width = calc_width - (calc_width * .05);
				}

				if(options.pages && options.parent_box.w <= (calc_width + options.page_nav) ){
					var buffer = options.page_nav;
					if( $(window).innerWidth() < 1024 ){
						buffer = 80;
					}
					calc_width = calc_width - buffer;
				}

				gutter = Math.floor(calc_width*.015); //originally Math.floor((calc_width - w_padding)*.015)
				base_cell.w = Math.floor( ( calc_width - (gutter * options.columns ))/options.columns );
				base_cell.h = Math.floor( base_cell.w / base_cell.ratio );
				options.grid_dimensions.w = gutter * options.columns + base_cell.w * options.columns;
			}

			function set_cell_size(){
				$('.s-image').css({width : base_cell.w, height : base_cell.h});
				$('.h-image').css({width : h_cell.w(), height : h_cell.h()});
				$('.v-image').css({width : v_cell.w(), height : v_cell.h()});
				$('.l-image').css({width : l_cell.w(), height : l_cell.h()});
				$('.featured').css({'margin-left' : Math.floor(gutter/2), 'margin-right' :  Math.ceil(gutter/2), 'margin-bottom' : gutter });
				root.css({'width' : options.grid_dimensions.w});
			}

			function masonry_setup(){
				calculate_cell_size();
				set_cell_size();

				root.parent().find('.featured').each(function(i){
					cells_taken = cells_taken + Number($(this).attr('idcel')); //idcel is the number of cells this image takes up
					$(this).css({'z-index' : cells_taken, 'position': 'relative'});
					if(cells_taken <= cells_per_page() ){
						$(this).hide().clone().appendTo(root).addClass('masonry_image');
					}
				});

				root.imagesLoaded(function(){
					$.loading(false);
					
					root.masonry({
						containerStyle: 'null',
						itemSelector : '.masonry_image',
						columnWidth : Number(base_cell.w + gutter)
					});

					pos_masonry();

					root.find('.masonry_image').first().fadeIn('fast', function showGrid(){
						$(this).next('.masonry_image').fadeIn(100, showGrid);
					});
					if( no_touch ){
						$('.masonry_image a').hover(
							function () {
					   			$(this).find($('div')).fadeIn('fast');
					  		},
					  		function () {
					   			$(this).find($('div')).hide();
					  		}
						);
					}
				}); 
			}
			masonry_setup();

			function change_page(dir){
				$('.masonry_image').stop(true, true);

				if(dir == 'next'){
					image_index = image_index + cells_per_page() >= cells_taken ? 0 : image_index + cells_per_page();
				}else{
					image_index = image_index - cells_per_page() < 0 ? Math.floor(cells_taken / cells_per_page()) * cells_per_page() : image_index - cells_per_page();
				}

				$('.masonry_image').fadeOut('fast', function(){
					root.masonry( 'remove', $(this));
				});

				function masonry_reset(){

					$('.featured').each(function(i){
						if( $(this).css('z-index') > image_index && $(this).css('z-index') <= image_index+cells_per_page() ){
							$(this).hide().clone().appendTo('.masonry-container').addClass('masonry_image');
						}
					});
					root.masonry('reloadItems');
					root.masonry();
					$('.masonry_image').each(function(i){
						$(this).delay(i*100).fadeTo(100, 1);
					})
				}
				setTimeout( function() {
					//this forces the masonry container to empty before adding new items.
					while( $('.masonry-container .masonry_image').length <= 0 )
						masonry_reset();
					if( no_touch ){
						$('.masonry_image a').hover(
							function () {
					   		 $(this).find($('div')).fadeIn('fast');
					  		},
					  		function () {
					   		 $(this).find($('div')).hide();
					  		}
						);
					}
				}, 500);

			}
			function pos_masonry(){
				if(options.pages && cells_taken > cells_per_page()){
					$('.grid-controls-prev').show();
					$('.grid-controls-next').show();
				}else{
					$('.grid-controls-prev').fadeOut('fast');
					$('.grid-controls-next').fadeOut('fast');
				}
				root.css({'margin-top' : ( (root.height()/2) * -1 + gutter/2 ) -65});
				root.css({'margin-left' : ( (root.width()/2) * -1 )});
			}

			$(".grid-controls-next").click(function(){
		        change_page("next");
		    });
			$(".grid-controls-prev").click(function(){
		    	change_page("prev");
		    });

			$.grid_menu = {};

			$.grid_menu.resize = function(parent_w, parent_h){
				options.parent_box.h = parent_h;
				options.parent_box.w = parent_w;
				calculate_cell_size();
				set_cell_size();
				root.masonry( 'option', { columnWidth: Number(base_cell.w + gutter) });
				root.masonry( 'reload' );
				pos_masonry();
			};
		});
	}	
})( jQuery );

/* ---------------------------------------------------------------------------------------
CUSTOM SLIDESHOW || USED ON HOME PAGE AND PORTFOLIO PAGES
--------------------------------------------------------------------------------------- */
(function($){
	$.fn.project_slideshow = function(custom_options){

		return this.each(function(){
			var defaults = {
				delay:200,
				preload_parent:"li",
				check_timer:300,
				ondone:function(){ if(options.auto_run){start_slideshow();} },
				oneachload:function(image){ },
				container_w: $(window).innerWidth(),
				container_h: $(window).innerHeight(),
				auto_run: false,
				fadetime:500 
			};

			var options = $.extend(true, defaults, custom_options),
			root = $(this),
			images = root.find(".upm-image-container img").css({"visibility":"hidden",opacity:0}),
			timer,
			counter = 0,
			i=0,
			checkFlag = [],
			delaySum = options.delay,
			resizing = false,
			slides_playing = false,
			current = 0,

			init = function(){
				console.log('init');

				timer = setInterval(function(){
					if(counter>=checkFlag.length){
						clearInterval(timer);
						options.ondone();
						return;
					}
					if( options.auto_run ){
						root.find('.current').css({"visibility":"visible",opacity:1});
					}
				
					for(i=0;i<images.length;i++){
						if(images[i].complete==true){
							if(checkFlag[i]==false){
								checkFlag[i] = true;
								options.oneachload(images[i]);
								counter++;
								delaySum = delaySum + options.delay;
							}
							var p_height = $(images[i]).closest('li').height(),
								i_height = $(images[i]).height();

							$(images[i]).css({'visibility':'visible', 'margin-top': (p_height - i_height)/2}).delay(delaySum).animate({opacity:1},options.fadein,function(){
								$(this).closest('li').removeClass("preloader");
								$(this).next('.project_meta').css({width: $(this).width(),"visibility":"visible"}).delay(delaySum).animate({opacity:1},options.fadein);
							});
						}
					}
				
				},options.check_timer)
			};

			images.each(function(){
				if($(this).closest(options.preload_parent).length==0){
					$(this).wrap("<li class='preloader' />");
				}else{
					$(this).closest('li').addClass("preloader");
					checkFlag[i++] = false;
				}
				set_image_ratio( $(this) );
				$(this).next('.project_meta').css({width: $(this).width(),"visibility":"hidden",opacity:0});
			}); 

			images = $.makeArray(images);
			$(images[0]).closest('li').addClass('first_image current');

			root.find('li').each(function(i){
				$(this).css({'z-index':images.length-i,"visibility":"hidden",opacity:0}).addClass('slideshow_image center');
			});

			var icon = $("<img />",{
				
					id : 'loadingicon' ,
					src : 'http://frederic.c2ak.com/wp-content/themes/fl_portfolio/images/89.gif'
				
				}).hide().appendTo("body");
			
			timer = setInterval(function(){
				
				if(icon[0].complete==true){
					clearInterval(timer);
					init();
					icon.remove();
					return;
				}
				
			},100);

			function show(index){
				while( index < 0 )
					index += images.length;

				while( index >= images.length )
					index -= images.length;

				current = index;
				//console.log(current);
				root.find('.current').removeClass('current').css({'z-index':current+1}).animate({opacity:0},options.fadetime,function(){
					$(this).css("visibility","hidden");

					$(images[current]).closest('li').addClass('current');

					$('.switch_project > div').fadeIn('fast');
					$(images[current]).closest('li').css({'visibility': 'visible', 'z-index': images.length+1}).animate({opacity:1},options.fadetime);

				});
			};

			function set_image_ratio(img){
				//if image is wider format than its container
				var image_r = parseInt( $(img).attr('org_w') ) / parseInt( $(img).attr('org_h') ),
					box_r = options.container_w / options.container_h;
				if( image_r > box_r){
					$(img).removeClass('horz');
					$(img).addClass('vert');
				}else{
					$(img).removeClass('vert');
					$(img).addClass('horz');
				}
			}

			function stop_slideshow(){
				clearInterval(slides_playing);
				slides_playing = false;
			}
			function start_slideshow(){
				if(slides_playing){
					clearInterval(slides_playing);
				}
				if( images.length > 1){
					slides_playing = true;
					slides_playing = setInterval(function(){next()},3500);
				}
			}

			function center_horz(object){
				object.css({ 'left': (options.container_w - object.width())/2 });
			}

			function prev(){
				show(current-1);
			}

			function next(){
				show(current + 1);
			}

			//spacebar pauses and plays slideshow
			$(document).keydown(function(e){
				var code = e.which;
				if(code == 32){
					if(slides_playing){
						stop_slideshow();
						console.log( "stop" );
					}else{
						setTimeout( function() {
							if(!slides_playing){
								start_slideshow();
								console.log( "play" );
							}
						}, 1000);
					}
					return false;
				}
			});

			root.bind('prev', prev).bind('next', next).bind('goto', function(e, index){
				show(index);
			});

		});
	}
})( jQuery );

/* ---------------------------------------------------------------------------------------
CUSTOM VIMEO CONTROLS AND SET_UP || USED ON HOME PAGE AND MOTION PAGES
--------------------------------------------------------------------------------------- */
(function($){
	$.fn.vimeo_video = function(custom_options){

		return this.each(function(){
			var defaults = {
				container_h: 850,
				vimeo_max_w: 1920,
				vimeo_max_h: 1080
			}

			var options = $.extend(true, defaults, custom_options),
				root = $(this),
				vimeo_embed_src,
				vimeo_ratio = options.vimeo_max_w / options.vimeo_max_h,
				win_w = 0,
				win_h = 0,
				$vimeo_container = $('<iframe frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'),
				container_ratio = win_w / options.container_h;

			//get the src for each video
			var vimeo_element = String(uvm_video_posts[0]);
			vimeo_embed_src = $(vimeo_element).attr('src');

			function display_video(){
				$.fn.vimeo_video.set_video_position();
				$vimeo_container.attr({src : vimeo_embed_src});
				$vimeo_container.appendTo('.video-object');
				// --------- NEWLY ADDED!!!! 04/22/13
				$('.switch_project > div').fadeIn('fast');
				// ----------------------------------
			};

			$.fn.vimeo_video.set_video_position = function(p_height){
				if(!p_height){
					p_height = options.container_h;
				}

				win_w = window.innerWidth;
				win_h = window.innerHeight;

				container_ratio = win_w / p_height;

				if(vimeo_ratio > container_ratio){
					//container is horizontal so set width first
					if( (win_w-140) > options.vimeo_max_w){
						vimeo_w = options.vimeo_max_w;
					}else{
						vimeo_w = win_w - 120;
					}
					vimeo_h = Math.floor(vimeo_w / vimeo_ratio);
				}else{
					//window is vertical so set height first
					if(p_height > options.vimeo_max_h){
						vimeo_h = options.vimeo_max_h;
					}else{
						vimeo_h = p_height - 50;
					}
					vimeo_w = Math.floor(vimeo_h * vimeo_ratio);

					if( (win_w-160) < vimeo_w){
						vimeo_w = vimeo_w - 130;
						vimeo_h = Math.floor(vimeo_w / vimeo_ratio);
					}
				}

				//apply the width and height
				$vimeo_container.attr({width : vimeo_w, height : vimeo_h});
				$vimeo_container.css({position: 'relative', top: ((p_height - vimeo_h)/2) });
			}
			display_video();
		});
	}
})( jQuery );


/* ---------------------------------------------------------------------------------------
NEWS PAGE SLIDESHOWS
--------------------------------------------------------------------------------------- */
(function($){
	$.fn.news_slideshow = function(custom_options){

		return this.each(function(){
			var defaults = {
				thumb: true,
				delay:200,
				preload_parent:"li",
				check_timer:300,
				ondone:function(){ if(options.auto_run){start_slideshow();} },
				oneachload:function(image){ },
				auto_run: false,
				fadetime:500
			}

			var options = $.extend(true, defaults, custom_options),
				root = $(this),
				images = root.find(".news-image img").css({"visibility":"hidden",opacity:0}),
				timer,
				counter = 0,
				i=0,
				checkFlag = [],
				delaySum = options.delay,
				resizing = false,
				slides_playing = false,
				current = 0,

				init = function(){
					console.log('init');

					timer = setInterval(function(){
						if(counter>=checkFlag.length){
							clearInterval(timer);
							options.ondone();
							return;
						}
						if( options.auto_run ){
							root.find('.current').css({"visibility":"visible",opacity:1});
						}
					
						for(i=0;i<images.length;i++){
							if(images[i].complete==true){
								if(checkFlag[i]==false){
									checkFlag[i] = true;
									options.oneachload(images[i]);
									counter++;
									delaySum = delaySum + options.delay;
								}
								var p_height = $(images[i]).parent().height(),
									i_height = $(images[i]).height();

								$(images[i]).css({'visibility':'visible'}).delay(delaySum).animate({opacity:1},options.fadein,function(){
									$(this).parent().removeClass("preloader");
								});
							}
						}
					
					},options.check_timer)
				};

			images.each(function(){
				if($(this).parent(options.preload_parent).length==0){
					$(this).wrap("<li class='preloader' />");
				}else{
					$(this).parent('li').addClass("preloader");
					checkFlag[i++] = false;
				}
				set_image_ratio( $(this) );
			}); 

			images = $.makeArray(images);
			$(images[0]).parent('li').addClass('first_image current');

			root.find('li.news-image').each(function(i){
				$(this).css({'z-index':images.length-i,"visibility":"hidden",opacity:0});
			});

			var icon = $("<img />",{
				
					id : 'loadingicon' ,
					src : 'http://frederic.c2ak.com/wp-content/themes/fl_portfolio/images/89.gif'
				
				}).hide().appendTo("body");
			
			timer = setInterval(function(){
				
				if(icon[0].complete==true){
					clearInterval(timer);
					init();
					icon.remove();
					return;
				}
				
			},100);

			function show(index){
				while( index < 0 )
					index += images.length;

				while( index >= images.length )
					index -= images.length;

				current = index;
				//console.log(current);
				root.find('.current').removeClass('current').animate({opacity:0},options.fadetime,function(){
					$(this).css("visibility","hidden");

					$(images[current]).parent().addClass('current');
					$(images[current]).parent().css({'visibility': 'visible'}).animate({opacity:1},options.fadetime);
				});
			};

			function set_image_ratio(img){
				//if image is wider format than its container
				var image_r = parseInt( $(img).attr('org_w') ) / parseInt( $(img).attr('org_h') ),
					box_r = options.container_w / options.container_h;
				if( image_r > box_r){
					$(img).removeClass('horz');
					$(img).addClass('vert');
				}else{
					$(img).removeClass('vert');
					$(img).addClass('horz');
				}
			}
			function stop_slideshow(){
				clearInterval(slides_playing);
				slides_playing = false;
			}
			function start_slideshow(){
				if(slides_playing){
					clearInterval(slides_playing);
				}
				if( images.length > 1){
					slides_playing = true;
					slides_playing = setInterval(function(){next()},3500);
				}
			}
			function prev(){
				show(current-1);
			}
			function next(){
				show(current + 1);
			}
			$(this).find('.next_img').click(function() {
				next();
				return false;
			});

			show(0);

			/* --------------------------------------------------------------------------
			SET-UP AND CONTROL THUMBNAILS
			--------------------------------------------------------------------------- */
			var thumbnails = [];

			$(this).find('li.news-thumb').each(function(i){
				thumbnails[i] = $(this).css({'z-index': i});
			});

			root.find('.slideshow_nav').css({ 'width' : 88*thumbnails.length });

			function setup_thumbnails(){
				if(thumbnails.length > 8){
					var thumb_container_w = 88*7;
					root.find('.nav_container').css({ 'width' : thumb_container_w, 'margin-left' : Math.floor( ($('.slideshow_images').width()-thumb_container_w)/2+4) });
					root.find('.arrow-prev').show();
					root.find('.arrow-next').show();
				}
			}
			setup_thumbnails();

			root.find('.news-thumb a').click(function(){
				var image_number = $(this).parent().css('z-index');
				show( Number(image_number) );
				return false;
			});

			$('.news-thumb a').hover(
				function () {
					$(this).find('.image-description').stop().fadeTo(300, 0.6);
				},
				function () {
					$(this).find('.image-description').stop().fadeTo(300, 0);
				}
			);

			root.find('a.arrow-next').click(function(){
				root.find('.nav_container').scrollTo('+=616', 500, {axis:'x'});
				return false;
			});
			root.find('a.arrow-prev').click(function(){
				root.find('.nav_container').scrollTo('-=616', 500, {axis:'x'});
				return false;
			});
			$('.nav_slider > a').hover(
				function () {
					$(this).find('.up').stop().fadeTo(300, 0);
					$(this).find('.over').stop().fadeTo(300, 1);
				},
				function () {
					$(this).find('.up').stop().fadeTo(300, 0.2);
					$(this).find('.over').stop().fadeTo(300, 0);
				}
			);

		});
	}
})( jQuery );


/* --------------------------------------------------------------------------
FORMAT VIDEO ON NEWS PAGE
--------------------------------------------------------------------------- */
(function($) {
	// Responsive videos
	if( $('body.single-news_page').length > 0 || $('body.category-news').length > 0 ){

		//var all_videos = $( 'iframe[src^="http://player.vimeo.com"], iframe[src^="http://www.youtube.com"], object, embed' );
		var all_videos = $( 'iframe[src^="http://player.vimeo.com"], iframe[src^="//player.vimeo.com"]'  );

		all_videos.each(function() {
			var el = $(this);
			el
				.attr( 'data-aspectRatio', el.height() / el.width() )
				.attr( 'data-oldWidth', el.attr( 'width' ) );
		} );

		console.log('test', all_videos);
		
		$(window)
			.resize( function() {
				all_videos.each( function() {
					var el = $(this),
						newWidth = el.parents( '.news_video' ).width(),
						oldWidth = el.attr( 'data-oldWidth' );
		
					if ( oldWidth > newWidth ) {
						el
							.removeAttr( 'height' )
							.removeAttr( 'width' )
							.width( newWidth )
					    		.height( newWidth * el.attr( 'data-aspectRatio' ) );
					}
				} );
			} )
			.resize();		
	}


})(jQuery);