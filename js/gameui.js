//var canvas = document.createElement("canvas");
var canvas = document.getElementById("canvas_id");
var ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

//document.body.appendChild(canvas);
//ctx.mozImageSmoothingEnabled = false;
/*
CanvasText.config({
    canvasId: "canvas",
    fontFamily: "Arial",
    fontSize: "14px",
    fontWeight: "normal",
    fontColor: "#000",
    lineHeight: "12"
});

CanvasText.defineClass("ui",{
    fontSize: "24px",
    fontColor: "pink",
    fontFamily: "Arial",
    fontWeight: "normal"
});
*/
var oldEffectVolume = 0;
var oldMusicVolume = 0;
var muteButton = function(){
    

    if (musicVolume==0 || effectVolume ==0){
        musicVolume += oldMusicVolume;
        effectVolume += oldEffectVolume;
    }
    else if (musicVolume>0 || effectVolume >0){
        musicVolume = 0;
        effectVolume = 0;
    }
   
    for (i=0;i<3;i++){
        jumpAud[i].volume=effectVolume;
    }

    for (i=0;i<2;i++){
        bossStepAud[i].volume=effectVolume;
    }

    for (i=0;i<11;i++){
        weapon1Aud[i].volume=effectVolume;
    }
    musicAud[0].volume = musicVolume;
}

var points = 0;
var levelTime = 0;
var gameTime = 0;

var levelCompleteBox = {
    
    x:canvas.width/2-200,
    y:canvas.height/2-150,
    w:400,
    h:300,
    show: false

}

var levelCompleteRender = function(){
    if (levelCompleteBox.show == true){
        ctx.save();
         ctx.globalAlpha = 0.9;
        ctx.drawImage(levelCompleteImg,levelCompleteBox.x,levelCompleteBox.y,levelCompleteBox.w,levelCompleteBox.h);
        ctx.fillStyle = "#fff";

        ctx.font = "bold 36px Arial";
        //ctx.fillText("Points "+Math.round(points*10*Math.pow(levelTime,-0.1),1), levelCompleteBox.x+40, levelCompleteBox.y+150);
        ctx.fillText("Points "+points, levelCompleteBox.x+40, levelCompleteBox.y+150);
        ctx.fillText("Time "+levelTime.toFixed(3)+"s", levelCompleteBox.x+40, levelCompleteBox.y+200);
        ctx.font = "bold 18px Arial";
        ctx.fillText('(Press "R" to continue)', levelCompleteBox.x+75, levelCompleteBox.y+250);
        ctx.restore();
        
    }
}

var uiRender = function(){

    scoreRender();
    playerHealthRender();
    levelCompleteRender();

	
}

var scoreRender = function(){
	ctx.fillStyle = "pink";
 	ctx.font = "bold 16px Arial";
	ctx.fillText("Points "+points, canvas.width-100, canvas.height-20);
   // ctx.fillText("time "+levelTime, canvas.width-100, canvas.height-80);
   // ctx.fillText("speed "+player.speed, 30, canvas.height-80);


    

	
}

var playerHealthRender = function(){
    ctx.beginPath();
    ctx.rect(10,canvas.height-40,200,25);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.rect(10,canvas.height-40,player.health*2,25);
    ctx.fillStyle = "green";
    ctx.fill();
    
    
	ctx.fillStyle = "white";
 	ctx.font = "bold 16px Arial";
	ctx.fillText("HP "+player.health, 30, canvas.height-20);
    
}



//var CanvasText = new CanvasText;

