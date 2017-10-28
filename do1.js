var holes = [
  [{x:"130px", y:"170px"}, {x:"322px", y:"170px"}, {x:"516px", y:"170px"}],
  [{x:"106px", y:"262px"}, {x:"322px", y:"262px"}, {x:"522px", y:"262px"}],
  [{x:"97px", y:"362px"}, {x:"322px", y:"362px"}, {x:"544px", y:"362px"}],
];

var score=0;
var playing=false;
var timeid=null;
var intervalid=null;
var time=30;

function gameStart(){
	playing=true;
	timeShow();
	addmouse();

          
    

  }

  //tmp

};

function addmouse(){
	document.getElementById("score").value=score;
	for(var i=0;i<9;i++){
		var m=document.getElementById("main");
		m.innerHTML+='<span id="mouse'+i+'" class="mouse normal"></span>';
	}
  var main = document.getElementById("main");
  var mouses = main.getElementsByTagName("span");
  for(var i=0;i<9;i++){
  	row=parseInt(i/3);
  	col=i%3;
    mouses[i].onmouseover = mouseOver;
    mouses[i].onmouseout = mouseOut;
    mouses[i].onclick = mouseHit;
    mouses[i].className="mouse hide"
    mouses[i].hide=true;
    mouses[i] = document.getElementById("mouse"+i);
    //console.log(mouses[i]);
    mouses[i].style.left = holes[row][col].x;
    mouses[i].style.top = holes[row][col].y;
    mouses[i].randomshow();
    mouses[i].nonemouse();
}
  }

//随机显示老鼠
function randomshow(){
	if(!this.hide){
		return;
	}else{
		this.className="mouse normal";
		this.hide=false;
	}
	
}

//隐藏老鼠
function nonemouse(){
	if(this.hitted||!this.hide){
		return ;
	}else{
		this.hide=false;
		this.className="mouse hide";
	}
}

//

  



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



//开始时间
function timeShow(){
	if(time==0){
		timeOver();
	}else{
		time--;
		timeid=setTimeout("timeStart()",1000);
		document.getElementById("time").value=time;
	}
}

//停止时间
function timeStop(){
	clearTimeout(timeid);
	clearInterval(intervalid);
}

//游戏停止
function gameOver(){
	playing=false;
	alert("游戏结束！ 你的得分是"+score);
	score=0;
	time=30;
}
