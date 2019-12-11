$(function () {
	//moblie 전체카테고리
	$(".mHam").click(function () {
		$(".mCategoryW").stop().animate({
			"left": 0
		}, 1000);
	});
	$(".closeBtn").click(function () {
		$(".mCategoryW").stop().animate({
			"left": "-100%"
		}, 1000);
	});
	$(".mCateWrap h2").click(function () {
		$(this).siblings(".sub").stop().slideToggle(500);
		$(this).parent("li").siblings().children(".sub").stop().slideUp(1000);

		$(this).toggleClass("active");
		$(this).parent("li").siblings().children("h2").removeClass("active");
	});

	//전체 카테고리
	var count = 0;
	$(".category").click(function () {
		$(".cateWrap").stop().slideToggle(500);
		count++;
		if (count % 2 == 1) {
			$(".cateHam").addClass("active");
			$(".cateHam .ham1").addClass("active");
			$(".cateHam .ham2").addClass("active");
			$(".cateHam .ham3").addClass("active");
		} else {
			$(".cateHam").removeClass("active");
			$(".cateHam .ham1").removeClass("active");
			$(".cateHam .ham2").removeClass("active");
			$(".cateHam .ham3").removeClass("active");
		}
	});

	//메뉴 hover
	$("#nav").mouseenter(function () {
		$("#nav>li").children(".sub").stop().slideDown(300);
		$(".subBg").stop().slideDown(300);
	});
	$("#nav").mouseleave(function () {
		$("#nav>li").children(".sub").stop().slideUp(500);
		$(".subBg").stop().slideUp(500);
	});

	//실시간 검색어 animate
	var cur = 0;
	var timeAni = $(".realTimeAni>li");

	setInterval(function () {
		timeAni.eq(cur).animate({
			"top": "-20px"
		}, 1000);
		cur++;
		if (cur == 10) {
			cur = 0;
		}
		timeAni.eq(cur).css("top", "20px");
		timeAni.eq(cur).animate({
			"top": 0
		}, 1000);
	}, 3000);

	//TOP
	var qTop = $(".top").offset().top;
	$(window).scroll(function () {
		var sTop = $(this).scrollTop();
		$(".top").stop().animate({
			"top": qTop + sTop + "px"
		}, 300);
	});
});
