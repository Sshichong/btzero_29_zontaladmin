
	function judge(){
		var x=document.getElementById("text").value;
		var count=0;
		if(x==""||isNaN(x)==true){
			alert("请正确输入数字！");
		}else{
		for(var i=1;i<=x;i++){
			if(x%i==0){
				count++;
			}
		}
		if(count==1){
			alert("既不是素数也不是合数！");
		}else if(count==2){
			alert("该数为素数！");
		}else{
			alert("该数为合数！");
		}
		}
	}
	
	function ssbiao(){
		document.write("<table border='1' align='center' width='500px' height='500px'>");
		document.write("<tr>");
		for(var i=1;i<=100;i++){
			var c =0;
			for(var x=1;x<=i;x++){
				if(i%x==0){
					c++;
				}
			}
			if(c==2){
				document.write("<td bgcolor='yellow' align='center' >"+i+"</td>");
			}else{
				document.write("<td align='center'>"+i+"</td>");
			}
			if(i%10==0){
				document.write("</tr>");
			}
		}
		
		}
	

