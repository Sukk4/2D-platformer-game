var camera = {
	x:0,
	y:0
};
camera.x = player.x-canvas.height/2;
camera.y= player.y-canvas.width/2;

var quake = function(){
	
	return Math.pow(-(-player.x+lastBoss.x+lastBoss.width),-1)*500;
}

var updateCamera = function(){
	
/*if ((camera.x-0<player.x-canvas.width/2) ){
	camera.x++;
}
if (camera.x>player.x-canvas.width/2){
	camera.x--;
}*/
if (camera.y-50>player.y-canvas.height/2){
	camera.y=Math.round(player.y-canvas.height/2+50);
}
if (camera.y+50<player.y-canvas.height/2){
	camera.y=Math.round(player.y-canvas.height/2-50);
}


	camera.x = player.x-canvas.width/2+player.width/2;
	//camera.y= player.y-canvas.height/2;
	//if (player.x-100<lastBoss.x+lastBoss.width){
		//camera.x+= rand_range(-Math.pow(-1000/(player.x-lastBoss.x+lastBoss.y),2),Math.pow(-1000/(player.x-lastBoss.x+lastBoss.y),2));
		//camera.y+= rand_range(-Math.pow(-1000/(player.x-lastBoss.x+lastBoss.y),2),Math.pow(-1000/(player.x-lastBoss.x+lastBoss.y),2));
	if (player.x<=lastBoss.x+lastBoss.width+500 && lastBoss.step == true){

		camera.x+= rand_range(-quake(),quake());
		camera.y+= rand_range(-quake(),quake());
		//camera.y+= rand_range(0,10);
		
	}
	//console.log(1/(-player.x+lastBoss.width+lastBoss.x));
	//console.log(0,Math.pow(1000/-(-player.x+lastBoss.width+lastBoss.x),2));
	//console.log(Math.pow((player.x-lastBoss.x+lastBoss.width)/player.x/100,-1));
	//console.log(1000/-(player.x-lastBoss.x));
	//console.log(Math.pow(-5000/(player.x-(lastBoss.x+lastBoss.y)),2));

}

//player.x-LastBoss.x+lastBoss.width;

