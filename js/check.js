window.onload=function(){
	txt = "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
	txt+= "<p>Browser Name: " + navigator.appName + "</p>";
	txt+= "<p>Browser Version: " + navigator.appVersion + "</p>";
	txt+= "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
	txt+= "<p>Platform: " + navigator.platform + "</p>";
	txt+= "<p class='platform'>User-agent header: " + navigator.userAgent + "</p>";
	txt+= "<p>User-agent language: " + navigator.systemLanguage + "</p>";
	
	document.getElementById("example").innerHTML=txt;
	var isUcb=navigator.appVersion+'';
	if(isUcb.indexOf('UCBrowser')>-1) {
		document.body.style.backgroundColor='#000000';
		document.body.style.color='#FFFFFF';
	}
	function setColor(){
		var array=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
		var lanH1=document.getElementsByClassName('platform')[0];
		lanH1.style.color='#'+
		array[parseInt(Math.random()*16)]+
		array[parseInt(Math.random()*16)]+
		array[parseInt(Math.random()*16)]+
		array[parseInt(Math.random()*16)]+
		array[parseInt(Math.random()*16)]+
		array[parseInt(Math.random()*16)];
	}
	setColor();
	clearInterval();
	setInterval(function(){
		setColor();
	},10000);
}