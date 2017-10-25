var holes = [
  [{x:"130px", y:"170px"}, {x:"322px", y:"170px"}, {x:"516px", y:"170px"}],
  [{x:"106px", y:"262px"}, {x:"322px", y:"262px"}, {x:"522px", y:"262px"}],
  [{x:"97px", y:"362px"}, {x:"322px", y:"362px"}, {x:"544px", y:"362px"}],
];
window.onload = function(){
	for(var i=0;i<9;i++){
		var m=document.getElementById("main");
		m.innerHTML+='<span id="mouse'+i+'" class="mouse normal"></span>';
	}
  var main = document.getElementById("main");
  var mouses = main.getElementsByTagName("span");
  for(var i=0;i<9;i++){
    mouses[i].onmouseover = mouseOver;
    mouses[i].onmouseout = mouseOut;
    mouses[i].onclick = mouseHit;
    mouses[i] = document.getElementById("mouse"+i);
    //console.log(mouses[i]);
    if(i==0){
    mouses[i].style.left = holes[0][0].x;
    mouses[i].style.top = holes[0][0].y;	
    }

          
    

  }

  //tmp

};

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
}


var playing=false ;  //判断游戏是否开始
var score =0;      //得分
var time =60 ;    //总时间
timeoutid=null;
intervalid=null;
//倒计时
function timeshow(){

	document.getElementById("time")=time;
	if(time==0){
		alert("游戏结束");
	}else{
		time=time-1;
		timeoutid=setTimeout("timeshow()",1000);
}
}

//开始游戏
function gameStart(){
	playing=true;
	intervalid = setInterval("showmouse()",2000);
	document.getElementById("score").value=score;
	timeshow();
}

//显示老鼠
function showmouse(){
	if(playing==true){
		var mouse = document.getElementsByTagName("span");
		mouse.onmouseover = mouseOver;
    mouse.onmouseout = mouseOut;
    mouse.onclick = mouseHit;
    var a=Math.floor(Math.random()*2);
    var b=Math.floor(Math.random()*2);
    mouse.style.left = holes[a][b].x;
    mouse.style.top = holes[a][b].y;
    setTimeout("mouse.style.display=none",2000);
	}
}
