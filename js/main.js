/* created by ZY on 16/5/15...*/


// 主导航跳转
	$(document).ready(function () {

		$('.main-nav a:eq(0)').click(function () {
			location.href="index.html";
		})
		$('.main-nav a:eq(5)').click(function () {
			location.href="event.html";
		})
		$('.main-nav a:eq(6)').click(function () {
			location.href="sale.html";
		})
		$('.main-nav a:eq(7)').click(function () {
			location.href="member.html";
		})
		$('.main-nav a:lt(5):gt(0)').each(function (i) {
			$(this).click(function () {
				location.href="shoes-bag.html";
			})
		})

//  所有产品跳转

		$('.content li a').click(function () {
			location.href="buy.html";
		})
	})

	$('img').error(function () {
		$(this).replaceWith('<p>图片未能显示, 大概哪儿"水管"破了! </p>');
	})

	


