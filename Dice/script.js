function roll()
{
	var d1= Math.floor(((Math.random() * 10)%6) + 1);
	var d2 = Math.floor(((Math.random() * 10)%6) + 1);
	document.getElementById('dice1').setAttribute('src','images/dice'+d1+'.png');
	document.getElementById('dice2').setAttribute('src','images/dice'+d2+'.png');

	if(d1<d2)
	{
		document.getElementById('result').innerHTML='B is the winner!';		
	}
	else if(d1>d2)
	{
		document.getElementById('result').innerHTML='A is the winner!';
	}
	else{
		document.getElementById('result').innerHTML='There is a draw!';

	}
}