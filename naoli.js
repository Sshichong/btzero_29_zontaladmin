 $(function () {
            $('#reset').click(function () {

            	for(var i=0;i<2;i++){
            		var num = Math.floor(Math.random() * 20 + 1);
            		console.log($(".tu"));  
            		$(".item1:nth(0)").attr('src','lab04_imgs/minions/'+num+'.png');
            		$(".item1:nth(1)").attr('src','lab04_imgs/minions/'+num+'.png');
            	}
            	for(var i=0;i<2;i++){
            		var num = Math.floor(Math.random() * 20 + 1);
            		console.log($(".tu"));  
            		$(".item2:nth(0)").attr('src','lab04_imgs/minions/'+num+'.png');
            		$(".item2:nth(1)").attr('src','lab04_imgs/minions/'+num+'.png');
            	}
            	for(var i=0;i<2;i++){
            		var num = Math.floor(Math.random() * 20 + 1);
            		console.log($(".tu"));  
            		$(".item3:nth(0)").attr('src','lab04_imgs/minions/'+num+'.png');
            		$(".item3:nth(1)").attr('src','lab04_imgs/minions/'+num+'.png');
            	}
            	for(var i=0;i<2;i++){
            		var num = Math.floor(Math.random() * 20 + 1);
            		console.log($(".tu"));  
            		$(".item4:nth(0)").attr('src','lab04_imgs/minions/'+num+'.png');
            		$(".item4:nth(1)").attr('src','lab04_imgs/minions/'+num+'.png');
            	}
            	
            	
                
                
            })
            
            
});