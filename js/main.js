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


	//전체 카테고리 X
	var count = 0;
	$(".category").click(function (e) {
		e.preventDefault();
		$(".cateWrap").stop().slideToggle(500);
		count++;
		if (count % 2 == 1) {
			$(".cateHam").addClass("active");
			$(".cateHam span").addClass("active");
		} else {
			$(".cateHam").removeClass("active");
			$(".cateHam span").removeClass("active");
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


	//visual banner auto control
	//선택되어서 보이는 배너가 몇번째 인지
	var sNum = 0;
	//cBtn 저장할 변수
	var cBtn = $(".bannerBtn>li");
	//배너 복사 붙여넣기
	var obj = $(".banner>li").clone();
	$(".banner").append(obj);

	//cBtn 클릭하여 배너 이동
	cBtn.on("click", function () {
		//선택된 버튼이 몇번째 인지 체크
		sNum = $(this).index();
		moveBanner();
	});

	//배너가 움직이는 함수
	function moveBanner() {
		$(".banner").stop().animate({
			"margin-left": -sNum * 100 + "%"
		}, 1000);
		//선택된 버튼 색상 바꾸기
		if (sNum == 2) {
			cBtn.eq(0).addClass("active").siblings().removeClass("active");
		}
		cBtn.eq(sNum).addClass("active").siblings().removeClass("active");
	}

	//right 버튼을 클릭하면 배너가 한개씩 왼쪽으로 이동
	$(".aBtnR").on("click", function (e) {
		e.preventDefault();
		if (sNum == 2) {
			sNum = 0;
			$(".banner").css("margin-left", 0);
		}
		sNum++;
		moveBanner();
	});

	//left 버튼을 클릭하면 배너가 한개씩 오른쪽으로 이동
	$(".aBtnL").on("click", function (e) {
		e.preventDefault();
		if (sNum == 0) {
			sNum = 2;
			$(".banner").css("margin-left", -sNum * 100 + "%");
		}
		sNum--;
		moveBanner();
	});

	//4초마다 배너가 왼쪽으로 한개씩 이동
	var time = setInterval(function () {
		$(".aBtnR").trigger("click")
	}, 4000);
	//#visual over
	$("#visual").mouseover(function () {
		clearInterval(time);
	});
	//#visual out
	$("#visual").mouseout(function () {
		time = setInterval(function () {
			$(".aBtnR").trigger("click");
		}, 4000);
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


	//BEST pick 탭 메뉴
	$(".best>li").click(function (e) {
		e.preventDefault();
		var sNum = $(this).index();
		$(".bestWrap>div").eq(sNum).stop().fadeIn(500).siblings().stop().fadeOut(500);
		$(this).addClass("active").siblings().removeClass("active");
	});


	//BEST pick 왼쪽 오른쪽 이동
	//변수 만들기
	var bNum = 0;
	var bNum1 = 0;
	var bNum2 = 0;
	var bNum3 = 0;
	var bNum4 = 0;
	var bNum5 = 0;
	var bNum6 = 0;

	//cBtn 변수 저장
	var cBtn2 = $(".cBtn>li");

	//bestWrap>div>ul:first-child 저장
	var bestWrap = $(".bestWrap>div>ul:eq(0)");
	//console.log(bestWrap);

	//복사할 선택자
	var bestWrap2 = $(".bestWrap>div>ul:first-child");
	//console.log(bestWrap2);

	//복사 붙여넣기
	//var bestCopy1 = bestWrap2.eq(0);
	//console.log(bestCopy1)
	var bestCopy1 = bestWrap2.eq(0).children("li").clone();
	bestWrap2.eq(0).append(bestCopy1);
	var bestCopy2 = bestWrap2.eq(1).children("li").clone();
	bestWrap2.eq(1).append(bestCopy2);
	var bestCopy3 = bestWrap2.eq(2).children("li").clone();
	bestWrap2.eq(2).append(bestCopy3);
	var bestCopy6 = bestWrap2.eq(5).children("li").clone();
	bestWrap2.eq(5).append(bestCopy6);


	//li의 너비 저장하기? .bestWrap>div ul:first-child>li
	var best = bestWrap.children("li").outerWidth();
	//console.log(best);

	//li의 margin
	var bestMarginL = bestWrap.children("li").css("margin-left");
	var bM = parseFloat(bestMarginL);
	//console.log(bM);
	var best1 = best + bM * 2;
	//console.log(best1);

	//움직이는 함수
	function bestMove() {
		$(bestWrap).stop().animate({
			"margin-left": -bNum * best1 * 3 + "px"
		}, 1000);
		if (bNum == 2) {
			cBtn2.children().eq(0).addClass("active").siblings().removeClass("active");
		}
		cBtn2.children().eq(bNum).addClass("active").siblings().removeClass("active");
	}


	//오른쪽 버튼 클릭하면 상품이 왼쪽으로 이동
	$(".rightBtn").on("click", function (e) {
		e.preventDefault();
		bestWrap = $(this).parent().prev();
		cBtn2 = $(this).parent().next();
		var bRank = bestWrap.attr("class").charAt(4);
		//console.log(cBtn2.attr("class"), bRank)
		switch (bRank) {
			case "1":
				if (bNum1 == 2) {
					bNum1 = 0;
					bestWrap.css("margin-left", 0);
				}
				bNum = ++bNum1;
				break;
			case "2":
				if (bNum2 == 2) {
					bNum2 = 0;
					bestWrap.css("margin-left", 0);
				}
				bNum = ++bNum2;
				break;
			case "3":
				if (bNum3 == 2) {
					bNum3 = 0;
					bestWrap.css("margin-left", 0);
				}
				bNum = ++bNum3;
				break;
			case "6":
				if (bNum6 == 2) {
					bNum6 = 0;
					bestWrap.css("margin-left", 0);
				}
				bNum = ++bNum6;
				break;
		}
		bestMove();
	});

	//왼쪽 버튼 클릭하면 상품이 오른쪽으로 이동
	$(".leftBtn").on("click", function (e) {
		e.preventDefault();
		bestWrap = $(this).parent().prev();
		cBtn2 = $(this).parent().next();
		var bRank = bestWrap.attr("class").charAt(4);
		switch (bRank) {
			case "1":
				if (bNum1 == 0) {
					bNum1 = 2;
					bestWrap.css("margin-left", -bNum1 * best1 * 3 + "px");
				}
				bNum = --bNum1;
				break;
			case "2":
				if (bNum2 == 0) {
					bNum2 = 2;
					bestWrap.css("margin-left", -bNum2 * best1 * 3 + "px");
				}
				bNum = --bNum2;
				break;
			case "3":
				if (bNum3 == 0) {
					bNum3 = 2;
					bestWrap.css("margin-left", -bNum3 * best1 * 3 + "px");
				}
				bNum = --bNum3;
				break;
			case "6":
				if (bNum6 == 0) {
					bNum6 = 2;
					bestWrap.css("margin-left", -bNum6 * best1 * 3 + "px");
				}
				bNum = --bNum6;
				break;
		}
		bestMove();
	});


	//cBtn2
	cBtn2.on("click", function (e) {
		e.preventDefault();
		bestWrap = $(this).parent().prevUntil().eq(1);
		//console.log(bestWrap);
		cBtn2 = $(this).parent();
		var bRank = bestWrap.attr("class").charAt(4);
		//console.log(bRank)
		switch (bRank) {
			case "1":
				bNum1 = $(this).index();
				bNum = bNum1;
				break;
			case "2":
				bNum2 = $(this).index();
				bNum = bNum2;
				break;
			case "3":
				bNum3 = $(this).index();
				bNum = bNum3;
				break;
			case "6":
				bNum6 = $(this).index();
				bNum = bNum6;
				break;
		}
		bestMove();
	});


	//TOP
	var qTop = $(".top").offset().top;
	$(window).scroll(function () {
		var sTop = $(this).scrollTop();
		$(".top").stop().animate({
			"top": qTop + sTop + "px"
		}, 300);
	});
});
