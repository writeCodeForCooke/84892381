window.onload = function(){
	var oBtn1 = document.getElementById('btn1');
	var oBtn2 = document.getElementById('btn2');
	var oUl = document.querySelector(".video_list");
    var oLi = oUl.getElementsByTagName('li');
	//获取随机数
	function rands(n){
        var rands = Math.floor(Math.random()*n);
        return rands
        
    }
    //去重
    function checkArrIn(rand,array){
	    if(array.indexOf(rand) > -1){
	        return true
	    }
	    return false;
	}
	function fn(n,value) {
	    var arr = [];
	    var isNum = !isNaN(Number(n));//判断n是不是一个数字，包含字符串类型的数字
	    // var isRandOk = (n >= min && n <= max && n <= (max - min)) ? true : false;//判断n的取值是否符合要求
	    if (n) {
	        for (var i = 0; i < n; i++) {
	            var rand = rands(value);
	            if (checkArrIn(rand, arr)) {
	                i--
	            } else {
	                arr.push(rand)
	            }
	        }
	    }
	    return arr;
	}

	//获取随机的格子标签
	function randdiv(){
		var ran = fn(3,9)
		var arry = [];
		for (var i = 0; i < 3; i++){	
			arry.push(oLi[ran[i]].getElementsByTagName('div')[0])
		}
		return arry;
        
    }
    //获取随机颜色值：
    var timer
	oBtn1.onclick = function(){
        // console.log(randdiv())
        clearInterval(timer);
        timer = setInterval(function(){
        	// 随机格子
	        var box = randdiv();
	        //随机颜色值
	        // var color = fn(3,255);
	        // console.log(box)
	        for (var i = 0; i < oLi.length; i++) {
	        	oLi[i].getElementsByTagName('div')[0].style.background = "#fdb274";
	        }
	        // console.log(color)
			for (var i = 0; i < 3; i++) {
				var color = fn(3,255);
			  	box[i].style.background = "rgb("+color[0]+','+color[1]+','+color[2]+")";
			}  
        },800); 
        
	}

	oBtn2.onclick = function(){
		clearInterval(timer);
	}
}