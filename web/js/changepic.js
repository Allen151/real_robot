var eg = {}
eg.$ = function(element){
	return document.getElementById(element);
}
var num = 1 ;
eg.chang = function(){
	if(num < 38){
		num ++ ;
	}else{
		num = 1 ;
	}
	var img = eg.$("img");
	img.src = "image/he-"+num+".jpg" ;//改变属性
}


window.onload = function(){
	var up = eg.$("up");
	var down = eg.$("down");
	up.addEventListener("click",function(){
		if(num > 2){//实现下张图片
			num -= 2 ;
		}else{
			num = 6;
		}
		eg.chang();
	},false);
	down.addEventListener("click",function(){
		eg.chang();
	},false);
	//自动轮换
	window.setInterval("eg.chang()",2000);
}
