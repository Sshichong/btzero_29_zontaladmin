$(function(){
	var diaohuangeshu=0;
  		var dingwei = 1;
  		var time_in;
  		var result = "";
  		var time1;
  		var time2;
  		
  		var flag = false;
  		
  		
  		
  		function chanegPic(a,b){
  			
  			var one = $("#p"+a)[0].src;
  			var two = $("#p"+b)[0].src;
  			
  			$("#p"+a).attr("src",two);
  			$("#p"+b).attr("src",one);
  		}
  		
  		
  		
  		
  		
  		
  		//调换按钮设置
  		$("#exchange").on("click",function(){
  			
  			  			
  			if(!flag){
  				return;
  			}
  			
  			
  			
  			diaohuangeshu++;
  			var id_1 = $("#p1");
  			var id_2 = $("#p2");
  			var id_3 = $("#p3");
  			var id_4 = $("#p4");
  			
  			
  			
  			
  			var aa = dingwei;
  			
  			do{
  				dingwei = ((1+(Math.random()*3)).toFixed(0).toString()).substring(0,1);
  			}while(aa==dingwei);
  			console.log(dingwei);
  			console.log($("#p"+dingwei)[0].src);
  			
  			do{
  				var a = ((1+(Math.random()*3)).toFixed(0).toString()).substring(0,1);
  				var b = ((1+(Math.random()*3)).toFixed(0).toString()).substring(0,1);
  			}while(a==b);
  			
  			
  			
  			
  			chanegPic(a,b);
  			
  			for(var i =1 ; i < 5 ; i++){
  				$("#wenhao"+i).css("display","none");
  				$("#fanmian"+i).css("display","block");
  			}
  			
  			$("#fanmian"+dingwei).css("display","none");
  			$("#wenhao"+dingwei).css("display","block");
  			
  			result+=(a+"<->"+b+" ");
  			
  			

  			$("#content").html("<p><strong>"+result+"</strong></p>");
  			
  			
  		});
  		
  		
  		
  		//重置按钮设置
  		$("#reset").on("click",function(){
			flag=false;
  			
  			for(var i =1 ; i < 5 ; i++){
  				$("#p"+i).css("display","block");
  				$("#fanmian"+i).css("display","none");
  				$("#wenhao"+i).css("display","none");
  			}
  			
  			
  			
  			
  			
  			
  			$("#content").html("");
  			result = result.replace(result,"");
  			
  			$("#tishi").css("display","none");
  			
  			window.clearInterval(time1);
  			window.clearInterval(time2);
  			$("#miao").text("00");
  			$("#xiaomiao").text("00");
  			
  			
  			dingwei = 1;
  			diaohuangeshu = 1;
  			var id_1;
  			var id_2;
  			var id_3;
  			var id_4;
			
			do{
				id_1 = ((3+Math.random()*3).toFixed(0).toString()).substring(0,1);
				id_2 = ((3+Math.random()*3).toFixed(0).toString()).substring(0,1);
				id_3 = ((3+Math.random()*3).toFixed(0).toString()).substring(0,1);
				id_4 = ((3+Math.random()*3).toFixed(0).toString()).substring(0,1);
				
			}while(id_1==id_2||id_1==id_3||id_1==id_4||id_2==id_3||id_2==id_4||id_3==id_4)
			
			
  			
  			$("#p1").attr("src","lab04_imgs/minions/00"+id_1+".png");
  			$("#p2").attr("src","lab04_imgs/minions/00"+id_2+".png");
  			$("#p3").attr("src","lab04_imgs/minions/00"+id_3+".png");
  			$("#p4").attr("src","lab04_imgs/minions/00"+id_4+".png");
  			
  			$("#hx1").attr("src","lab04_imgs/minions/00"+id_1+".png");
  			$("#hx2").attr("src","lab04_imgs/minions/00"+id_2+".png");
  			$("#hx3").attr("src","lab04_imgs/minions/00"+id_3+".png");
  			$("#hx4").attr("src","lab04_imgs/minions/00"+id_4+".png");
  			
  			$("#content").clear;
  			
  		});
  		
  		
  		//计时按钮
  		$("#start").click(function(){
  			var ms = 0;
  			var s = 0;
  			
  			flag=true;
  			
  			for(var i =1 ; i < 5 ; i++){
  				$("#p"+i).css("display","none");
  				$("#fanmian"+i).css("display","block");
  			}
  			
  			time1 = window.setInterval(function(){
	  			ms++;
	  			if(ms>99){
	  				ms=0;
	  			}
	  			if(ms<10){
	  				ms = "0"+ms;
	  			}
	  			
	  			$("#xiaomiao").text(ms);
	  				
	  			},10);
  		
  		
  			time2 = window.setInterval(function(){
	  				s++;
	  			if(s>5){
			  	    window.clearInterval(time1);
		  			window.clearInterval(time2);
		  			$("#tishi").css("display","block");
	  			}
	  			if(s<10){
	  				s = "0"+s;
	  			}
	  			
	  			$("#miao").text(s);
	  				
	  			},1000);
  			
  			
  			
  		});
  		
  		function change(time){
  			time++;
  			if(time<10){
  				time = "0"+time;
  			}
  			$("#xiaomiao").text(time);
  		}
  		
  		
  		
  		
  		
  		
  		
  		
  		
  		//每个照片的行为
  		
  		
  		//1111111111111111111111111111
  		$("#hx1").click(function(){
  			
  			console.log($("#p"+dingwei).css("display"));
  			
  			if($("#p"+dingwei)[0].src==$("#hx1")[0].src){
  				
			
			
			  	$("#p"+dingwei).css("display","block");
  				$("#fanmian"+dingwei).css("display","none");
  				$("#wenhao"+dingwei).css("display","none");
  				

			
			do{
  				dingwei = ((1+(Math.random()*3)).toFixed(0).toString()).substring(0,1);
  				
  				console.log(dingwei);
  				
  			}while($("#p"+dingwei).css("display")!="none")

  				
  				
  				$("#fanmian"+dingwei).css("display","none");
  				$("#wenhao"+dingwei).css("display","block");
  				
  				
  				
					
  				}
  			
  			
  		});
  		
  		//2222222222222222222222222222222222
   		$("#hx2").click(function(){
   			console.log($("#p"+dingwei).css("display"));
  			if($("#p"+dingwei)[0].src==$("#hx2")[0].src){
  				
  		  	$("#p"+dingwei).css("display","block");
  				$("#fanmian"+dingwei).css("display","none");
  				$("#wenhao"+dingwei).css("display","none");
  				
 
  				
			do{
  				dingwei = ((1+(Math.random()*3)).toFixed(0).toString()).substring(0,1);
  				
  				console.log(dingwei);
  				
  			}while($("#p"+dingwei).css("display")!="none")
 
 
 
  				$("#fanmian"+dingwei).css("display","none");
  				$("#wenhao"+dingwei).css("display","block");
  				
  				
  				
  				
  				
  			}
  			
  		});
  		
  		
  		//333333333333333333333333333333
  		 $("#hx3").click(function(){
  			
  			
  			console.log($("#p"+dingwei).css("display"));
  			if($("#p"+dingwei)[0].src==$("#hx3")[0].src){
  					  	$("#p"+dingwei).css("display","block");
  				$("#fanmian"+dingwei).css("display","none");
  				$("#wenhao"+dingwei).css("display","none");
  			
  
  				do{
  				dingwei = ((1+(Math.random()*3)).toFixed(0).toString()).substring(0,1);
  				
  				console.log(dingwei);
  				
  			}while($("#p"+dingwei).css("display")!="none")
  			
  			

  				$("#fanmian"+dingwei).css("display","none");
  				$("#wenhao"+dingwei).css("display","block");
  				

  			}
  			
  		});
  		
  		
  		
  		//444444444444444444444444444444
  		$("#hx4").click(function(){
  			
  			
  			console.log($("#p"+dingwei).css("display"));
  			
  			
  			if($("#p"+dingwei)[0].src==$("#hx4")[0].src){
	  	$("#p"+dingwei).css("display","block");
  				$("#fanmian"+dingwei).css("display","none");
  				$("#wenhao"+dingwei).css("display","none");

  				
 
  			do{
  				dingwei = ((1+(Math.random()*3)).toFixed(0).toString()).substring(0,1);
  				
  				console.log(dingwei);
  				
  			}while($("#p"+dingwei).css("display")!="none")

  				$("#fanmian"+dingwei).css("display","none");
  				$("#wenhao"+dingwei).css("display","block");
  				console.log(dingwei);

  			}
  		});
});