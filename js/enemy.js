var enemyArr = [{"x":751.3155,"y":-74,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":5,"health":20},{"x":600.3155,"y":526,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":5,"health":20},{"x":1261.3155000000002,"y":673.966,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":195.99999999999997,"deadMany":5,"health":20},{"x":1231.3155000000002,"y":286,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":5,"health":20},{"x":815.3155000000002,"y":976,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":5,"health":20},{"x":1395,"y":976,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":5,"health":20},{"x":254.775,"y":736,"width":30,"height":30,"speed":-15,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":5,"health":20}] //[]; //[{"x":550,"y":526,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":10},{"x":600,"y":526,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":10},{"x":500,"y":526,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":10},{"x":520,"y":106,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":10},{"x":720,"y":-74,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":10},{"x":750,"y":-74,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":10},{"x":650,"y":-74,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":10},{"x":579,"y":136,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":false,"hp":100,"grounded":true,"jumpSpeed":0,"deadMany":10},{"x":1174,"y":657,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":1486,"y":510,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":1399,"y":277,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":1359,"y":967,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":1230,"y":966,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":1298,"y":965,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":919,"y":718,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":855,"y":717,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":251,"y":720,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":290,"y":726,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10},{"x":126,"y":428,"width":30,"height":30,"speed":0,"maxSpeed":100,"acceleration":1000,"deAcceleration":900,"gravity":700,"jumping":false,"falling":true,"hp":100,"grounded":false,"jumpSpeed":0,"deadMany":10}];
function enemy(xpos, ypos){
	
	this.x = xpos;
	this.y = ypos;
	this.width = 30;
	this.height = 30;
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
	
}



var newEnemy = function(xpos,ypos){
	newenemy = new enemy(xpos,ypos);
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

var enemyUpdate = function(modifier) {
	
	for (i2=0; i2<enemyArr.length; i2++){
		

		if (enemyArr[i2].grounded == false){
		  enemyArr[i2].falling = true;
		}
		if ((enemyArr[i2].y<player.y && enemyArr[i2].y>player.y-150) || (enemyArr[i2].y>player.y && enemyArr[i2].y<player.y+150)){
			if (enemyArr[i2].x<player.x && enemyArr[i2].x>player.x-200 && enemyArr[i2].speed < enemyArr[i2].maxSpeed){
				enemyArr[i2].speed+=enemyArr[i2].acceleration*modifier;
			}
			if (enemyArr[i2].x>player.x && enemyArr[i2].x<player.x+200 && -enemyArr[i2].speed < enemyArr[i2].maxSpeed){
				enemyArr[i2].speed-=enemyArr[i2].acceleration*modifier;
			}
		} else {
			if (enemyArr[i2].speed>=0){
				enemyArr[i2].speed-=enemyArr[i2].deAcceleration*modifier
			}
			if (enemyArr[i2].speed<=0){
				enemyArr[i2].speed+=enemyArr[i2].deAcceleration*modifier
			}
		}
		//if (enemyArr[i2].x<player.x+10 && enemyArr[i2].x > player.x-10){
			//enemyArr.splice(i2,1);
		//}
		for (i=0; i<blocks.length; i++) {
			  if (blocks[i].x>enemyArr[i2].x-30 && blocks[i].x<enemyArr[i2].x+30 && blocks[i].y>enemyArr[i2].y-30 && blocks[i].y<enemyArr[i2].y+30){
			    
			   

			    if (enemyArr[i2].jumping==false && blocks[i].img<5 && blocks[i].img>0){
			      
			        if (topCol(enemyArr[i2], blocks[i])){
			          enemyArr[i2].falling=false;
			          

			          enemyArr[i2].jumpSpeed=0;
			          enemyArr[i2].y=blocks[i].y-enemyArr[i2].height+1;
			          enemyArr[i2].grounded = true;
			        }
			        else{enemyArr[i2].grounded =false;}
			        
			    } 
			    
			    
			    
			   
			    if (bottomCol(enemyArr[i2], blocks[i]) && blocks[i].img<5 && blocks[i].img>0){
			      enemyArr[i2].y = blocks[i].y+30;

			        
			        enemyArr[i2].falling = true; 
			    }

			    if (leftCol(enemyArr[i2], blocks[i]) && blocks[i].img<5 && blocks[i].img>0){
			      
			        enemyArr[i2].x = blocks[i].x-enemyArr[i2].width;
			        enemyArr[i2].speed = 0;
			      
			    }
			    if (rightCol(enemyArr[i2], blocks[i])&& blocks[i].img<5 && blocks[i].img>0){
			      
			        enemyArr[i2].x = blocks[i].x+enemyArr[i2].width;
			        enemyArr[i2].speed = 0;
			    
			    
			    }
			  }
		}
		if (enemyArr[i2].falling == true) {
		    if (enemyArr[i2].jumpSpeed <=0 ){
		      enemyArr[i2].jumpSpeed = 0;
		    }
		    enemyArr[i2].jumpSpeed+=enemyArr[i2].gravity *modifier;
		  };

		enemyArr[i2].x+=enemyArr[i2].speed * modifier;
		 enemyArr[i2].y+=enemyArr[i2].jumpSpeed * modifier;
		 
		if (rectCol(player,enemyArr[i2])&& player.health>0){
			/*for (i=0; i<10; i++){
				newEnemyDeath(enemyArr[i2].x, enemyArr[i2].y);
			}*/
			//points++;
			player.health=player.health-10;
			//enemyArr.splice(i2,1);

		}

	}

if (enemyDeathArr.length>0){
	for (i2=0; i2<enemyDeathArr.length; i2++){
		
		if (enemyDeathArr[i2].ttl<=0){
			enemyDeathArr.splice(i2, 1);
		}

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
		
		
	}
	if (enemyDeathArr.length>=100){
		    enemyDeathArr.shift();
		} 
}
}



var enemyRender = function() {
	
	for (i=0; i<enemyArr.length; i++){
		ctx.save();
		ctx.translate(enemyArr[i].x+15,enemyArr[i].y+15);
		ctx.fillStyle = "pink";
 		ctx.font = "12px Arial";
		ctx.fillText("HP:"+enemyArr[i].health, -15, -20);

		ctx.rotate(enemyArr[i].x/28);
		ctx.drawImage(enemyImg,-enemyImg.width/2, -enemyImg.height/2);
		ctx.restore();
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