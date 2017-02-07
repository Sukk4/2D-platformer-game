
function game(modifier){
  if (levelCompleteBox.show ==false){
    player.grounded = false;
    player.maxSpeed = 250;
    player.gravity = 900;
    player.jumpForce = 450;
    levelTime+=modifier;
    gameTime+=modifier;
    for (i=0; i<blocks.length; i++) {
     // if (blocks[i].x>player.x-player.width && blocks[i].x<player.x+player.width && blocks[i].y>player.y-player.height && blocks[i].y<player.y+player.height){
      
      if (player.jumping == false && player.jumpSpeed>=0){             
        if (topCol(player, blocks[i]) == true && blocks[i].img<5 && blocks[i].img>0){
          player.jumpSpeed = 0;
          player.y = blocks[i].y-player.height+1;
          player.grounded = true;
        }                   
        if (topCol3(player, blocks[i]) == true && blocks[i].img>=10 && blocks[i].img<=89){
          player.jumpSpeed = 0;
          player.y = blocks[i].y-player.height+1;
          player.grounded = true;
        }
      }
      if (bottomCol(player, blocks[i]) && blocks[i].img<5 && blocks[i].img>0){
        player.y = blocks[i].y+30;
          if (player.jumpSpeed<=0){
            player.jumpSpeed = 0;
          }
          player.falling = true; 
      }
      if (blocks[i].img>=10 && blocks[i].img<=89){
        if (bottomCol3(player, blocks[i]) == true){
          player.y = blocks[i].y+blocks[i].s;
            if (player.jumpSpeed<=0){
              player.jumpSpeed = 0;
            }
            player.falling = true; 
        }
        if (leftCol3(player, blocks[i]) == true){  
            player.x = blocks[i].x-player.width;
            player.speed = 0;
            gameKey.left = false; 
        }
        if (rightCol3(player, blocks[i]) == true){
            player.x = blocks[i].x+blocks[i].s;
            player.speed = 0;
            gameKey.right = false;
        }
      }
      if (blocks[i].img>=90){
        if (rectCol2(blocks[i],player) ){   
          if (player.speed>100){
            player.speed = 100;
          } 
          if (player.speed <-100){
            player.speed = -100;
          }   
          if (player.jumpSpeed >250){
            player.jumpSpeed = 250
          }
          player.maxSpeed = 130;   
          player.gravity = 300;
          player.jumpForce = 150;
          player.doubleJump = false;      
        }   
      }

        
    };
    if (player.grounded == false){
      player.falling = true;
    }
    if (player.grounded == true){
      player.doubleJump = false;
      player.falling = false;
    } 
    if (gameKey.left && !gameKey.right) {
      
      if (player.speed > -player.maxSpeed){
      player.speed-=player.acceleration * modifier;
      
      }
      player.lastDir="dirLeft";
    };
      
    if (gameKey.right && !gameKey.left) {
      
      if (player.speed < player.maxSpeed){
      player.speed+=player.acceleration * modifier;
      player.lastDir="dirRight";
      }
    };
      
    if ((!gameKey.left || (gameKey.right && gameKey.left)) && player.speed < 0) {
      player.speed+=player.deAcceleration * modifier;
      if (player.speed > -1){
        player.speed=0;
      };
    };
      
    if ((!gameKey.right || (gameKey.right && gameKey.left)) && player.speed > 0) {
      player.speed-=player.deAcceleration * modifier;
      if (player.speed < 1){
        player.speed=0;
      };
      
    };
      
    if (upKey) {
      upKey = false;

      if ((player.jumping== true||player.falling== true)&&player.doubleJump==false && player.grounded == false){
        player.jumpSpeed=-player.jumpForce;
        player.doubleJump = true;
        player.falling = false;
        player.jumping = true;
        player.jumpSpeed=-player.jumpForce;
        jumpAud[1].play();
        
      }

      if (player.grounded== true && player.jumping==false && player.falling== false){
          player.jumping = true;
          player.falling = false;
          player.doubleJump=false;
          player.grounded= false;
          player.jumpSpeed=-player.jumpForce;
          jumpAud[2].play();
      }
   
    };

      if (gameKey.shoot == true && reloadTimeLeft <= 0){
          bulletPush(player.x+player.width/2,player.y+player.height/2+3);
          reloadTimeLeft = weapon.basicWeapon.reloadTime;
          
          
      };
      
      if (gameKey.down && player.jumping== true){
          player.jumping = false;
          player.jumpSpeed =0;
      }
      
      if (player.jumping) {
          player.jumpSpeed+=player.gravity * modifier;
          if (player.jumpSpeed>=0){
            player.jumping = false;
            player.falling = true;         
          }
          
         
      }; 

      if (player.falling && player.jumpSpeed<player.maxJumpSpeed) {
        player.jumping = false;
        player.jumpSpeed+=player.gravity *modifier;
      };
      

      lavaUpdate(modifier);
      lastBossUpdate(modifier);
      enemyUpdate(modifier);
      checkpoint(modifier);
      bulletUpdate(modifier);
      achievement.ttl = achievement.ttl - 1000 * modifier;

      if (player.speed>player.maxSpeed){
        player.speed = player.maxSpeed;
      } else if (player.speed< -player.maxSpeed){
        player.speed = -player.maxSpeed;
      }
      
      player.x+=player.speed * modifier;

      if (player.jumping || player.falling) {
        player.y+=player.jumpSpeed * modifier;
      }
      updateCamera(modifier);
      
      if (player.health<=0){
        playerDead();
      }

      
    }else if (rKey ==true){
      levelCompleteBox.show = false;
      nextLevel();
    }
} 
player.hp = 100;