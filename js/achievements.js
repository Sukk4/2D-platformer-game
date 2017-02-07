// ACHIEVEMENTS



var achievement = {
	
	x:canvas.width/2-150,
	y:canvas.height-120,
	w:350,
	h:70,
	ttl:0          // Time to live

}

// achiCheckpoint TRIGGER IN MAP1.js checkpoint function
var achiCheckpoint = {
	earned : false,
	txt : "FIRST CHECKPOINT!",
	comment : "You shouldn't need this"
}
var firstEnemyKillAchi = {
	earned : false,
	txt : "FIRST BLOOD!!",
	comment: "You killed your first enemy"
}

function achiEarned(achiName){
	achiName.earned = true;
	achievement.ttl = 4000;
	latestAchi = eval(achiName);
}

var latestAchi;
function achiRender(){ // selAchi = selected achievement
	
	if (achievement.ttl>0){
		//achievement.ttl = achievement.ttl-;
	}
	ctx.save();
	ctx.beginPath();
	ctx.rect(achievement.x,achievement.y,achievement.w,achievement.h);
	ctx.fillStyle="#af1";
	ctx.globalAlpha = 0.5;
	ctx.fill();
	ctx.closePath();
	ctx.restore();
	ctx.fillStyle = "#000";
	ctx.fillText(latestAchi.txt, achievement.x+10, achievement.y+achievement.h/2+20);
	ctx.fillText("ACHIEVEMENT", achievement.x+10, achievement.y+achievement.h/2-10);


	/*
	if (achiCheckpoint.earned){
		ctx.beginPath();
		ctx.rect(achievement.x,achievement.y,achievement.w,achievement.h);
		ctx.fillStyle="#af1";
		ctx.fill();
		ctx.closePath();
		ctx.fillStyle = "#000";
		ctx.fillText(achiCheckpoint.txt, achievement.x+10, achievement.y+achievement.h/2+15);
		ctx.fillText("ACHIEVEMENT", achievement.x+10, achievement.y+achievement.h/2+-15);
	}*/
}