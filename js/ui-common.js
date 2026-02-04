var ui = {
	makeResize: function() {		
		var responsiveImg = $('.responsive img');
		var wid = $(window).width();		
        if (wid < 1025) {
			$(responsiveImg).each(function(){
				$(this).attr('src',$(this).data('mo'));				
			});
			$('.pop_wrap').hide();	
			
        } else {
			$(responsiveImg).each(function(){
				$(this).attr('src',$(this).data('pc'));	
			});
			if($('.header').hasClass('active')) {
				$('.header').removeClass('active');			
			}				
		}
	},
	flowType: function() {
		$('html').flowtype({			
   			maxFont: 13,
			fontRatio: 37.5,
			maximum: 1024,			
		});
	},
	mainBg: function() {
		var currentX = '';
		var currentY = '';
		var movementConstant = 0.015;
		$(document).on('mousemove',function(e) {
			if (currentX == '') currentX = e.pageX;
			var xdiff = e.pageX - currentX;
			currentX = e.pageX;
			if (currentY == '') currentY = e.pageY;
			var ydiff = e.pageY - currentY;
			currentY = e.pageY;
			$('.main_bg').each(function(i, el) {
				var movement = (i + 1) * (xdiff * movementConstant);
				var movementy = (i + 1) * (ydiff * movementConstant);
				var newX = $(el).position().left + movement;
				var newY = $(el).position().top + movementy;
				$(el).css('left', newX + 'px');
				$(el).css('top', newY + 'px');			
			});
		});
	},
	tabActive: function() {
		$('.tabs').each(function(){
			var $tabs = $(this),
				$menu = $('.tab_menu .btn_tab'),
				$contents = $('.tab_contents');
			$tabs.find('.btn_tab').on('click', function() {
				var $btnTab = $(this),
					activeTab = $btnTab.attr('data-tab');				
				$menu.removeClass('on');
				setTimeout(function(){					
					ui.scrolling();
				}, 100);
				$btnTab.addClass('on');
				$tabs.find($contents).removeClass('active');
				$('#' + activeTab).addClass('active');				
			});
		});	
		
	
		$('.slider-tab .btn_tab').on('click', function() {			
			$('.slider-tab .btn_tab').removeClass('on');
			$(this).addClass('on');		
			$(this).parent().parent().parent().find('.tab_contents').removeClass('active');
			var selectedId = $(this).attr('data-tab');		
			$("#" + selectedId).addClass('active');			
			$('.carousel').find('.slick-slider').slick('setPosition');
			$('.carousel').find('.slick-slider').slick('slickGoTo',0);				
		});
    },	
	carousel: function() {
		$('.carousel').each(function() {					
			$(this).find('.slider-nav').slick({					
				slidesToShow: 5,	
				arrows: true,	
				appendArrows: $(this).find('.arrow_container'),	
				prevArrow: '<button class="prev" aria-label="Previous" type="button"><span>이전글</span></button>',
                nextArrow: '<button class="next" aria-label="Next" type="button"><span>다음글</span></button>',	
				focusOnSelect: true,
				// centerMode: true,
				// centerPadding: '55px',
				dots: true,				
				asNavFor: '.slider-for',	
				infinite: false,			
				responsive: [
					{  
						breakpoint: 1280,
						settings: {
							slidesToShow:3
						} 
					},
					{ 
						breakpoint: 1024,
						settings: { 
							slidesToShow:2,
							//centerPadding: '30%',
							dots: false, 
							//infinite: true
						} 
					},
					{ 
						breakpoint: 767,
						settings: {
							slidesToShow:1,
							//centerPadding: '30%',
							dots: false, 
							infinite: true
						} 
					}
				]		
			});

			$(this).find('.slider-for').slick({					
				slidesToShow: 1,
				arrows: false,
				swipe: true,
				adaptiveHeight: true,		
				asNavFor: '.slider-nav'		
			});
		});
	},
	sideBar: function() {
		$('.header').each(function() {	
			$(this).find('.btn_navigation').on('click', function(e){	
				e.preventDefault();
				if($('.header').hasClass('active')) {
					$('.header').removeClass('active');
					$('.wrap').off('scroll touchmove mousewheel');
				} else {
					$('.header').addClass('active');
					$('.wrap').on('scroll touchmove mousewheel', function(e){
						e.preventDefault();
						e.stopPropagation();
						return false;
					});
				}			
			});	
			$(this).find('.dimmed').on('click', function(){
				$('.header').removeClass('active');
				$('.wrap').off('scroll touchmove mousewheel');
			});
		});
	},
	topBtn: function() { 
		$(window).on('scroll', function() {		
            if ($(this).scrollTop() > 500) {
                $('.btn_top').fadeIn();
            } else {
                $('.btn_top').fadeOut();
            }
        });        
        $(".btn_top").on('click', function() {		
            $('html, body').animate({
                scrollTop : 0
            }, 400);
            return false;
        });	
	},
	layerPopup: function() {		
		$('.btn_layer').on('click', function(){	
			var $dataLink = $(this).attr('data-popup');
			layer_popup('#' + $dataLink);
		});

		function layer_popup(el){			
			var $el = $(el);    //레이어의 id를 $el 변수에 저장
			var wHeight = $(window).height(),
				hHeight = $('.header').outerHeight(),				
				popHeight1 = wHeight-hHeight;
				popHeight2 = (640/937*100) + '%';			
				
			$el.parent('.pop_wrap').fadeIn();
			// $el.css({				
			// 	maxHeight:popHeight1,
			// 	minHeight:popHeight2
			// });
			$el.find('.pop_inner').css({
				maxHeight:popHeight1,
				minHeight:popHeight2
			});			
			$el.find('.pop_close').on('click', function(){				
				$el.parent('.pop_wrap').hide();
				$el.removeAttr('style');
				$el.find('.pop_inner').removeAttr('style');
				return false;
			});
		}
	},
	inputClear: function() {
		$('.form_list .input').each(function(){			
			$(this).find('.input_text, .textarea').on('focus keyup', function(){
				$(this).addClass('focus');
				$(this).siblings('.input_clear').addClass('visible');
				if($(this).val().length == 0) {
					$(this).siblings('.input_clear').removeClass('visible');
					$(this).removeClass('focus');
				} else {
					$(this).siblings('.input_clear').addClass('visible');
					$(this).addClass('focus');
				}
			});
			
			$(this).find('.input_text, .textarea').on('blur', function(){
				$(this).siblings('.input_clear').removeClass('visible');					
			});
			
			$(this).find('.input_clear').on('mousedown touchstart', function(e){
				e.preventDefault();					
				$(this).closest('.input').find('.input_text, .textarea').val('').removeClass('focus');
				$(this).closest('.input').find('.input_clear').removeClass('visible');
				return false;
			});
			if($(this).find('.btn_search').length) {
				$(this).find('.input_clear').css({
					'right':'60px'
				})
			}
			var selectTarget = $('.select_item select');

			selectTarget.change(function(){
				var select_name = $(this).children('option:selected').text();
				$(this).siblings('label').text(select_name).css({
					'color':'#333'
				});
    		});
			selectTarget.on({
				'focus' : function () {
					$(this).parent().addClass('focus');
				},
				// 'blur' : function () {
				// 	$(this).parent().removeClass('focus');
				// }
			});
		});
	},
	simpleClickEvent: function() {
		$('.site_wrap').on('click', 'a' , function() {					
			$(this).addClass('active').siblings('a').removeClass('active');
		});
	},	
	scrolling: function() {
		AOS.init({			
			easing:'ease-in-out',
			duration: 800,		
			delay: 100,
			//mirror: false,
			//offset: 0 ,			
		});
		
	}	
};

$(function(){
	$(window).on('load resize', function() {
        ui.makeResize();
    });	
	ui.flowType();
	ui.mainBg();
	ui.tabActive();	
	ui.carousel();
	ui.topBtn();
	ui.sideBar();
	ui.layerPopup();
	ui.inputClear();
	ui.simpleClickEvent();	
	ui.scrolling();
});


