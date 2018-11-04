function play_quack(){

	var no=3;
	//document.getElementsByName("text")[0].value;
var i;
var play=document.getElementById("audio");
var testing=document.getElementById("test");

for( i=0;i<no;i++){
play.currentTime = 0; 
play.play();
//play.currentTime = 0;
testing.innerText+=i;

}

}
var quack=document.getElementById("button");
//quack.onclick=play_quack;

//quack.onclick=function(){ console.log(no);};

quack.addEventListener('click',play_quack);