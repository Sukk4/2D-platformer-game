var enemyArr = [{"x":3257,"y":877,"img":3,"width":52,"height":52,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":5,"health":20,"dmgcd":0,"lastDir":"dirLeft","maxJumpSpeed":500},{"x":1608,"y":493,"img":3,"width":52,"height":52,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":5,"health":20,"dmgcd":0,"lastDir":"dirLeft","maxJumpSpeed":500},{"x":1600,"y":877,"img":2,"width":52,"height":52,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":5,"health":20,"dmgcd":0,"lastDir":"dirLeft","maxJumpSpeed":500},{"x":1256,"y":941,"img":2,"width":52,"height":52,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":5,"health":20,"dmgcd":0,"lastDir":"dirLeft","maxJumpSpeed":500},{"x":67,"y":621,"img":3,"width":52,"height":52,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":5,"health":20,"dmgcd":0,"lastDir":"dirLeft","maxJumpSpeed":500}];
//var enemyArr = [{"x":751.3155,"y":-74,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":5,"health":20},{"x":600.3155,"y":526,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":5,"health":20},{"x":1261.3155000000002,"y":673.966,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":195.99999999999997,"deadMany":5,"health":20},{"x":1231.3155000000002,"y":286,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":5,"health":20},{"x":815.3155000000002,"y":976,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":5,"health":20},{"x":1395,"y":976,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":5,"health":20},{"x":254.775,"y":736,"width":30,"height":30,"speed":-15,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":5,"health":20}] //[]; //[{"x":550,"y":526,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":10},{"x":600,"y":526,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":10},{"x":500,"y":526,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":10},{"x":520,"y":106,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":10},{"x":720,"y":-74,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":10},{"x":750,"y":-74,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":10},{"x":650,"y":-74,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":10},{"x":579,"y":136,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":10},{"x":1174,"y":657,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":1486,"y":510,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":1399,"y":277,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":1359,"y":967,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":1230,"y":966,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":1298,"y":965,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":919,"y":718,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":855,"y":717,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":251,"y":720,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":290,"y":726,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":126,"y":428,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10}];
//var enemyArr = [{"x":50,"y":643,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":5,"health":20,"dmgcd":0},{"x":1276,"y":963,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":5,"health":20,"dmgcd":0},{"x":1462,"y":515,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":5,"health":20,"dmgcd":0},{"x":1072,"y":323,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":5,"health":20,"dmgcd":0},{"x":818,"y":323,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":5,"health":20,"dmgcd":0},{"x":882,"y":-61,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":5,"health":20,"dmgcd":0},{"x":367,"y":-61,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":5,"health":20,"dmgcd":0},{"x":368,"y":1091,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":5,"health":20,"dmgcd":0}];
function enemy(xpos, ypos,img){
	
	this.x = xpos;
	this.y = ypos;
	this.img = img;
	this.width = 52;
	this.height = 52;
	this.speed = 0;
	this.maxSpeed = 100;
	this.acceleration = 1000;
	this.deAcceleration = 900;
	this.gravity = 700;
	this.jumping = false;
	this.falling = true;
	this.hp = 100;
	this.grounded = false;
	this.jumpSpeed = 0;
	this.deadMany = 5;
	this.health = 20;
	this.dmgcd = 0;
	this.lastDir = "dirLeft";
	this.maxJumpSpeed= 500;
	
}



var newEnemy = function(xpos,ypos,img){
	newenemy = new enemy(xpos,ypos,img);
	enemyArr.push(newenemy);
};




var enemyDeathArr = [];
function enemyDeath(xpos, ypos){

	this.x = xpos;
	this.y = ypos;
	this.width = 30;
	this.height = 30;
	this.speed = rand_range(-100, 100);
	this.deAcceleration = 300;
	this.gravity = 700;
	this.jumping = true;
	this.falling = false;
	this.grounded = false;
	this.jumpSpeed = rand_range(-50, -300);
	this.ttl = 1000; //time to live
	this.opacity = 1;
};

var newEnemyDeath = function(xpos,ypos){
	newenemyDeath = new enemyDeath(xpos,ypos);
	enemyDeathArr.push(newenemyDeath);
};


var enemyKillCount = 0;

var lastBoss = {
	x:-1000,
	y:undefined,
	speed:100,
	height:400,
	width:400,
	s:10,
	health:10000,
	step: false, // for camera to render earthquake

};

var spawnBoss = function(){
	if (finalLevel == false) {
		finalLevel = true;
	} else {
		finalLevel = false;
	}
}

var stepcalc=0;
var lastBossAnimX = 0;
var gameRunning = false;
setInterval(function(){
		if (gameRunning == true && finalLevel == true){
		stepcalc++;
		/*if (lastBoss.step == true && stepcalc == 5){
			lastBoss.step=false;
			stepcalc=0;
		} else if (stepcalc==10){
			lastBoss.step = true;
			stepcalc=0;
		}*/
		if (stepcalc==10){
			if (lastBossAnimX==0){
				lastBossAnimX = 60;
				bossStepAud[0].play();
			} else {
				lastBossAnimX = 0;
				bossStepAud[1].play();
			}
			lastBoss.step=true;

		}
		if (stepcalc==15){
			lastBoss.step = false;
			stepcalc=0;

		}
	}
},100)
var lastBossUpdate = function(modifier){
	if (finalLevel == true){
		lastBoss.x += lastBoss.speed*modifier;
		lastBoss.y = player.y-200;
		if (rectCol(lastBoss,player)){
			player.health = 0;
			lastBoss.x = -1000;
		}
		if (player.x-100<lastBoss.x+lastBoss.width){
			
			
		}
		if (lastBoss.step == false){
			
			//weapon1Aud[0].play();
			//setTimeout(function(){lastBoss.step = true;setTimeout(function(){lastBoss.step=false;alert(lastBoss.step);},1500)},1500);
			//setTimeout(function(){lastBoss.step = true;},1500);
		}
		
		if (lastBoss.step == true){
			
			//setTimeout(function(){lastBoss.step = false;},1500)
			//weapon1Aud[0].play();

			//lastBoss.step= false;
		}
	}

}

var enemyUpdate = function(modifier) {
	
	for (i2=0; i2<enemyArr.length; i2++){
		

		if (enemyArr[i2].grounded == false){
		  enemyArr[i2].falling = true;
		}
		if ((enemyArr[i2].y<player.y && enemyArr[i2].y>player.y-150) || (enemyArr[i2].y>player.y && enemyArr[i2].y<player.y+150)){
			if (enemyArr[i2].x<player.x && enemyArr[i2].x>player.x-300 && enemyArr[i2].speed < enemyArr[i2].maxSpeed){
				enemyArr[i2].speed+=enemyArr[i2].acceleration*modifier;
			}
			if (enemyArr[i2].x>player.x && enemyArr[i2].x<player.x+300 && -enemyArr[i2].speed < enemyArr[i2].maxSpeed){
				enemyArr[i2].speed-=enemyArr[i2].acceleration*modifier;
			}
		} else {
			if (enemyArr[i2].speed>=0){
				enemyArr[i2].speed-=enemyArr[i2].deAcceleration*modifier
			}
			if (enemyArr[i2].speed<=0){
				enemyArr[i2].speed+=enemyArr[i2].deAcceleration*modifier
			}
			if (enemyArr[i2].speed<=1 || enemyArr[i2].speed>=-1){
				enemyArr[i2].speed=0;
			}
		}
		//if (enemyArr[i2].x<player.x+10 && enemyArr[i2].x > player.x-10){
			//enemyArr.splice(i2,1);
		//}
		for (i=0; i<blocks.length; i++) {
			  //if (blocks[i].x>enemyArr[i2].x-64 && blocks[i].x<enemyArr[i2].x+64 && blocks[i].y>enemyArr[i2].y-64 && blocks[i].y<enemyArr[i2].y+64){
			    
			   

			    if (enemyArr[i2].jumping==false && blocks[i].img>=10){
			      
			        if (topCol3(enemyArr[i2], blocks[i])){
			          enemyArr[i2].falling=false;
			          

			          enemyArr[i2].jumpSpeed=0;
			          enemyArr[i2].y=blocks[i].y-enemyArr[i2].height+1;
			          enemyArr[i2].grounded = true;
			        }
			    	else{enemyArr[i2].grounded =false;}
			        
			    } 
			    
			    
			    
			   
			    if (bottomCol3(enemyArr[i2], blocks[i]) && blocks[i].img>=10){
			      enemyArr[i2].y = blocks[i].y+blocks[i].s;

			        
			        enemyArr[i2].falling = true; 
			    }

			    if (leftCol3(enemyArr[i2], blocks[i]) && blocks[i].img>=10){
			      
			        enemyArr[i2].x = blocks[i].x-enemyArr[i2].width;
			        enemyArr[i2].speed = 0;
			      
			    }
			    if (rightCol3(enemyArr[i2], blocks[i])&& blocks[i].img>=10){
			      
			        enemyArr[i2].x = blocks[i].x+blocks[i].s;
			        enemyArr[i2].speed = 0;
			    
			    
			    }
			  //}
		}
		if (enemyArr[i2].falling == true) {
		    if (enemyArr[i2].jumpSpeed <=0 ){
		    	enemyArr[i2].jumpSpeed = 0;
		    }
		    if (enemyArr[i2].jumpSpeed<enemyArr[i2].maxJumpSpeed) {
		    
		    	enemyArr[i2].jumpSpeed+=enemyArr[i2].gravity *modifier;
			};
		  //  enemyArr[i2].jumpSpeed+=enemyArr[i2].gravity *modifier;
		  };

		enemyArr[i2].x+=enemyArr[i2].speed * modifier;
		
		enemyArr[i2].y+=enemyArr[i2].jumpSpeed * modifier;
		 
	
		if (rectCol(player,enemyArr[i2])){
			/*for (i=0; i<10; i++){
				newEnemyDeath(enemyArr[i2].x, enemyArr[i2].y);
			}*/
			//points++;
			

			if (enemyArr[i2].dmgcd <= 0 && player.health>0){

				enemyArr[i2].dmgcd = dmgcd;
				player.health=player.health-10;
				
			}
			if (enemyArr[i2].x<=player.x){
				//enemyArr[i2].x=player.x-enemyArr[i2].width-1;
				enemyArr[i2].speed = -enemyArr[i2].maxSpeed*3;
				player.speed = player.maxSpeed;
			}
			else if (enemyArr[i2].x>=player.x){
				//enemyArr[i2].x=player.x+player.width+1;
				enemyArr[i2].speed = enemyArr[i2].maxSpeed*3;
				player.speed = -player.maxSpeed;
			}
			

			//enemyArr.splice(i2,1);

		}
		if (enemyArr[i2].speed>0){
			enemyArr[i2].lastDir = "dirRight" 
		} else {
			enemyArr[i2].lastDir = "dirLeft"
		}
		if (enemyArr[i2].dmgcd > 0){
			enemyArr[i2].dmgcd = enemyArr[i2].dmgcd-dmgcd*modifier;
		}

	}

if (enemyDeathArr.length>0){
	for (i2=0; i2<enemyDeathArr.length; i2++){
		
		

		for (i=0; i<blocks.length; i++) {
			if (blocks[i].img >=3 && blocks[i].x>enemyDeathArr[i2].x-30 && blocks[i].x<enemyDeathArr[i2].x+30 && blocks[i].y>enemyDeathArr[i2].y-30 && blocks[i].y<enemyDeathArr[i2].y+30){
			    
			   

			    if (enemyDeathArr[i2].jumping==false && blocks[i].img<5 && blocks[i].img>0){
			      
			        if (topCol(enemyDeathArr[i2], blocks[i])){
			          

			          
			          enemyDeathArr[i2].y=blocks[i].y-enemyDeathArr[i2].height;
			          enemyDeathArr[i2].jumpSpeed=-enemyDeathArr[i2].jumpSpeed/1.5;
			          enemyDeathArr[i2].falling = false;
			          enemyDeathArr[i2].jumping = true;
			        }
			        
			        
			    } 
			    
			    
			    
			   
			    if (bottomCol(enemyDeathArr[i2], blocks[i]) && blocks[i].img<5 && blocks[i].img>0){
			      enemyDeathArr[i2].y = blocks[i].y+30;

			        
			        enemyDeathArr[i2].falling = true; 
			    }

			    if (leftCol(enemyDeathArr[i2], blocks[i]) && blocks[i].img<5 && blocks[i].img>0){
			      
			        enemyDeathArr[i2].x = blocks[i].x-enemyDeathArr[i2].width;
			        enemyDeathArr[i2].speed = 0;
			      
			    }
			    if (rightCol(enemyDeathArr[i2], blocks[i])&& blocks[i].img<5 && blocks[i].img>0){
			      
			        enemyDeathArr[i2].x = blocks[i].x+enemyDeathArr[i2].width;
			        enemyDeathArr[i2].speed = 0;
			    }
			}
		}

		
		if (enemyDeathArr[i2].jumping) {
		    enemyDeathArr[i2].jumpSpeed+=enemyDeathArr[i2].gravity * modifier;
		    if (enemyDeathArr[i2].jumpSpeed>=0){
		        enemyDeathArr[i2].jumping = false;
		        enemyDeathArr[i2].falling = true;
		        
		        };
		}; 

		if (enemyDeathArr[i2].falling) {
		    if (enemyDeathArr[i2].jumpSpeed <=0 ){
		      enemyDeathArr[i2].jumpSpeed = 0;
		    }
		    enemyDeathArr[i2].jumpSpeed+=enemyDeathArr[i2].gravity *modifier;
		};
		

		enemyDeathArr[i2].x+=enemyDeathArr[i2].speed * modifier;
		enemyDeathArr[i2].y+=enemyDeathArr[i2].jumpSpeed * modifier;
		enemyDeathArr[i2].opacity = enemyDeathArr[i2].ttl/1000;

		

		enemyDeathArr[i2].ttl= enemyDeathArr[i2].ttl-1000*modifier;
		if (enemyDeathArr[i2].ttl<=0){
			enemyDeathArr.splice(i2, 1);
		}
		
	}

	if (enemyDeathArr.length>=100){
		    enemyDeathArr.shift();
		} 
}
}



var enemyRender = function() {
	
	for (i=0; i<enemyArr.length; i++){
		if (enemyArr[i].img == 2){ //  TOOTHTROLL enemy

			if (enemyArr[i].lastDir == "dirLeft"){
				ctx.save();

				ctx.translate(enemyArr[i].x,enemyArr[i].y);
				ctx.scale(-1,1);
				
				
				if (enemyArr[i].speed>=1 || enemyArr[i].speed<=-1) {
					
						ctx.drawImage(toothtrollImg,jyy,56,52,52, -52,0, 52, 52);
					
				}
				else{
					ctx.drawImage(toothtrollImg,juu,0,52,52, -52, 0, 52, 52);
				
				}
				ctx.restore();
				
				
			} else {
				ctx.save();

				ctx.translate(enemyArr[i].x,enemyArr[i].y);
				
				
				
				if (enemyArr[i].speed>=1 || enemyArr[i].speed<=-1) {
					
						ctx.drawImage(toothtrollImg,jyy,56,52,52, 0,0, 52, 52);
					
				}
				else{
					ctx.drawImage(toothtrollImg,juu,0,52,52, 0, 0, 52, 52);
				
				}
				ctx.restore();
				
				
			}

		}
		else if (enemyArr[i].img == 3){ //  Moutherminator enemy

			
			if (enemyArr[i].lastDir == "dirLeft"){
				ctx.save();

				ctx.translate(enemyArr[i].x,enemyArr[i].y);
				ctx.scale(-1,1);
				
				
				if (enemyArr[i].speed>=1 || enemyArr[i].speed<=-1) {
					
						ctx.drawImage(moutherminatorImg,jee2,60,56,56, -56,0, 56, 56);
					
				}
				else{
					ctx.drawImage(moutherminatorImg,jee3,0,56,56, -56, 0, 56, 56);
				
				}
				ctx.restore();
				
				
			} else {
				ctx.save();

				ctx.translate(enemyArr[i].x,enemyArr[i].y);
				
				
				
				if (enemyArr[i].speed>=1 || enemyArr[i].speed<=-1) {
					
						ctx.drawImage(moutherminatorImg,jee2,60,56,56, 0,0, 56, 56);
					
				}
				else{
					ctx.drawImage(moutherminatorImg,jee3,0,56,56, 0, 0, 56, 56);
				
				}
				ctx.restore();
				
				
			}

		}
		else{ // BALL ENEMY

			ctx.save();
			ctx.translate(enemyArr[i].x+15,enemyArr[i].y+15);
			ctx.fillStyle = "pink";
	 		ctx.font = "12px Arial";
			ctx.fillText("HP:"+enemyArr[i].health, -15, -20);

			ctx.rotate(enemyArr[i].x/28);
			ctx.drawImage(enemyImg,-enemyImg.width/2, -enemyImg.height/2);
			ctx.restore();
		}
	}
	for (i=0; i<enemyDeathArr.length; i++){
		ctx.save();
		ctx.globalAlpha = enemyDeathArr[i].opacity;

		ctx.translate(enemyDeathArr[i].x+15,enemyDeathArr[i].y+15);
		ctx.scale(1/3,1/3);
		ctx.rotate(enemyDeathArr[i].x/9);
		ctx.drawImage(enemyImg,goorotation,0,30,30, -15, -15, 30, 30);
		ctx.restore();
	}

	if (finalLevel == true){
		
		ctx.beginPath();
		//ctx.fillStyle= "red";
		//ctx.rect(lastBoss.x,lastBoss.y,lastBoss.width,lastBoss.height);
		ctx.save();
		
		ctx.globalAlpha = 0.4;
		ctx.drawImage(playerImg,lastBossAnimX,60,59,60, lastBoss.x,lastBoss.y,lastBoss.width,lastBoss.height);

		ctx.restore();
		//ctx.fill();
		//ctx.stroke();
		ctx.closePath();
	}
}
/*var enemy = new enemys(2,200);
enemyArr.push(enemy);*/








/*var enemy = {
  x:200,
  y:200,
  width:30,
  height:30,
  speed:0,       // 
  maxSpeed:200,  // MAX Speed, pixels per second
  acceleration:2000,
  deAcceleration:900,
  jumpSpeed:0,
  jumpForce:300,
  jumping:false,
  falling:false,
  doubleJump:false,
  gravity:700,
  lastJumpY:undefined
};*/