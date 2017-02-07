
//AUDIO
var effectVolume = 0.4;
var musicVolume = 0;

var sounds = [];



//var checkpointAudLoaded = false;
//var checkpointAud = (new Audio("audio/checkpoint.mp3") || new Audio("audio/checkpoint.ogg"));
var checkpointAud=[];
var maxCpAud = 1;
/*checkpointAud.onload = function() {
	checkpointAudLoaded = true;
};*/
for (i=0;i<1;i++){
	checkpointAud.push(new Audio("audio/checkpoint2.mp3") || new Audio("audio/checkpoint2.ogg"));

}


var jumpAudLoaded = false;
var jumpAud=[];
jumpAud.onload = function() {
	jumpAudLoaded = true;
};
for (i=0;i<3;i++){
		jumpAud.push(new Audio("audio/jump1.mp3") || new Audio("audio/jump1.ogg"));
		jumpAud[i].volume=effectVolume;
	}


var bossStepAudLoaded = false;
var bossStepAud=[];
for (i=0;i<2;i++){
		bossStepAud.push(new Audio("audio/bossStep.mp3") || new Audio("audio/bossStep.ogg"));
		bossStepAud[i].volume=effectVolume;
	}

var weapon1AudLoaded = false;
//var weapon1Aud = new Audio();
var weapon1Aud=[];
//weapon1Aud.src = "audio/brutaali.mp3"; 
//weapon1Aud.onloadeddata = alert("loaded");
/*weapon1Aud.oncanplay = function() {
	weapon1AudLoaded = true;
	alert("loaded");
};
*/

for (i=0;i<11;i++){
		weapon1Aud.push(new Audio("audio/weapon1.mp3") || new Audio("audio/weapon1.ogg"));
		weapon1Aud[i].volume=effectVolume/2;
}

/*weaponNewAudio = function(){
	new Audio("audio/weapon1.mp3") || new Audio("audio/weapon1.ogg")
}*/

var musicAudLoaded = false;
var musicAud=[];
musicAud.onload = function() {
	musicAudLoaded = true;
};
for (i=0;i<1;i++){
		musicAud.push(new Audio("audio/biisi.mp3") || new Audio("audio/musatesti1.ogg"));
		musicAud[i].volume = musicVolume;
}
musicAud[0].loop = true;

musicAud[0].play();