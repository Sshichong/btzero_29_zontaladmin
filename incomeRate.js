var incomeRate={
	free:3500,
	levels:[
	{low:0,high:1500,rate:0.03,sub:0},
	{low:1500,high:4500,rate:0.1,sub:105},
	{low:4500,high:9000,rate:0.2,sub:555},
	{low:9000,high:35000,rate:0.25,sub:1005},
	{low:35000,high:55000,rate:0.3,sub:2755},
	{low:55000,high:80000,rate:0.35,sub:5505},
	{low:80000,high:Number.MAX_VALUE,rate:0.45,sub:13505},
	],
	
	//计算月所得税
	calcMonthTax:function(monthIncome){
		left=monthIncome -this.free;
		var tax = 0;
		for(index in this.levels){
			if(left>this.levels[index].low&&left<=this.levels[index].high){
				tax= left*this.levels[index].rate-this.levels[index].sub;
			}
		}
		return tax;
	},
	
	//计算年终奖所得税
	calcYearTax:function(monthIncome){
		yearincome=monthIncome*3;
		var tax=0;
		if(monthIncome<3500){
			left=yearincome-(3500-monthIncome);
			left=left/12;
			for(index in this.levels){
				if(left>this.levels[index].low && left<=this.levels[index].high){
					tax= left*this.levels[index].rate-this.levels[index].sub;
				}
			}
		}
		else{
			left=yearincome/12;
			for(index in this.levels){
				if(left>this.levels[index].low && left<=this.levels[index].high){
					tax= left*this.levels[index].rate-this.levels[index].sub;
				}
			}
		}
		return tax;
	},


};

var printSDS=function(monthIncome){
	var sum=incomeRate.calcMonthTax(monthIncome)*12+incomeRate.calcYearTax(monthIncome);

	document.write("月工资"+monthIncome+"元，每月所得税为"+incomeRate.calcMonthTax(monthIncome)+"元；年终奖"+monthIncome*3+"元，一次性所得税为"+incomeRate.calcYearTax(monthIncome)+"元；全年所得税共计"+sum+"元");
}


