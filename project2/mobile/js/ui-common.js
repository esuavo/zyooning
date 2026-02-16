$(window).scroll(function() {
    if ($(document).scrollTop() > 55 && $(document).scrollTop() < 56) {
        var i = $(document).scrollTop() - 55;
        $('.header-bg').stop().css('opacity', i / 50);       
    } else if ($(document).scrollTop() < 55) {
        $('.header-bg').css('opacity', 0);       
    } else if ($(document).scrollTop() > 57) {
        $('.header-bg').css('opacity', 1);        
    }
});

$(document).ready(function(){
	/* top button */
	$(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.floating-btn').fadeIn();
        } else {
            $('.floating-btn').fadeOut();
        }
    });
    
    $(".floating-btn").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });

    /* gnb */
	var bodyScrollTop;
	$('.btn-gnb-menu').on('click', function() {		
		$('html, body').css({'overflow': 'hidden', 'height': '100%'}); // 모달팝업 중 html,body의 scroll을 hidden시킴
		// $('.gnb-wrap').on('scroll touchmove', function(event) { // 터치무브와 마우스휠 스크롤 방지
		// 	event.preventDefault();
		// 	event.stopPropagation();
		// 	return false;
		// });			
		$('body').css('overflow','hidden');		
		$('.gnb-wrap').stop().animate({left:0},'fast').show();		
	});
	$('.btn-gnb-close').on('click', function() {	
		$('html, body').css({'overflow': '', 'height': ''}); // 모달팝업 중 html,body의 scroll을 hidden시킴
		$('.gnb-wrap').off('scroll touchmove');		
		$('.btn-gnb-menu').focus();
		$('.gnb-wrap').stop().animate({left:$(window).width()*-1},'fast');
	});
	$('.gnb').on('click', 'button', function() {		
		function slideMenuUp(target) {
			$(target).removeClass('on').next('.depth2').slideUp();				
		}			
		function slidecDown(target) {
			// slideMenuUp();
			$('.gnb button').removeClass('on').next('.depth2').slideUp();	
			$(target).addClass('on').next('.depth2').slideDown();			
		}
		$(this).hasClass('on') ? slideMenuUp(this) : slidecDown(this);
	});

	$('.gnb').on('click', '.disabled button', function() {	
		$(this).next('.depth2').hide();
	});

	/* location-menu */
	$(".location-menu > button").on('click', function(e) {		
		$('.location-menu > ul').slideUp(200).prev('button').removeClass('on');
		$(this).next('ul:hidden').slideDown(200).prev('button').addClass('on');	
		
		
		$(".location-menu > ul > li").on('click', 'button', function() {
			$('.location-menu > ul > li button').removeClass('on');	
			$(this).addClass('on');			
			$(this).parent().parent('ul').slideUp(200).prev('button').text($(this).text()).removeClass('on');			
		});
	});

	$('body').on('click', function(e) {			
		if($('.location-menu').find('ul:visible')){ 
			if($('.location-menu').has(e.target).length === 0) {
				$('.location-menu').find('ul').slideUp(200).prev('button').removeClass('on');
			}	
		}	
	});

	var jbOffset = $('.location-menu').offset();
	$(window).scroll( function() {
		if ($(document).scrollTop() > jbOffset.top - 54 ) {
			$('.location-menu').addClass('fixed');
			if($('.location-menu').find('ul:visible')){ 
				$('.location-menu').find('ul').slideUp(200).prev('button').removeClass('on');		
			}
		}
		else {
			$('.location-menu').removeClass('fixed');
		}
	});

	$('.main-visual img').css('height', $(window).height());
	$(window).resize(function() {		
		$('.main-visual img').css('height', $(window).height());
	});

	/* main carousel */	
	$(".main-visual").slick({
		//autoplay: true,
		autoplaySpeed: 2000,
		dots: true,				
		prevArrow: $('.slick-prev'),
		nextArrow: $('.slick-next')
		// arrows: false,		
	});

	/* main spacial offer */
	$(".main-spacial-offer .spacial-offer-list").slick({
		arrows: false,		
		dots: true,	
	});

	/* main belleforet intro */
	$(".main-belleforet-intro .belleforet-intro").slick({
		arrows: false,		
		dots: true,	
	});

	/* 메인 하단 */
	$('.section-sns').slick({		
		arrows:false,
		variableWidth: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	});	

	/* accordion */
	$('.accordion-list').on('click', 'button', function() {		
		function accordUp(target) {
			$(target).removeClass('on').next('.cont').slideUp(200);				
		}			
		function accordDown(target) {			
			$('.accordion-list button').removeClass('on').next('.cont').slideUp(200);	
			$(target).addClass('on').next('.cont').slideDown(200);			
		}
		$(this).hasClass('on') ? accordUp(this) : accordDown(this);		
	});

	/* tab menu*/	
	$('.tab-menu li').on('click', function() {		
		$('.tab-menu li').removeClass('active');
		$(this).addClass('active');
		$('.tab-panel').removeClass('current');
		var selectedId = $(this).attr('data-tab');		
		$("#"+selectedId).addClass('current');		
		$('.slider').slick('setPosition');
		$('.slider').slick('slickGoTo',0);	   
	}); 

	/* layer popup */
	function tooltip() {
		var openBtn = '[data-tooltip]',
		closeBtn = '.tooltip-close';		

		function getTarget(t) {
			return $(t).attr('data-tooltip');
		}		

		function open(t) {			
			var showTarget = $('[data-tooltip-con="' + t + '"]');
			showTarget.show().focus();
			showTarget.find('.tooltip-close').data('activeTarget', t);
			showTarget.parent('.pop-wrap').show();
			showTarget.parent('.pop-wrap').find('.dim-bg').show();	
			
			

			var $elWidth = ~~(showTarget.outerWidth()),
	            $elHeight = ~~(showTarget.outerHeight()),
	            docWidth = $(document).width(),
	            docHeight = $(document).height();

	        // 화면의 중앙에 레이어를 띄운다.
	        
	        if ($elHeight < docHeight || $elWidth < docWidth) {
	            showTarget.css({
	                marginTop: -$elHeight /2	                
	            })
	        } else {
	            showTarget.css({top: 0, left: 0});
	        }
		}

		function close(t) {
			var activeTarget = $('[data-tooltip-con="' + t + '"]');
			activeTarget.hide();
			activeTarget.parent('.pop-wrap').hide();
			activeTarget.parent('.pop-wrap').find('.dim-bg').hide();			
		}

		$(document).on('click', openBtn, function(e){			
			e.preventDefault();			
  			// e.stopPropagation();
			open(getTarget(e.target));
			 $("body").css("overflow","");

		}).on('click', closeBtn, function(e) {
			e.preventDefault();
			// e.stopPropagation();
			close($(this).data('activeTarget'));
			$("body").css("overflow","");
		})	  
	}
	tooltip();

	/* layer full popup */
	function fullPopUp() {
		var openBtn = '[data-fullPop]',
		closeBtn = '.fullPop-close';		

		function getTarget(t) {
			return $(t).attr('data-fullPop');
		}		

		function open(t) {			
			var showTarget = $('[data-fullPop-con="' + t + '"]');
			showTarget.show().focus();
			showTarget.find('.fullPop-close').data('activeTarget', t);
			showTarget.parent('.pop-wrap').show();						

			var $elWidth = ~~(showTarget.outerWidth()),
	            $elHeight = ~~(showTarget.outerHeight()),
	            docWidth = $(document).width(),
	            docHeight = $(document).height();	       
		}

		function close(t) {
			var activeTarget = $('[data-fullPop-con="' + t + '"]');
			activeTarget.hide();
			activeTarget.parent('.pop-wrap').hide();			
			$('[data-fullPop="' + t + '"]').focus();	
				
		}
		$(document).on('click', openBtn, function(e){			
			e.preventDefault();			
  			// e.stopPropagation();
			open(getTarget(e.target));
			 $("body").css("overflow","");

		}).on('click', closeBtn, function(e) {
			e.preventDefault();
			// e.stopPropagation();
			close($(this).data('activeTarget'));
			$("body").css("overflow","");
		})	  
	}
	fullPopUp();


	// 약관동의 > 모두동의
	$('.ck-all').on('click', function() {
		if($('.ck-all').is(':checked') == true) { 
			$('.ck-agree').prop('checked', true);
		}		
		else {  
			$('.ck-agree').prop("checked",false); 
		}
	});	

	$("input:radio:not(.ck-agree)").click(function(){	
		if($(this).is(':checked') == true){         
			$('.ck-all').prop('checked', false);
		}
	});


	$(".ck-agree").on('click', function() {		
		if($(this).prop("checked")) {
			checkBoxLength = $(".ck-agree").length;
			checkedLength = $(".ck-agree:checked").length;			
			if( checkBoxLength == checkedLength ) {
				$('.ck-all').prop("checked",true); 
			} 
			else {
				$('.ck-all').prop('checked', false);				
			}			
		} 
		else {
			$('.ck-all').prop("checked",false); 
		}		
	});

    /* 골프 */
	$('.thumbnail-slide .slider').slick({
		slidesToShow:1,
		slidesToScroll:1,
		arrows:false,
		dots:true,
		infinite: true,
		// autoplay: true,
		// autoplaySpeed: 2000		
	});		

	var currentIndex = 0;		

	$('.tab-paging').slick({		
		//draggable: true,
		variableWidth: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: false,
		infinite: false,
		swipeToSlide: true,
		touchThreshold: 10,		
	});	

	$('.swipe-tab').on('click', function() {		
		$('.swipe-tab').removeClass('active');
		$(this).addClass('active');
		$('.tab-panel').removeClass('current');
		var selectedId = $(this).attr('data-tab');		
		$("#"+selectedId).addClass('current');			
		$('.slider').slick('setPosition');
		$('.slider').slick('slickGoTo',0);	   
	}); 	


	// 공통 캐러셀 
	$('.carousel .slider').slick({
	    slidesToShow: 1,
		slidesToScroll: 1,	
		arrows:false,
		dots:true
	}); 

	// 하단 스페셜오퍼
	$('.special-offer-wrap').slick({
		arrows:false,
		dots:true
	}); 
	

	/* */
	$(".divide-dropdown button").on('click', function() {
		//$(".dropdown ul").slideDown('fast');
		$(".divide-dropdown ul").slideUp(200).prev('.divide-dropdown button').removeClass('on');
		$(this).next('ul:hidden').slideDown(200).prev('.divide-dropdown button').addClass('on');
	});

	$(".divide-dropdown ul li").on('click', function() {
		$(".divide-dropdown button").removeClass('on');
		$(".divide-dropdown ul").hide();
	});

	

	$(document).bind('click', function(e) {
		var $clicked = $(e.target);
		if (!$clicked.parents().hasClass("divide-dropdown")) $(".divide-dropdown ul").hide();
	});
	$('.mutliSelect li').on('click', function() {
		$('.mutliSelect li').removeClass('active');
		$(this).addClass('active');
		$(this).parent().prev('button').text($(this).text());	
		$(".hida").hide();	
		var tab_id = $(this).attr('data-tab');
		$('.divide-tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	$(".tab-item").hide();
	$(".tab-item").eq(0).show();
	$("#selectBox").change(function() {
		$(".tab-item").hide();
		$(".tab-item").eq($("#selectBox option").index($("#selectBox option:selected"))).show();
	});

	// Input type tel
	$("input[type=tel]").on("keyup", function() {
		$(this).val($(this).val().replace(/[^0-9]/g,""));
	});

	// SignUp Birth Calendar layer
	$('.birth-group button.btn-calender').on('click',  function () {
		$(this).next('.calLayout').slideToggle(200);	
	});	

	
});	