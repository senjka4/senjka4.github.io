var a, score = 0, time= 60, isimgonclick = false;

init();

function minustime(){
time = time - 1;
}
function init(){
	
	a = rand(1, 2047);
	document.getElementById("number").innerHTML =  a;
	
	var els = document.querySelectorAll(".trigger");
	for(i=0;i<els.length;i++){
		els[i].src = "../images/off.png";
	}
	document.getElementById("now").innerHTML = 0;
}
function imgClick(el, ev){
	isimgonclick = true;
	if(el.src.indexOf("on") < 0){
		el.src = "../images/on.png";
	}else{
		el.src = "../images/off.png";
	}
	
	var els = document.querySelectorAll(".trigger");
	var s = "";
	for(i=0;i<els.length;i++){
		s += (els[i].src.indexOf("off") < 0) - 0;
	}
	s = parseInt(s, 2);
	
	document.getElementById("now").innerHTML = s;
	if(s == a){
		setTimeout(function(){
			score++;
			alert("Твій рахунок " + score);
			init();
		}, 100);		
	}
}
if(!isimgonclick){
	setTimeout(minustime(), 1000);
	document.getElementById("time").innerHTML = time;
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
	}