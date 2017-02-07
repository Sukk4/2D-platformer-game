var jee = 0;
var render = function(modifier){
	toggle =!toggle;
	/*ctx.beginPath();
	ctx.rect(0,0,canvas.width,canvas.height);
	ctx.fillStyle="grey";
	ctx.fill();
	ctx.closePath();
*/
	//ctx.save();
	//ctx.translate(camera.x,camera.y);

	
	if (playerLoaded && enemyLoaded && mossLoaded){
		
		if (gameRunning || editorRunning){

			ctx.save();
			ctx.scale(2,2);

			ctx.drawImage(backgroundImg, -player.x/10, 0);
			ctx.drawImage(backgroundImg, -player.x/10+backgroundImg.width, 0);
			ctx.drawImage(backgroundImg, -player.x/10+backgroundImg.width*2, 0);

			ctx.restore();

			

			ctx.save();
	    	ctx.translate(-camera.x,-camera.y);

	    	//cloudRender(modifier);
			mapRender();
	    	enemyRender();
			weaponRender();

			if (player.lastDir == "dirLeft"){
				ctx.save();

				ctx.translate(player.x,player.y);
				ctx.scale(-1,1);
				if (player.jumpSpeed>-player.jumpForce+200 && (player.jumping || player.falling)){
					ctx.drawImage(playerImg,60,120,60,60,-player.width, 0, 60, 60);
				}
				else if (player.jumping || player.falling) {
					ctx.drawImage(playerImg,0,120,60,60, -player.width,0, 60, 60);
				}	
				else if (player.speed>=1 || player.speed<=-1) {
					if (juu == 0){
						ctx.drawImage(playerImg,0,60,60,60, -player.width,0, 60, 60);
					}
					else {
						ctx.drawImage(playerImg,60,60,60,60, -player.width,0, 60, 60);
					}
				}
				else{
				ctx.drawImage(playerImg,jee,0,60,60, -player.width, 0, 60, 60);
				
				}
				ctx.restore();
				
				
			} else {
				ctx.save();
				if (player.jumpSpeed>-player.jumpForce+200 && (player.jumping || player.falling)){
					ctx.drawImage(playerImg,60,120,60,60, player.x, player.y, 60, 60);
				}
				else if (player.jumping || player.falling) {
					ctx.drawImage(playerImg,0,120,60,60, player.x, player.y, 60, 60);
				}
				else if (player.speed>=1 || player.speed<=-1) {
					if (juu == 0){
						ctx.drawImage(playerImg,0,60,60,60, player.x, player.y, 60, 60);
					}
					else {
						ctx.drawImage(playerImg,60,60,60,60,  player.x, player.y, 60, 60);
					}
				}
				else{
					ctx.drawImage(playerImg,jee,0,60,60, player.x, player.y, 60, 60);
					

					
				}
				ctx.restore();
			}
			ctx.save();
			ctx.beginPath();
			//ctx.rect(player.x,player.y,60,60);

				ctx.stroke();
				ctx.closePath();
				ctx.restore();
				mapRender2();


	    	//ctx.rotate(player.x/28);
			//ctx.drawImage(playerImg, -15, -15);
			

			/*if (player.lastDir == "dirLeft"){
				ctx.translate(-camera.x,-camera.y);
				ctx.scale(-1,1);
				
			} else {ctx.translate(-camera.x,-camera.y);}
			
			if (player.jumpSpeed>-player.jumpForce+200 && (player.jumping || player.falling)){
				ctx.drawImage(playerImg,50,50,50,50, -15, -15, 50, 50);
			}
			else if (player.jumping || player.falling) {
				ctx.drawImage(playerImg,0,50,50,50, -15, -15, 50, 50);
			}
			else{
			ctx.drawImage(playerImg,jee,0,50,50, -15, -15, 50, 50);
			}*/
			//ctx.drawImage(playerImg,player.x+camera.x,player.y+camera.y);
			ctx.restore();
			
			ctx.font="20px arial";
	    	ctx.fillStyle="#fff";
	    	//ctx.fillText(maxDT,10,20);
	    //	ctx.fillText(deltaTime,10,40);

	    	if (gameRunning==false){
	    		ctx.fillText("Mode : MAP EDITOR",100,20);
	    	
	    	} else {
	    		ctx.fillText("Mode : Game",100,20);
	    	}

	    	if (achievement.ttl>0){
	    		achiRender();
	    	};
	    	uiRender();
			/*ctx.save();
			ctx.translate(enemy.x-player.x+canvas.width/2,enemy.y+enemyImg.height/2);
			ctx.rotate(player.x/28);
			
			
			//ctx.drawImage(enemyImg,-enemyImg.width/2, -enemyImg.height/2);
			ctx.restore();*/
			
			//scoreRender();
			//playerHealthRender();
		} 	
		if (menuRunning){
			menurender();
		}
		var loljee = mouseY+camera.y;
	//	ctx.fillText("player.y "+player.y, canvas.width-100, canvas.height-50);
  //   ctx.fillText("mouse.y "+ loljee, canvas.width-150, canvas.height-100);

   // ctx.drawImage(soundonoffImg,0,0,50,50,canvas.width-50,0,50,50);
//ctx.drawImage(playerImg,jee,0,60,60, player.x, player.y, 60, 60);
	};


	//ctx.restore();
	
	if (freedrawing==false && blockType<=4){

		ctx.beginPath();
		ctx.lineWidth="2";
		ctx.strokeStyle="red";
		ctx.rect(Math.round(mouseX/30)*30-15 , Math.round(mouseY/30)*30-15,30,30);
		ctx.stroke();
		//ctx.drawImage(playerImg, Math.round(mouseX/playerImg.width)*playerImg.width-playerImg.width/2,Math.round(mouseY/playerImg.width)*playerImg.width-playerImg.width/2);
		ctx.closePath();
	};

	if (freedrawing==false && blockType>=5){

		ctx.beginPath();
		ctx.lineWidth="2";
		ctx.strokeStyle="red";
		ctx.rect(Math.round(mouseX/64)*64-32 , Math.round(mouseY/64)*64-32,64,64);
		ctx.stroke();
		//ctx.drawImage(playerImg, Math.round(mouseX/playerImg.width)*playerImg.width-playerImg.width/2,Math.round(mouseY/playerImg.width)*playerImg.width-playerImg.width/2);
		ctx.closePath();

		/*
		x:Math.round(mouseX/64)*64-32+camera.x,
		y:Math.round(mouseY/64)*64-32+camera.y,
		*/
	};
	ctx.save();
	if (freedrawing==true && blockType<=4){
		ctx.beginPath();
		ctx.lineWidth="2";
		ctx.strokeStyle="red";
		ctx.rect(mouseX-15,mouseY-15,30,30);
		ctx.stroke();
		ctx.closePath();
		
		//ctx.drawImage(playerImg,mouseX-playerImg.width/2,mouseY-playerImg.width/2)
	}
	if (freedrawing==true && blockType>=10){
		ctx.beginPath();
		ctx.lineWidth="2";
		ctx.strokeStyle="red";
		ctx.rect(mouseX-32,mouseY-32,64,64);
		ctx.stroke();
		ctx.closePath();
		
		
	}
	ctx.restore();

	


};