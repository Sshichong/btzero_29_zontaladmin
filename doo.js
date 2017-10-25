var holes = [
  [{x:"130px", y:"170px"}, {x:"322px", y:"170px"}, {x:"516px", y:"170px"}],
  [{x:"106px", y:"262px"}, {x:"322px", y:"262px"}, {x:"522px", y:"262px"}],
  [{x:"97px", y:"362px"}, {x:"322px", y:"362px"}, {x:"544px", y:"362px"}],
];
var playing=false ;  //判断游戏是否开始
var score =0;      //得分
var time =30 ;    //总时间
timeoutid=null;
intervalid=null;
intervalid1=null;

//开始游戏
function gameStart(){
	playing=true;
	intervalid = setInterval("showmouse()",2000);
	intervalid1 = setInterval("showmouse()",3000);
	document.getElementById("score").value=score;
	timeshow();
}

//显示老鼠
function showmouse(){
	if(playing==true){
		var m = document.getElementById("main");
		var i=Math.floor(Math.random()*100);
		m.innerHTML='<span id="mouse'+i+'" class="mouse normal"></span>';
		var mouse =document.getElementById("mouse"+i);
		mouse.onmouseover = mouseOver;
        mouse.onmouseout = mouseOut;
    	mouse.onclick = mouseHit;
    	var a=Math.floor(Math.random()*2);
    	var b=Math.floor(Math.random()*2);
    	mouse.style.left = holes[a][b].x;
    	mouse.style.top = holes[a][b].y;
	}
}

//倒计时
function timeshow(){

	document.getElementById("time").value=time;
	if(time==0){
		gameOver();
	}else{
		time=time-1;
		timeoutid=setTimeout("timeshow()",1000);
}
}

//游戏结束
function gameOver(){
	if(time==0){
		playing=false;
		score=0;
		time=30;
		alert("游戏结束！你的得分是"+score);
		timestop();
		clearmouse();
		
	}
}

//停止时间
function timestop(){
	clearInterval(intervalid);
	clearInterval(intervalid1);
	clearTimeout(timeoutid);
}

//清除老鼠
function clearmouse(){
	var el = document.getElementsByTagName("span");
	el.parentNode.removeChild(el);
}

function mouseOver(){
  if(!this.hitted){
    this.className = "mouse over";
  }
}

function mouseOut(){
  if(!this.hitted){
    this.className = "mouse normal";
  }
}

function mouseHit(){
  this.className = "mouse hit";
  this.hitted = true; //flag
  var count = document.getElementById("count");
  var x = parseInt(this.style.left);
  count.style.left = (x+36) + "px";
  count.style.top = this.style.top;
  count.style.display = "block";
  score++;
  document.getElementById("score").value=score;
}
