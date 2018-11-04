var no;
//var no=document.getElementsByName("text")[0].value;
//console.log("ers")
//console.log(no);
var myAudio =document.getElementById("audio");
var quack=document.getElementById("button");
quack.addEventListener('click', vari);
quack.addEventListener('click', duck);


function vari(){
no=document.getElementsByName("text")[0].value;
}


	


function duck(){

//let no=5;
//document.getElementsByName("text")[0].value;
if(no>=1){
	myAudio.play();
}
else{
	alert("tumse na ho paayega :)")
}
} 


myAudio.addEventListener('ended', function() {
            no = no-1;
            if (no > 0) {
                this.currentTime = 0;
                this.play();}
}, false);
