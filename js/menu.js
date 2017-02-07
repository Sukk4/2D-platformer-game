
var buttons = {
	w:250,
	h:75
}

var menuButton1 = {
	w:250,
	h:75,
	x: canvas.width/2-125,
	y: 100,
}

var	menuButton2 = {
	w:250,
	h:75,
	x: canvas.width/2-125,
	y: menuButton1.y+100,
}

var menuButton3 = {
	w:250,
	h:75,
	x: canvas.width/2-125,
	y: menuButton2.y+100,
}

var menuButton4 = {
	w:250,
	h:75,
	x: canvas.width/2-125,
	y: menuButton3.y+100,
} 
var menuButton5 = {
	w:250,
	h:75,
	x: canvas.width/2-125,
	y: menuButton4.y+100,
} 

var backButton = {
	txt:"Back",
	w:100,
	h:75,
	x: 25,
	y: 25,
}

var startButton = {
	txt:"Start game",
	w:250,
	h:75,
	x: canvas.width/2-125,
	y: 100,
}

var	optionsButton = {
	txt:"Options",
	w:250,
	h:75,
	x: canvas.width/2-125,
	y: startButton.y+100,
}

var leaderboardButton = {
	txt:"Leaderboards (not working)",
	w:250,
	h:75,
	x: canvas.width/2-125,
	y: optionsButton.y+100,
}

var creditsButton = {
	txt:"Credits (not working)",
	w:250,
	h:75,
	x: canvas.width/2-125,
	y: leaderboardButton.y+100,
}

var controlsButton = {
	txt:"Controls",
	w:250,
	h:75,
	x: canvas.width/2-125,
	y: 100,
}
var audioButton = {
	txt:"Audio",
	x: canvas.width/2-125,
	y: controlsButton.y+100
}
//plusminusbutton
var pmAudioButton = {
	w:75,
	h:75,
}





// BACKGROUND FOR MENU
var menuBg = {		
	img:backgroundImg,
	x:0,
	y:0,
	w:backgroundImg.width,
	h:backgroundImg.height,
	rotation:0,
	scale:1
}

/*var menuButtonSize = {
	width:250,
	heigth:50
}*/

//var menuButtons = [];

/*
	
	menupages (var menuPage)
		1 = startmenu 

		2 = options 
			2.1=controls
			2.2=graphics
			2.3=audio 

		3 = leaderboards 

		4 = credits

*/
var menuPage = 1;

