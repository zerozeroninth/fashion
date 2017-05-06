/* created by ZY on 16/5/15...*/


//针对ie同时用jquery设置png透明度与定时换图片bug

// window.onload=function () {
// 	setInterval(function () {
// 		var img=document.getElementById('header').getElementsByTagName('aside')[0].getElementsByTagName('img');	
// 		var random=parseInt(Math.random()*10)%3;
// 		// alert(random);
// 		for(var i=0; i !=img.length; ++i)
// 		{
// 			var newPath="banner/banner"+(i+1)+"/"+(random+1)+".png";
// 			if (img[i].src != newPath) {
// 				img[i].src=newPath;
// 			};
// 		}
// 	},5000);	
// }