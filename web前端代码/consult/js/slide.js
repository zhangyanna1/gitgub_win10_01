$(function(){
	var $li = $(".slide_pics li");
	var len = $li.length;//一共有几张图片
	var $prev = $('.prev');
	var $next = $('.next');
	var nextli = 0;//将要运动过来的li
	var nowli = 0;//当前要离开的li
	var timer = null;//定时器

	//除第一个li，都定位到右侧
	$li.not(':first').css({left:600});

	//动态创建小圆点
	$li.each(function(index){
		//创建li
		var $sli = $('<li></li>');
		//第一个li添加选中样式
		if(index == 0){
			$sli.addClass('active');
		}
		//将li添加到ul中
		$sli.appendTo('.points');
	})

	$points = $('.points li');
	// alert($points.length);

	$points.click(function() {
		nextli = $(this).index();//点击的小圆点的索引，就是马上要进来那张的索引
		//当点击当前张的小圆点时，不做任何操作
		if(nextli == nowli){
			return;
		}
		move();
		$(this).addClass('active').siblings().removeClass('active');
	});

	$prev.click(function() {
		nextli--;
		move();
		//改变圆点样式
		$points.eq(nextli).addClass('active').siblings().removeClass('active');
	});

	$next.click(function() {
		nextli++;
		move();
		//改变圆点样式
		$points.eq(nextli).addClass('active').siblings().removeClass('active');
	});

	//进入子元素也清除定时器
	$('.slide').mouseenter(function() {
		clearInterval(timer);
	});
	$('.slide').mouseleave(function() {
		timer = setInterval(autoplay, 3000);
	});

	//定时器循环自动播放
	timer = setInterval(autoplay, 3000);

	//自动播放的逻辑跟点击下一张是相同的
	function autoplay(){
		nextli++;
		move();
		//改变圆点样式
		$points.eq(nextli).addClass('active').siblings().removeClass('active');
	}

	function move(){
		//走到第一张，再继续走时
		if(nextli < 0){
			nextli = len - 1;//将要来的是最后一张
			nowli = 0;//要离开的是第一张
			$li.eq(nextli).css({left:-600});//把最后一张定位到左侧，准备进入
			$li.eq(nowli).stop().animate({left:600});//离开的第一张走到右侧
			$li.eq(nextli).stop().animate({left:0});//进入的最后一张走进来
			nowli = nextli;//要离开的赋值为刚进入的最后一张
			return;//下边代码是正常情况的，极端情况下不执行，直接返回
		}

		//走到最后一张，再继续走时
		if(nextli > len - 1){
			nextli = 0;//将要来的是第一张
			nowli = len - 1;//要离开的是最后一张
			$li.eq(nextli).css({left:600});//将要进来的第一张定位到右侧，准备进入
			$li.eq(nowli).stop().animate({left:-600});//离开的最后一张走到左侧
			$li.eq(nextli).stop().animate({left:0});//进入的第一张走进来
			nowli = nextli;//要离开的赋值为刚进入的第一张
			return;
		}

		if(nextli > nowli){//从右向左进入，例如第2张进入，第1张出去
			$li.eq(nextli).css({left:600});//把马上要进来的那张，瞬间放在右侧
			$li.eq(nowli).stop().animate({left:-600});//当前这张要离开，运动到左侧
		}else{
			$li.eq(nextli).css({left:-600});//把马上要进来的那张，瞬间放在左侧
			$li.eq(nowli).stop().animate({left:600});//当前这张要离开，运动到右侧
		}
		$li.eq(nextli).stop().animate({left:0});//马上进来的这张走到可视区（即0的位置）
		nowli = nextli;
	}
})