var menu = function(){
	
	if(menuPage>1){
		//BACK KEY
		if (gameKey.esc || (mouseDown == true && rectDotCol(backButton.x, backButton.y, backButton.w, backButton.h, mouseX, mouseY) == true)){
			mouseup();
			if (menuPage == (2 || 3 || 4) || menuPage==1.1){ 
				menuPage = 1;
			}
			if (menuPage >= 2.1 && menuPage <= 2.9){ 
				menuPage = 2;
			}
		}
	}

	if (menuPage == 1){
		//STARTBUTTON
		if (mouseDown == true && rectDotCol(startButton.x, startButton.y, startButton.w, startButton.h, mouseX, mouseY)){
			menuPage =1.1;
			mouseup();
			
		}

		//OPTIONS BUTTON
		if (mouseDown == true && rectDotCol(optionsButton.x, optionsButton.y, optionsButton.w, optionsButton.h, mouseX, mouseY) == true){
			menuPage = 2;
			mouseup();
		}

		// LEADERBOARDS BUTTON 
		if (mouseDown == true && rectDotCol(leaderboardButton.x, leaderboardButton.y, leaderboardButton.w, leaderboardButton.h, mouseX, mouseY) == true){
			mouseup();
		}

		//CREDITS BUTTON
		if (mouseDown == true && rectDotCol(creditsButton.x, creditsButton.y, creditsButton.w, creditsButton.h, mouseX, mouseY) == true){
			mouseup();
		}
	}
	// LEVEL SELECT
	if (menuPage == 1.1){

			if (mouseDown == true){

				if (rectDotCol(menuButton1.x, menuButton1.y,menuButton1.w, menuButton1.h, mouseX, mouseY) == true ){
					level1();
					menuRunning = false;
					gameRunning = true;
					mouseup();
					
				}
				if (rectDotCol(menuButton2.x, menuButton2.y,menuButton2.w, menuButton2.h, mouseX, mouseY) == true && levelsCompleted[1]==true){
					level2();
					menuRunning = false;
					gameRunning = true;
					mouseup();
					
				}
				if (rectDotCol(menuButton3.x, menuButton3.y,menuButton3.w, menuButton3.h, mouseX, mouseY) == true && levelsCompleted[2]==true){
					level3();
					menuRunning = false;
					gameRunning = true;
					mouseup();
					
				}
        if (rectDotCol(menuButton4.x, menuButton4.y,menuButton4.w, menuButton4.h, mouseX, mouseY) == true && levelsCompleted[3]==true){
					level4();
					menuRunning = false;
					gameRunning = true;
					mouseup();
					
				}
			}
	}

	//OPTIONS
	if (menuPage == 2){
		
		if (mouseDown == true && rectDotCol(controlsButton.x, controlsButton.y, controlsButton.w, controlsButton.h, mouseX, mouseY) == true){
			mouseup();
			menuPage = 2.1;
		}
		if (mouseDown == true && rectDotCol(audioButton.x, audioButton.y, buttons.w, buttons.h, mouseX, mouseY) == true){
			mouseup();
			menuPage = 2.2;
		}
	}
	//options Controls
	if (menuPage == 2.1){

	}

	//options Audio
	if (menuPage == 2.2){
		
		// EFFECTS VOLUME CONTROL
			/*if (mouseDown == true && rectDotCol(menuButton1.x-pmAudioButton.w, menuButton1.y, pmAudioButton.w, pmAudioButton.h, mouseX, mouseY) == true){
				if (effectVolume>=0.1){
					effectVolume-=0.1;
				}
				mouseup();
				jumpAud[0].volume = effectVolume;
				jumpAud[0].play();
				for (i=0;i<3;i++){
					jumpAud[i].volume=effectVolume;
				}
				for (i=0;i<11;i++){
					weapon1Aud[i].volume=effectVolume;
				}
				
			}
			if (mouseDown == true && rectDotCol(menuButton1.x+menuButton1.w, menuButton1.y, pmAudioButton.w, pmAudioButton.h, mouseX, mouseY) == true){
				if (effectVolume<0.9){
					effectVolume+=0.1;
				}
				mouseup();
				jumpAud[0].volume = effectVolume;
				jumpAud[0].play();
				for (i=0;i<3;i++){
					jumpAud[i].volume=effectVolume;
				}
				
			}*/


			if (mouseDown == true){

				if (rectDotCol(menuButton1.x, menuButton1.y,menuButton1.w, menuButton1.h, mouseX, mouseY) == true){
					//alert((mouseX-menuButton1.x)/250);
					effectVolume = Math.round((mouseX-menuButton1.x)/250*10)/10;
					jumpAud[0].play();
				}

				if (rectDotCol(menuButton2.x, menuButton2.y,menuButton2.w, menuButton2.h, mouseX, mouseY) == true){
					//alert((mouseX-menuButton2.x)/250);
					musicVolume =  Math.round((mouseX-menuButton1.x)/250*10)/10;
				}

				if (rectDotCol(menuButton1.x+menuButton1.w, menuButton1.y, pmAudioButton.w, pmAudioButton.h, mouseX, mouseY) == true){
					if (effectVolume<0.9){
						effectVolume+=0.1;
						jumpAud[0].play();
						mouseup();
					}
				}
				if (rectDotCol(menuButton1.x-pmAudioButton.w, menuButton1.y, pmAudioButton.w, pmAudioButton.h, mouseX, mouseY) == true){
					if (effectVolume>=0.1){
						effectVolume-=0.1;
						jumpAud[0].play();
						mouseup();
					}
				}

				if (rectDotCol(menuButton2.x-pmAudioButton.w, menuButton2.y, pmAudioButton.w, pmAudioButton.h, mouseX, mouseY) == true){
					if (musicVolume>=0.1){
						musicVolume-=0.1;
						mouseup();
					}
				}

				if (rectDotCol(menuButton2.x+menuButton2.w, menuButton2.y, pmAudioButton.w, pmAudioButton.h, mouseX, mouseY) == true){
					if (musicVolume<=0.9){
						musicVolume+=0.1;
						mouseup();
					}
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

		// MUSIC VOLUME CONTROL
			/*if (mouseDown == true && rectDotCol(menuButton2.x-pmAudioButton.w, menuButton2.y, pmAudioButton.w, pmAudioButton.h, mouseX, mouseY) == true){
				if (musicVolume>=0.1){
					musicVolume-=0.1;
				}
				mouseup();
				musicAud[0].volume = musicVolume;
				
			}
			if (mouseDown == true && rectDotCol(menuButton2.x+menuButton2.w, menuButton2.y, pmAudioButton.w, pmAudioButton.h, mouseX, mouseY) == true){
				if (musicVolume<=0.9){
					musicVolume+=0.1;
				}
				mouseup();
				musicAud[0].volume = musicVolume;
				

			}*/


		/*var effectVolume = 0.4;
		var musicVolume = 0.7;
		*/
	}

}
var menurender = function(){
	//ctx.font="20px Georgia";

	// MENU BG RENDER
    ctx.save();
    ctx.translate(canvas.width/2,canvas.height/2);
    ctx.scale(2,2);
    ctx.rotate(menuBg.rotation);
    ctx.drawImage(menuBg.img,-menuBg.img.width/2,-menuBg.img.height/2);
    ctx.restore();
    menuBg.rotation=menuBg.rotation+1/5000;


    // MENUBUTTON FONT
    ctx.font = "bold 16px Arial";
    
    //BACK KEY
    if (menuPage>1){
    	ctx.beginPath();
	    ctx.rect(backButton.x,backButton.y,backButton.w,backButton.h);
	    ctx.fillStyle="#af1";
	    ctx.fill();
		ctx.closePath();
		ctx.fillStyle = "#000";
	 	ctx.fillText(backButton.txt, backButton.x+10, backButton.y+backButton.h/2+5);
    }

    if (menuPage == 1){
	    // STARTBUTTON
	    ctx.beginPath();
	    ctx.rect(startButton.x,startButton.y,startButton.w,startButton.h);
	    ctx.fillStyle="#123";
	    ctx.fill();
		ctx.closePath();
		ctx.fillStyle = "#fff";
	 	ctx.fillText(startButton.txt, startButton.x+10, startButton.y+startButton.h/2+5);
		
		// OPTIONSBUTTON	
		ctx.beginPath();
	    ctx.rect(optionsButton.x,optionsButton.y,optionsButton.w,optionsButton.h);
	    ctx.fillStyle="#123";
	    ctx.fill();
		ctx.closePath();
		ctx.fillStyle = "#fff";
	 	ctx.fillText(optionsButton.txt, optionsButton.x+10, optionsButton.y+optionsButton.h/2+5);
		
		// LEADERBOARDS BUTTON
		ctx.beginPath();
	    ctx.rect(leaderboardButton.x,leaderboardButton.y,leaderboardButton.w,leaderboardButton.h);
	    ctx.fillStyle="#123";
	    ctx.fill();
		ctx.closePath();
		ctx.fillStyle = "#fff";
	 	ctx.fillText(leaderboardButton.txt, leaderboardButton.x+10, leaderboardButton.y+leaderboardButton.h/2+5);

	 	// CREDITS BUTTON
		ctx.beginPath();
	    ctx.rect(creditsButton.x,creditsButton.y,creditsButton.w,creditsButton.h);
	    ctx.fillStyle="#123";
	    ctx.fill();
		ctx.closePath();
		ctx.fillStyle = "#fff";
	 	ctx.fillText(creditsButton.txt, creditsButton.x+10, creditsButton.y+creditsButton.h/2+5);
	}

	if (menuPage == 1.1){
		ctx.beginPath();
	    ctx.rect(menuButton1.x,menuButton1.y,menuButton1.w,menuButton1.h);
	    ctx.fillStyle="#123";
	    ctx.fill();
	    ctx.fillStyle = "#fff";
	    ctx.fillText("Level 1", menuButton1.x+10, menuButton1.y+menuButton1.h/2+5);
		ctx.closePath();

		ctx.beginPath();
	    ctx.rect(menuButton2.x,menuButton2.y,menuButton2.w,menuButton2.h);
	    if (levelsCompleted[1]==true){
	    	ctx.fillStyle="#123";
	    	ctx.fill();
		    ctx.fillStyle = "#fff";
		    ctx.fillText("Level 2", menuButton2.x+10, menuButton2.y+menuButton2.h/2+5);
	    } else {
	    	ctx.fillStyle="#666";
	    	ctx.fill();
		    ctx.fillStyle = "#fff";
		    ctx.fillText("Level 2 (locked)", menuButton2.x+10, menuButton2.y+menuButton2.h/2+5);
	    }
	    
		ctx.closePath();

		ctx.beginPath();
	    ctx.rect(menuButton3.x,menuButton3.y,menuButton3.w,menuButton3.h);
	     if (levelsCompleted[2]==true){
	    	ctx.fillStyle="#123";
	    	ctx.fill();
		    ctx.fillStyle = "#fff";
		    ctx.fillText("Level 3", menuButton3.x+10, menuButton3.y+menuButton3.h/2+5);
	    } else {
	    	ctx.fillStyle="#666";
	    	ctx.fill();
		    ctx.fillStyle = "#fff";
		    ctx.fillText("Level 3 (locked)", menuButton3.x+10, menuButton3.y+menuButton3.h/2+5);
	    }
	    
		ctx.closePath();
    
    ctx.beginPath();
	    ctx.rect(menuButton4.x,menuButton4.y,menuButton4.w,menuButton4.h);
	     if (levelsCompleted[3]==true){
	    	ctx.fillStyle="#123";
	    	ctx.fill();
		    ctx.fillStyle = "#fff";
		    ctx.fillText("Level 4", menuButton4.x+10, menuButton4.y+menuButton4.h/2+5);
	    } else {
	    	ctx.fillStyle="#666";
	    	ctx.fill();
		    ctx.fillStyle = "#fff";
		    ctx.fillText("Level 4 (locked)", menuButton4.x+10, menuButton4.y+menuButton4.h/2+5);
	    }
	    
		ctx.closePath();

	}

	// OPTIONS
	if (menuPage == 2){
		ctx.save();
		ctx.fillStyle = "#fff";
		ctx.font="42px Georgia";
		ctx.fillText("Options",canvas.width/2-200, 50);
		ctx.restore();
		
		ctx.beginPath();
		ctx.rect(controlsButton.x,controlsButton.y,controlsButton.w,controlsButton.h);
		ctx.fillStyle="#123";
		ctx.fill();
		ctx.closePath();
		ctx.fillStyle = "#fff";
		ctx.fillText("Controls (not working)", controlsButton.x+10, controlsButton.y+controlsButton.h/2+5);

	 	ctx.beginPath();
	    ctx.rect(audioButton.x,audioButton.y,buttons.w,buttons.h);
	    ctx.fillStyle="#123";
	    ctx.fill();
		ctx.closePath();
		ctx.fillStyle = "#fff";
	 	ctx.fillText("Audio", audioButton.x+10, audioButton.y+buttons.h/2+5);

		ctx.beginPath();
		ctx.rect(menuButton3.x,menuButton3.y,menuButton3.w,menuButton3.h);
		ctx.fillStyle="#123";
		ctx.fill();
		ctx.closePath();
		ctx.fillStyle = "#fff";
		ctx.fillText("Graphics(not working)", menuButton3.x+10, menuButton3.y+menuButton3.h/2+5);
	}

	if (menuPage == 2.1){


	}
	//Audio options
	if (menuPage == 2.2){

		/*var effectVolume = 0.4;
		var musicVolume = 0.7;
		*/
		ctx.save();
		ctx.fillStyle = "#fff";
		ctx.font="42px Georgia";
		ctx.fillText("Options - Audio",canvas.width/2-200, 50);
		ctx.restore();
		

		//EFFECTS VOLUME
		ctx.beginPath();
	    ctx.rect(menuButton1.x,menuButton1.y,menuButton1.w,menuButton1.h);
	    ctx.fillStyle="#eee";
	    ctx.fill();
		ctx.closePath();

		ctx.beginPath();
	    ctx.rect(menuButton1.x+5,menuButton1.y+5,(menuButton1.w-10)*effectVolume,menuButton1.h-10);
	    ctx.fillStyle="#1a1";
	    ctx.fill();
		ctx.closePath();
		ctx.fillStyle = "#111";
		ctx.fillText("Effects volume: "+Math.round(effectVolume*10), menuButton1.x+10, menuButton1.y+menuButton1.h/2+5);

			//PLUS BUTTON
			ctx.beginPath();
		    ctx.rect(menuButton1.x+buttons.w,menuButton1.y,pmAudioButton.w,pmAudioButton.h);
		    ctx.fillStyle="#123";
		    ctx.fill();
			ctx.closePath();
			ctx.fillStyle = "#fff";
		 	ctx.fillText("+", menuButton1.x+buttons.w+pmAudioButton.w/2-5, menuButton1.y+buttons.h/2+5);

		 	// MINUS BUTTON
		 	ctx.beginPath();
		    ctx.rect(menuButton1.x-pmAudioButton.w,menuButton1.y,pmAudioButton.w,pmAudioButton.h);
		    ctx.fillStyle="#123";
		    ctx.fill();
			ctx.closePath();
			ctx.fillStyle = "#fff";
		 	ctx.fillText("-", menuButton1.x-pmAudioButton.w/2-5, menuButton1.y+buttons.h/2+5);

		//MUSIC VOLUME
		ctx.beginPath();
	    ctx.rect(menuButton2.x,menuButton2.y,menuButton2.w,menuButton2.h);
	    ctx.fillStyle="#eee";
	    ctx.fill();
		ctx.closePath();

		ctx.beginPath();
	    ctx.rect(menuButton2.x+5,menuButton2.y+5,(menuButton2.w-10)*musicVolume,menuButton2.h-10);
	    ctx.fillStyle="#1a1";
	    ctx.fill();
		ctx.closePath();
		ctx.fillStyle = "#111";
		ctx.fillText("Music volume: "+Math.round(musicVolume*10), menuButton2.x+10, menuButton2.y+menuButton2.h/2+5);

			//PLUS BUTTON
			ctx.beginPath();
		    ctx.rect(menuButton2.x+buttons.w,menuButton2.y,pmAudioButton.w,pmAudioButton.h);
		    ctx.fillStyle="#123";
		    ctx.fill();
			ctx.closePath();
			ctx.fillStyle = "#fff";
		 	ctx.fillText("+", menuButton2.x+buttons.w+pmAudioButton.w/2-5, menuButton2.y+buttons.h/2+5);

		 	// MINUS BUTTON
		 	ctx.beginPath();
		    ctx.rect(menuButton2.x-pmAudioButton.w,menuButton2.y,pmAudioButton.w,pmAudioButton.h);
		    ctx.fillStyle="#123";
		    ctx.fill();
			ctx.closePath();
			ctx.fillStyle = "#fff";
		 	ctx.fillText("-", menuButton2.x-pmAudioButton.w/2-5, menuButton2.y+buttons.h/2+5);
		
	}

}