
const age=(birth_year,given_year=2026)=>(given_year-birth_year);

console.log(age(1997));

(function circle()
{
	radius = 4;
	c= 2 * Math.PI * radius;
	console.log("The circumference is " + c);
	a = 3.14 * radius * radius;
	console.log("The area is " + a);
})();

function tempConvert(celsius,farh1) {
	farh = 9 * celsius / 5 + 32;
	console.log(celsius+"C is " + farh + "F");

	celsius = (farh1 - 32) * 5 / 9;
	console.log(farh1+"F is " + celsius + "C");
}

tempConvert(34, 109);


(function calculator(num)
{
	half = num / 2;
	square = half * half;
	area = Math.PI * square;
	console.log("The area is " + area);
})(2);


(function mixUp(a,b)
{
	str1 = a.slice(0, 2);
	str2 = b.slice(b.length - 1, b.length + 1);
	
	str3 = a.slice(a.length - 1, a.length + 1);
	str4 = b.slice(0,2);
	
	console.log(str1+str2);
	console.log(str4+str3);
})('mix','pod');

(function percentage(per)
{
	if(100>per||per>=80)
		console.log('Distinction');
	else if(80>per||per>=60)
		console.log('First Division');
	else if(60>per||per>=40)
		console.log('Second Division');
	else if(40>per||per>=32)
		console.log('Third Division');
	else
		console.log('Fail');

})(75);

(function pluralizer(noun,num)
{
	var upperCase=noun.toUpperCase();
	console.log(num + upperCase);
})('cat',5);


(function leapYear(year)
{
	var step1=year%4;
	var step2=year%100;
	var step3=year%400;

	if(step1%2==0)
	{
		if(step2%2==0)
		{
			if(step3%2==0)
			{
				console.log('The year is a Leap Year (It has 366 days).');
			}
			else console.log('The year is not a Leap Year (It has 365 days).');
		}
		else  console.log('The year is a Leap Year (It has 366 days).');
	}
	else console.log('The year is not a Leap Year (It has 365 days).');

})(2019);

(function length(word)
{
	var count =1;
	var w=word;
	while(word!=w[w.length-1])
	{
		word=word.slice(1,word.length+1);
		count=count+1
	}
	console.log(count);
})('High school musical 2 ');


(function perfectNumber(num)
{
	var i=2;
	var div=0;
	var numb=num;
	while(num!=1)
	{
		if((num%i)==0)
		{
			div=div+i;
			num=num/i;	
			if(i>num)
			{
				div=div+num;
				if(div==numb)
				{
					console.log('Perfect Number');
				}
				else console.log('not a Perfect Number');
			}
		}
		i=i+1;
	}
})(6);

function factorial (n) {
		
  		if (n == 0 || n == 1){
    		return 1;
  		}
  		else if(n>1){
  			return n = factorial(n-1) * n;
  		}
	} 

	(function strongNumber(num)
	{
		var n=num;
		var check=num;
		var r=0;
		while(check!=0)
		{
			n=check%10;
			r=r+parseInt(factorial(n));
			check=parseInt(check/10);			
		}
		if(r==num)
		{
			console.log(r + " is a Strong Number.");				
		}

	})(145);

	function happyNumber(num)
	{
		var sum = 0, itr = 0, temp = num;
    	while(itr != 50 ){
        	sum = 0;
        	while(temp != 0){
            	sum += (temp%10)**2;
            	temp = (temp-(temp%10))/10;
        	}
        	if(sum == 1){
            	return 1;
        	}
        	temp = sum;
        	itr++;
        	return 0;
		}	
	}	
	
(function run()
{
	if(happyNumber(19)==1)
	{
		console.log('not a Happy Number');
	}
})();
	


