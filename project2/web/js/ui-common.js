$(window).scroll(function() {
    if ($(document).scrollTop() > 110 && $(document).scrollTop() < 111) {
        var i = $(document).scrollTop() - 110;
        $('.header-bg').stop().css('opacity', i / 50);       
    } else if ($(document).scrollTop() < 110) {
        $('.header-bg').css({"height":""}).parent().removeClass('nav-up').find('.util-menu').slideDown(200);        
    } else if ($(document).scrollTop() > 112) {
        $('.header-bg').css({"height":"74px"}).parent().addClass('nav-up').find('.util-menu').slideUp(200);
    }
});
$(document).on('ready', function() {	
	$('html').removeClass('no-js');

	//오픈후
	var gnb = $('#header'); 	
	gnb.find('.gnb>li>a').on('mouseenter focusin', function(e){	
		e.preventDefault();				
		gnb.find('.gnb>li>a').addClass('on').next('.depth2').slideDown(200).parents('#header').find('.header-bg').css({"opacity":"1","background":"#fff"});		
		$(this).parents("#header").find('.btn-combine-booking ul:visible').hide();
		var state = $('.gnb>li.depth2').css('display');
	    if(state == 'none'){ 
	        $('.btn-combine-booking ul').hide(); 
	    }
	    else {
			$('.btn-combine-booking ul').show();    	
	    }
		$(".depth2 li a").on("mouseenter focusin",function(){
			gnb.find('.gnb>li>a').removeClass("on");
			$(this).parents().prev('a').addClass("on");		
		});	
		gnb.find('.gnb>li>a').removeClass('on');
	}).focus(function(){
		$(this).mouseenter();	
	}).end().mouseleave(function(){					
		gnb.find('.gnb>li>a').removeClass('on').next('.depth2').hide().parents('#header').find('.header-bg').css({"opacity":"0","background":"transparent"});
		$('.btn-combine-booking ul:visible').slideUp(180);
	}).focusout(function(){
		$(this).mouseleave();
	}).on('click', function(){			
		$(this).off('mouseleave');
	});

	$('.gnb>li>a[href="#none"]').click(function(e) {
		e.preventDefault();
	});

	//오픈전
	// var gnb = $('#header'); // nav태그 클래스값입력
	// gnb.find('.gnb>li>a').on('mouseenter focusin',function(e){	
	// 	e.preventDefault();		
	// 	$(this).addClass('on').next('.depth2').slideDown(200).parents('#header').find('.header-bg').css({"opacity":"1","background":"#fff"});
	// 	$(this).parent('.disabled').find('a').next('.depth2:hidden').parents('#header').find('.header-bg').css({"opacity":"0","background":"transparent"}); // css에서 on이라는 클래스값을 입력
	// 	$(this).parents("#header").find('.btn-combine-booking ul:visible').hide();
	// 	var state = $('.gnb>li.depth2').css('display');
	//     if(state == 'none'){ 
	//         $('.btn-combine-booking ul').hide(); 
	//     }
	//     else {
	// 		$('.btn-combine-booking ul').show();    	
	//     }
	// }).focusin(function(){
	// 	$(this).mouseenter();
	// }).end().mouseleave(function(){		
	// 	gnb.find('.gnb>li>a').removeClass('on').next('.depth2').hide().parents('#header').find('.header-bg').css({"opacity":"0","background":"transparent"});
	// 	$('.btn-combine-booking ul:visible').slideUp(180);

	// }).focusout(function(){
	// 	$(this).mouseleave();
	// })	
	// gnb.find('li.disabled').find('a').on('mouseenter focusin',function(e){
	// 	e.preventDefault();
	// 	$('.depth2').hide();
	// 	$('.btn-combine-booking ul').hide();
	// 	gnb.find('.gnb>li>a').removeClass('on');
	// }).end().mouseleave(function(){
	// 	gnb.find('.gnb>li>a').removeClass('on');		
	// });	

	
	$('.btn-combine-booking').on('mouseenter focusin', function(e) {
		gnb.find('.gnb>li>a').next('.depth2').slideDown(200).parents('#header').find('.header-bg').css({"opacity":"1","background":"#fff"});
		$('.btn-combine-booking ul').slideDown(180);			
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

	$('.main-visual .slick-dots').wrap('<div class="btn-control" />');

	$(".slick-dots").before($('.btn-control .slick-prev'));
	$(".slick-dots").after($('.btn-control .slick-next'));

	/* 스페셜 오퍼 영역 carousel */
	var $status = $('.paging');
    var $slickElement = $('.main-special-offer .slider');

    // $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //     //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    //     var i = (currentSlide ? currentSlide : 0) + 1;
    //     //$(this).find('.paging').html('<span class="current">' + i + '</span> ' + '/' + ' <span class="total">' + slick.slideCount + '</span>');
    //     $status.html('<span class="current">' + '0' + i + '</span> ' + '/' + ' <span class="total">' + '0' + slick.slideCount + '</span>');
    // });
	$slickElement.slick({
		// dots: true,
		infinite: true,
		speed: 300,
		slidesToScroll: 1,
		slidesToShow: 2,
		// slidesToShow: 1,
		// centerMode: true,
		variableWidth: true,
		prevArrow: $('.main-special-offer').find('.btn-prev'),
		nextArrow: $('.main-special-offer').find('.btn-next'),  		
	});	
		
	$('.main-visual img').css('height', $(window).height());
	$(window).resize(function() {		
		$('.main-visual img').css('height', $(window).height());
	});

	/* 메인 하단 */	
	$('.section-sns').slick({		
		arrows:false,
		variableWidth: true,
		infinite: false,
		swipe: false,
		swipeToSlide: false,
		touchMove: false,
		draggable: false		
	});	
	

	/* 골프 carousel */		
	$('.hole-img-carousel').slick({				
		dots:true,		
		dotsClass:'tab-paging',		
		arrows:true,		
		prevArrow: '.btn-prev',
		nextArrow: '.btn-next', 		
		swipe: false,
		swipeToSlide: false,
		touchMove: false,
		draggable: false,
		customPaging: function(slide, i) {
			var btnTxt = $(slide.$slides[i]).data('arg');
    		return '<button type="button">'+ btnTxt + '</button>';
		}
		// customPaging: function(slide, i) {	    
	 //    	return '<button type="button">'+ (i+1)+ '홀' + '</button>';	    
		// }
	});		


	
	$('.tab-paging').wrap('<div class="pagination" />');
	$(".tab-paging").before($('.btn-prev'));
	$(".tab-paging").after($('.btn-next'));
	

	$('.thumbnail-slide .slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,	
		arrows:true,
		dots:true,  
		dotsClass:'thum-nav',	
		customPaging: function(slick,index) {
            var targetImage = slick.$slides.eq(index).find('img').attr('src');
            return '<img src=" ' + targetImage + ' "/>';
        }			
	});
	
	/* 숙박 carousel */		
	$('.carousel .slider').slick({        
        slidesToShow: 1,
        slidesToScroll: 1,		
		autoplay: false,
		infinite: true,
		dots:true,  
		dotsClass:'thum-nav',
		customPaging: function(slick,index) {
            var targetImage = slick.$slides.eq(index).find('img').attr('src');
            return '<img src=" ' + targetImage + ' "/>';
        }	
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

	/* main drop down */
	$(".reserve-type > button").on('click', function(e) {		
		$('.reserve-type > ul').slideUp(200).prev('button').removeClass('on');
		$(this).next('ul:hidden').slideDown(200).prev('button').addClass('on');		
		
		if($('.reserve-date').find('.cm_calender_area_in:visible')){ 			
			$('.reserve-date').find('.cm_calender_area_in').slideUp(200).prev('button').removeClass('on');	
			$('.dropdown-menu').find('ul').slideUp(200);		
		}
		$(".reserve-type > ul > li").on('click', 'button', function() {
			$('.reserve-type > ul > li').removeClass('active');	
			$(this).parent('li').not('.disabled').addClass('active');			
			$(this).parent('li').not('.disabled').parent('ul').slideUp(200).prev('button').text($(this).text()).css("color","#000").removeClass('on');			
		});
	});

	$('.sel-date').on('click', 'input', function () {
		$('.cm_calender_area_in:visible').slideUp().parents('.reserve-date').removeClass('on');
		$(this).parent().next('.cm_calender_area_in:hidden').slideDown().parents('.reserve-date').addClass('on');
		if($('.reserve-type').find('ul:visible')){ 			
			$('.reserve-type').find('ul').slideUp(200).prev('button').removeClass('on');			
		}
	});

	$(".reserve-date > button").on('click', function(e) {			
		$('.reserve-date > .cm_calender_area_in:visible').slideUp(200).prev('button').removeClass('on');
		$(this).next('.cm_calender_area_in:hidden').slideDown(200).prev('button').addClass('on');
		if($('.reserve-type').find('ul:visible')){ 
			$('.reserve-type').find('ul').slideUp(200).prev('button').removeClass('on');				
		}		
		
	});

	$('body').on('click', function(e) {			
		if($('.reserve-type').find('ul:visible')){ 
			if($('.reserve-type').has(e.target).length === 0) {
				$('.reserve-type').find('ul').slideUp(200).prev('button').removeClass('on');
			}	
		}	
	});

	$('body').on('click', function(e) {			
		if($('.reserve-date').find('.cm_calender_area_in:visible')){ 
			if($('.reserve-date').has(e.target).length === 0) {
				$('.reserve-date').find('.cm_calender_area_in').slideUp(200).prev('button').removeClass('on');
			}	
		}	
	});

	$('body').on('click', function(e) {	
		if($('.location-menu').find('ul:visible')){ 
			if($('.location-menu').has(e.target).length === 0) {
				$('.location-menu > div').find('ul').slideUp(200).prev('button').removeClass('on');
			}	
		}	
	});

	/* drop down */
	$(".depth01 > button").on('click', function(e) {		
		$('.depth01 > ul').slideUp(200).prev('button').removeClass('on');
		$(this).next('ul:hidden').slideDown(200).prev('button').addClass('on');
		
		
		if($('.depth02').find('ul:visible')){ 			
			$('.depth02').find('ul').slideUp(200).prev('button').removeClass('on');			
		}
		$(".depth01 > ul > li").on('click', 'button', function() {
			$('.depth01 > ul > li').removeClass('active');	
			$(this).parent('li').addClass('active');			
			$(this).parent().parent('ul').slideUp(200).prev('button').text($(this).text()).removeClass('on');
			//$('.depth2').hide();
			if($('.depth02').find('ul:visible')){ 
				$('.depth02').find('ul').slideUp(200).prev('button').removeClass('on');		
			}
			
			var depthMenu = $(this).parent().attr('data-tab');		
			$("#"+depthMenu).show();			
		});
	});

	$(".depth02 > button").on('click', function(e) {		
		$('.depth02 > ul:visible').slideUp(200).prev('button').removeClass('on');
		$(this).next('ul:hidden').slideDown(200).prev('button').addClass('on');
		if($('.depth01').find('ul:visible')){ 
			$('.depth01').find('ul').slideUp(200).prev('button').removeClass('on');				
		}
			
		$(".depth02 > ul > li").on('click', 'button', function() {
			$('.depth02 > ul > li').removeClass('active');	
			$(this).parent('li').addClass('active');			
			$(this).parent().parent('ul').slideUp(200).prev('button').text($(this).text()).removeClass('on');
			if($('.depth01').find('ul:visible')){ 
				$('.depth01').find('ul').slideUp(200).prev('button').removeClass('on');	
			}			
		});
	});


	/* sub visual right */	
	$('.btn-dropdown:not(.disabled)').on('click', function() {	
		$('.dropdown-menu ul:visible').slideUp(200).prev('button').removeClass('on');
		$(this).next('.dropdown-menu ul:hidden').slideDown(200).prev('button').addClass('on');
		$(".dropdown-menu > ul > li").on('click', 'button', function() {
			$('.dropdown-menu > ul > li').removeClass('active');	
			$(this).parent('li').addClass('active');			
			$(this).parent().parent('ul').slideUp(200).prev('button').text($(this).text()).removeClass('on');
					
			var depthMenu = $(this).parent().attr('data-tab');		
			$("#"+depthMenu).show();			
		});
		if($('.dropdown-menu').find('ul:visible')){ 
			$('.cm_calender_area_in').slideUp(200).parent('.choice').removeClass('on');	
		}
	});


	$('.right-schedule .item').on('click', '.choice:not(.disabled) input', function() {	
		$('.cm_calender_area_in').slideUp(200).parent('.choice').removeClass('on');	
		$(this).next('.cm_calender_area_in:hidden').slideDown().parent('.choice').addClass('on');		
	});

	$('body').on('click', function(e) {	
		if($('.dropdown-menu').find('ul:visible')){ 
			if($('.dropdown-menu').has(e.target).length === 0) {
				$('.dropdown-menu').find('ul').slideUp(200).prev('button').removeClass('on');
			}	
		}	
	});

	$('body').on('click', function(e) {			
		if($('.right-schedule .item').find('.cm_calender_area_in:visible')){ 
			if($('.right-schedule .item').has(e.target).length === 0) {
				$('.right-schedule .item').find('.cm_calender_area_in').slideUp(200).parent('.choice').removeClass('on');	
			}	
		}	
	});

	//input cursor 없애기
	$('input[readonly]').mousedown(function(e){ 
	    e.preventDefault(); 
	    $(this).blur(); 
	    return false; 
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
	        
	        if ($elHeight < docHeight || $elWidth < docWidth) {
	            showTarget.css({
	                marginTop: -$elHeight /2,
	                marginLeft: -$elWidth/2
	            })
	        } else {
	            showTarget.css({top: 0, left: 0});
	        }
	        $('html,body').css({"overflow":"hidden"})
		}

		function close(t) {	
			var activeTarget = $('[data-tooltip-con="' + t + '"]');
			activeTarget.hide();
			activeTarget.parent('.pop-wrap').hide();
			activeTarget.parent('.pop-wrap').find('.dim-bg').hide();			
			activeTarget.css({marginTop: 0, marginLeft: 0});
			$('html,body').css({"overflow":""})
		}		
		
		$(document).on('click', openBtn, function(e){
			e.preventDefault();			
			open(getTarget(e.target));				
		}).on('click', closeBtn, function(e) {	
			e.preventDefault();			
			close($(this).data('activeTarget'));
		})
	}
	tooltip();

	/* 회원가입 */
	$('.terms-group dt').on('click','button',function(){
		if ($(this).parent('').parent('dl').hasClass('on')){
			$(this).parent('').parent('dl').removeClass('on');
			$(this).children('span').text('자세히보기');
		} else {
			$('.terms-group').removeClass('on').children('dt').children('button').find('span').text('자세히보기');
			$(this).parent('').parent('dl').addClass('on');
			$(this).children('span').text('닫기');
		}
	});

			
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

	// SignUp Birth Calendar layer
	$('.birth-group button.btn-calender').on('click',  function () {
		$(this).next('.calLayout').slideToggle(200);	
		if($('.select-group select').find('ul:visible')){ 			
			$('.select-group select').find('ul').slideUp(200).prev('button').removeClass('on');			
		}
	});


	$('body').on('click', function(e) {			
		if($('.birth-group').find('.calLayout:visible')){ 
			if($('.birth-group').has(e.target).length === 0) {
				$('.birth-group').find('.calLayout').slideUp(200).prev('button').removeClass('on');
			}	
		}	
	});

	
	$('.select-group select').selectric({		
  		maxHeight: 550
	});
	
	$('body').on('click', function(e) {			
		if($('.select-group').find('.select-options:visible')){ 
			if($('.select-group').has(e.target).length === 0) {
				$('.select-group').find('.select-options').slideUp(200).prev('button').removeClass('on');
			}					
		}	
	});


	// Input type tel
	$("input[type=tel]").on("keyup", function() {
		$(this).val($(this).val().replace(/[^0-9]/g,""));
	});

	// Page inner link
	$(".privacy-cont .link-area a[href^='#']").on('click', function(event) {
		event.preventDefault();
		var target = $(this.hash);
		var header_height = $('#header').height();
		var offset_top = target.offset().top - header_height;
		$('html, body').animate({scrollTop: offset_top}, 500);
	});

	// 고객센터
	$('.accordion-table .q-area').on('click', 'button.ac-btn', function() {		
		function accordUp(target) {
			$(target).removeClass('on').closest('.q-area').next('.a-area').slideUp(200);
		}			
		function accordDown(target) {
			$('.accordion-table button.ac-btn').removeClass('on').closest('.q-area').next('.a-area').slideUp(200);
			$(target).addClass('on').closest('.q-area').next('.a-area').slideDown(200);
		}
		$(this).hasClass('on') ? accordUp(this) : accordDown(this);
	});


	// Sitemap list equalHeight
	var equalHeight = function(element){
		var maxHeight = 0;

		element.each(function(){
			if($(this).outerHeight() > maxHeight){
				maxHeight = $(this).outerHeight();
			}
		});
		return maxHeight;
	};

	var listHeight = $(".menu-list>li");
	listHeight.height(equalHeight(listHeight));
	
});


// input 인증번호 받기 
function onlyNumber(event){
	event = event || window.event;
	var keyID = (event.which) ? event.which : event.keyCode;
	if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
		return;
	else
		return false;
}
function removeChar(event) {
	event = event || window.event;
	var keyID = (event.which) ? event.which : event.keyCode;
	if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
		return;
	else
		event.target.value = event.target.value.replace(/[^0-9]/g, "");
}






	


