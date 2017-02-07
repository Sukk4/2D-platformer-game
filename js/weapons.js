var bulletArray = [];
var reloading = false;
var reloadTimeLeft = 0;

/* type 0 = single shot, type 1 = automatic 
	bImg:1 = bulletImg*/

var weapon = {
	basicWeapon : {
		speed:1000,
		reloading:false,
		reloadTime:150,
		maxBullets: 100,
		type:0,
		damage:4,
		bImg:1
	},
	secondaryWeapon : {
		speed:1900,
		reloading:false,
		reloadTime:100,
		maxBullets: 100,
		type:0,
		damage: 10,
		bImg:1,
	},
	shotgun : {
		bulletSpeed:1000,
		reloading:false,
		reloadTime:400, // milliseconds
		type:0,
		maxBullets: 100,
		damage: 5,
		bImg:1,
	},

};

var switchWeapon = function(a){

}
var lastWeaponAud = 0;
var bulletPush = function(startx,starty){
	var speedX;
	
	if ( reloadTimeLeft <= 0) {
		if (player.lastDir == "dirRight"){
			speedX = 750;
			startx+=30;
		} else {
			speedX = -750; 
			startx-=30;
		}

		bulletArray.push({
			x:startx,
			y:starty,
			sx: speedX,  // nopeus x akselilla
			//aud: new Audio("audio/weapon1.mp3") || new Audio("audio/weapon1.ogg"),
			//audPlayed: false
		});

		if (lastWeaponAud<10){
			lastWeaponAud++;
		}else{lastWeaponAud = 0}
		weapon1Aud[lastWeaponAud].play();

		

	}
	
};

var bulletUpdate = function(modifier){
	if (bulletArray.length>0){

		/*for (i=0; i<blocks.length; i++) {
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
		}*/

		for (i=0; i<bulletArray.length; i++){
			
			

			/*if (bulletArray[i].audPlayed ==false){
				bulletArray[i].aud.volume=effectVolume;
				bulletArray[i].aud.play();
				bulletArray[i].audPlayed=true;

			}*/


			for (i2=0; i2<enemyArr.length; i2++){
				if (rectDotCol2(bulletArray[i],enemyArr[i2]) ){
					enemyArr[i2].health=enemyArr[i2].health-weapon.basicWeapon.damage;
					bulletArray.splice(i,1);
					newEnemyDeath(enemyArr[i2].x, enemyArr[i2].y);
					if (enemyArr[i2].health<=0){	
						for (i3=0; i3<enemyArr[i2].deadMany; i3++){
							newEnemyDeath(enemyArr[i2].x, enemyArr[i2].y);
						}
						points++;
						enemyArr.splice(i2,1);
						if (enemyKillCount == 0){
							achiEarned(firstEnemyKillAchi);
							
						}
						enemyKillCount++;
						
					}
						
					return;	
				}
				
			}

			for (i2=0; i2<blocks.length; i2++){
				if ( rectDotCol4(bulletArray[i], blocks[i2]) ){
					
					if (bulletArray[i].sx<0){
						newEnemyDeath(blocks[i2].x+50, bulletArray[i].y-15);
					}
					else if (bulletArray[i].sx>0){
						newEnemyDeath(blocks[i2].x-15, bulletArray[i].y-15);
					}
					bulletArray.splice(i,1);
					return;
				}
				
			}
			
			bulletArray[i].x+=bulletArray[i].sx*modifier;
			if(bulletArray[i].x>player.x+1000 || bulletArray[i].x<player.x-1000){
				bulletArray.splice(i,1);
				return;
			};


		};

		
	}
	if (bulletArray.length>100){
		bulletArray.shift();
	}
	if ( reloadTimeLeft > 0){
		 reloadTimeLeft= reloadTimeLeft-deltaTime;

	}



}

var weaponRender = function() {
	if (bulletArray.length >0){
		for (i=0; i<bulletArray.length; i++){
			if (bulletArray[i].sx>0){
				ctx.save();
				ctx.translate(bulletArray[i].x,bulletArray[i].y);
				ctx.drawImage(bulletImg,-bulletImg.width/2, -bulletImg.height/2);
				ctx.restore();
			} else {
				ctx.save();
				ctx.translate(bulletArray[i].x,bulletArray[i].y);
				ctx.rotate(Math.PI)
				ctx.drawImage(bulletImg,-bulletImg.width/2, -bulletImg.height/2);
				ctx.restore();

			}
					
		}
	}
}