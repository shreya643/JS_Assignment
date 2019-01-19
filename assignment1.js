
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
					console.log('perfect number');
				}
				else console.log('not a perfect number');
			}
		}
		i=i+1;
	}
})(6);


	// (function strongNumber()
	// {
		

	// })();