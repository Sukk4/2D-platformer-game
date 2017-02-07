var canvasSize = function(a,b){
  canvas.width = a;
  canvas.height = b;
}

var goorotation = 0;


function rand_range(a, b) {
    return Math.floor(Math.random()*(b-a+1))+a;
  }

function rand_range2(a, b) {
    return Math.floor(Math.random()*(b-a+1))+a;
  }



var spaceKey = upKey = downKey = leftKey = rightKey = rKey = escKey = altKey =  false;
var mouseX;
var mouseY;

function keys(e, updown) {                           // kopio kuittisen esimerkistä. pari muutosta
   var code, elem;
    e = e || window.event;
    if (e.keyCode)
        code = e.keyCode;
    else if (e.which)
        code = e.which;
    var mode = (updown=="down");
      
      //Player
          if (code==37 || code==65) leftKey = mode;  // nuolinäppäimet ja WASD
          if (code==39 || code==68) rightKey = mode;         
          if (code==38 || code==87) upKey = mode;
          if (code==40 || code==83) downKey = mode;

          if (code==32) spaceKey = mode; 
          if (code==18) altKey = mode;
          if (code==16) shiftKey = mode;
          if (code==82) rKey = mode;
          if (code==27) escKey = mode;

    
      
      return true;
};
var gameKey={};

var gK;

var gKUpdate = function(s,l,r,u,d,e){
	gK = function(){
		gameKeys = {
			shoot : s,
			left : l,
			right : r,
			up : u,
			down : d,
			esc : e
		}
	}
}

var jepui = true;
var shootKey;
var updateGameKeys = function(){
		if (jepui==true){
			shootKey = prompt("ampumis nappi(kirjain tai numero)", "");
			
			
				shootKey = shootKey+"Key";
			
			
			jepui=false;
		}
		gKUpdate(eval('('+shootKey+')'),leftKey,rightKey,upKey,downKey,escKey);

		gK();
		/*gameKey = {
			shoot : s,
			left : l,
			right : r,
			up : u,
			down : d,
			esc : e
		}*/
		gameKey = gameKeys;


}





var mouseDown = false;
function mousedown(){
	mouseDown = true;
	if (editorRunning){
		newBlock();
	}
	if( rectDotCol(canvas.width-50, 0, 50, 50, mouseX, mouseY)){
		
		muteButton();
	}

}
function mouseup(){
	mouseDown = false;
}

var getMouseCoords = function(event){
      var x = event.pageX;
      var y = event.pageY;
       mouseX = x;
       mouseY = y;
     }






var gameOrEditor = function(){
	if (gameRunning){
		gameRunning = false;
		editorRunning = true;
	}else if (!gameRunning){
		editorRunning = false;
		gameRunning = true;

	}
}

var deltaTime = 0;
var ok = true;
var gameRunning = false;
var menuRunning = true;
var editorRunning = false;
var renderDeltaTime=1000;
//var fps = 60;
var maxDT = 0;


var toggle;

level1();

function main () {
	
	var now = Date.now();
	deltaTime = now - then;
	
	gameKey = {
		shoot : rKey,
		left : leftKey,
		right : rightKey,
		up : upKey,
		down : downKey,
		esc : escKey
	}
	//updateGameKeys(spaceKey,leftKey,rightKey,upKey,downKey,escKey);
	//gameKey;

	if (maxDT < deltaTime){
		maxDT = deltaTime;
	}

	if (deltaTime>25){
		deltaTime =25;
	}

	if (menuRunning == true){
		menu();		// js/menu.js
	} else if (gameRunning == true){ 
		game(deltaTime / 1000);	// js/gamecode.js
		if (escKey){
			gameRunning=false;
			menuRunning=true;
		}
	  	
	} else if (editorRunning == true) { 		
		editorcode(deltaTime / 1000);	// js/editorcode.js	  	
	};

	if (renderDeltaTime > 3000){
		maxDT = 0;
		renderDeltaTime= 0;
	}
  	renderDeltaTime+=deltaTime;
  	then = now;
  	render(deltaTime / 1000);
  	requestAnimationFrame(main);
  	
  	
};
var jee = 0;
var jee3 = 0;
function lol(){
	 if (jee <60){
      jee+=60;
    }
    else {jee = 0;}
    if (jee3 <60){
      jee3+=60;
    }
    else {
    	jee3 = 0;
    }

}
var jee2 = 0;

function lol5(){
	 if (jee2 <180){
      jee2+=60;
    }
    else {
    	jee2 = 0;
    }
}
    
var juu = 0;
function lol2(){
	 if (juu <60){
      juu+=60;
    }
    else {
    	juu = 0;
    }
}
var jyy=0;
function lol4 (){
	 if (jyy <168){
      jyy+=56;
    }
    else {
    	jyy = 0;
    }
}

var jii = 0;
function lol3(){
	 if (jii <192){
      jii+=64;
    }
    else {
    	jii = 0;
    }
}
var jiu = 0;
function lol6 (){
	 if (jiu <832){
      jiu+=64;
    }
    else {
    	jiu = 0;
    }
}



var then = Date.now();

window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       || 
	window.webkitRequestAnimationFrame || 
	window.mozRequestAnimationFrame    || 
	window.oRequestAnimationFrame      || 
	window.msRequestAnimationFrame     || 
	function(/* function */ callback, /* DOMElement */ element){
		window.setTimeout(callback, 1000 / 60);
	};
})();


function animate() {
    
    //render();
    //requestAnimFrame( animate );

}
//animate();
//setInterval(main, 1);
//setInterval(render, 1000 / 60);
//setInterval(menurender, 1000 / 60);
main();


setInterval(lol, 1500);
setInterval(lol2, 100);
setInterval(lol3, 200);
setInterval(lol4, 100);
setInterval(lol5, 100);
setInterval(lol6, 150);