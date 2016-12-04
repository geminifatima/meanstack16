var a ;
var d ;
var b = false;
var c = false;
var e;
var arr=["fatima","bisma","maria"];
var arr2=["fatima","bisma","maria"];


funtion forLoop(){
	for (var i in arr) {
	a=arr[i];
	if (document.getElementById('username').value==a){
		b=true;
		e=i;
		
	}
}

	if (document.getElementById('password').value== arr2[e] ){
		c=true;

	}


if (b==true && c==true) {



    document.getElementById('container').innerHTML = '<h2>' + "welcome" + '</h2>';


}
}

else {
	document.getElementById('container').innerHTML = '<h2>' + "sorry wrong username" + '</h2>';
}
}