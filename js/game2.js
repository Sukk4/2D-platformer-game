var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 2000;
canvas.height = 1000;
canvas.style = margin-left: auto;
canvas.style = margin-right: auto;

//document.body.appendChild(canvas);


// Pictures/textures
		var playerLoaded = false;
		var playerImg = new Image();
		playerImg.onload = function() {
		  playerLoaded = true;
		};
		playerImg.src = "textures/player.png";

		var enemyLoaded = false;
		var enemyImg = new Image();
		enemyImg.onload = function() {
		  enemyLoaded = true;
		};
		enemyImg.src = "textures/enemy.png";

		var dirtLoaded = false;
		var dirtImg = new Image();
		dirtImg.onload = function() {
		  dirtLoaded = true;
		};
		dirtImg.src = "textures/dirt.png";

		var grassdirtLoaded = false;
		var grassdirtImg = new Image();
		grassdirtImg.onload = function() {
		  grassdirtLoaded = true;
		};
		grassdirtImg.src = "textures/grassdirt.png";

		var mossLoaded = false;
		var mossImg = new Image();
		mossImg.onload = function() {
		  mossLoaded = true;
		};
		mossImg.src = "textures/moss.png";

		var longgrassLoaded = false;
		var longgrassImg = new Image();
		longgrassImg.onload = function() {
		  longgrassLoaded = true;
		};
		longgrassImg.src = "textures/longgrass.png";

		var gooLoaded = false;
		var gooImg = new Image();
		gooImg.onload = function() {
		  gooLoaded = true;
		};
		gooImg.src = "textures/anigoo.png";


// get level code from editor (prompt method can only give small level codes)
var getLevel = function(){
	levelCode=JSON.stringify(blocks);
	window.prompt("CTRL+C to copy level code", levelCode);
}
// push level code to the editor
var pushLevel = function(){
	levelCode = window.prompt("Give level code", "");
	realLevelCode = JSON.parse(levelCode);
	blocks = realLevelCode;

}
// reseting level code
var resetLevel = function(){		
	blocks = [];
}


var freedrawing = true;
var freedraw = function(){
	if (freedrawing==false){
		freedrawing = true;
	}
	else{
		freedrawing = false;
	}
}
// default block type or texture when editor starts
var blockType = 1;

var changeBlockType = function(x){
	blockType = x;
}

// old, no longer in use
/*var oldchangeBlockType = function(){
	if (blockType == 1){
		blockType = 2;
		return;
	}
	if (blockType == 2){
		blockType = 3;
		return;
	}
	else {
		blockType =1;
	}
}*/

// default map code when game starts
var blocks = [{"x":-15,"y":585,"img":3},{"x":15,"y":585,"img":3},{"x":45,"y":585,"img":3},{"x":75,"y":585,"img":3},{"x":105,"y":585,"img":3},{"x":135,"y":585,"img":3},{"x":195,"y":585,"img":3},{"x":165,"y":585,"img":3},{"x":225,"y":585,"img":3},{"x":285,"y":585,"img":3},{"x":255,"y":585,"img":3},{"x":315,"y":585,"img":3},{"x":375,"y":585,"img":3},{"x":405,"y":585,"img":3},{"x":345,"y":585,"img":3},{"x":435,"y":585,"img":3},{"x":495,"y":585,"img":3},{"x":465,"y":585,"img":3},{"x":525,"y":585,"img":3},{"x":555,"y":585,"img":3},{"x":585,"y":585,"img":3},{"x":615,"y":585,"img":3},{"x":645,"y":585,"img":3},{"x":675,"y":585,"img":3},{"x":705,"y":585,"img":3},{"x":735,"y":585,"img":3},{"x":765,"y":585,"img":3},{"x":765,"y":555,"img":3},{"x":735,"y":555,"img":3},{"x":705,"y":555,"img":3},{"x":675,"y":555,"img":3},{"x":255,"y":555,"img":3},{"x":225,"y":555,"img":3},{"x":195,"y":555,"img":3},{"x":165,"y":555,"img":3},{"x":135,"y":555,"img":3},{"x":105,"y":555,"img":3},{"x":75,"y":555,"img":3},{"x":15,"y":555,"img":3},{"x":45,"y":555,"img":3},{"x":-15,"y":555,"img":3},{"x":285,"y":555,"img":3},{"x":765,"y":225,"img":3},{"x":765,"y":255,"img":3},{"x":765,"y":285,"img":3},{"x":765,"y":315,"img":3},{"x":765,"y":345,"img":3},{"x":765,"y":375,"img":3},{"x":765,"y":405,"img":3},{"x":765,"y":525,"img":3},{"x":765,"y":195,"img":3},{"x":765,"y":165,"img":3},{"x":765,"y":135,"img":3},{"x":765,"y":105,"img":3},{"x":765,"y":75,"img":3},{"x":765,"y":45,"img":3},{"x":735,"y":45,"img":3},{"x":705,"y":45,"img":3},{"x":675,"y":45,"img":3},{"x":615,"y":45,"img":3},{"x":645,"y":45,"img":3},{"x":585,"y":45,"img":3},{"x":705,"y":15,"img":3},{"x":705,"y":-15,"img":3},{"x":735,"y":-15,"img":3},{"x":735,"y":15,"img":3},{"x":765,"y":15,"img":3},{"x":765,"y":-15,"img":3},{"x":735,"y":75,"img":3},{"x":675,"y":75,"img":3},{"x":705,"y":75,"img":3},{"x":705,"y":105,"img":3},{"x":705,"y":135,"img":3},{"x":705,"y":165,"img":3},{"x":705,"y":195,"img":3},{"x":645,"y":75,"img":3},{"x":645,"y":105,"img":3},{"x":675,"y":105,"img":3},{"x":735,"y":105,"img":3},{"x":735,"y":135,"img":3},{"x":735,"y":165,"img":3},{"x":735,"y":195,"img":3},{"x":735,"y":255,"img":3},{"x":735,"y":225,"img":3},{"x":705,"y":225,"img":3},{"x":735,"y":285,"img":3},{"x":735,"y":315,"img":3},{"x":735,"y":345,"img":3},{"x":735,"y":375,"img":3},{"x":735,"y":405,"img":3},{"x":675,"y":435,"img":3},{"x":645,"y":435,"img":3},{"x":15,"y":525,"img":3},{"x":-15,"y":525,"img":3},{"x":-15,"y":495,"img":3},{"x":15,"y":495,"img":3},{"x":15,"y":465,"img":3},{"x":-15,"y":465,"img":3},{"x":-15,"y":435,"img":3},{"x":15,"y":435,"img":3},{"x":15,"y":405,"img":3},{"x":15,"y":375,"img":3},{"x":15,"y":315,"img":3},{"x":15,"y":285,"img":3},{"x":15,"y":255,"img":3},{"x":15,"y":225,"img":3},{"x":15,"y":195,"img":3},{"x":15,"y":165,"img":3},{"x":15,"y":135,"img":3},{"x":15,"y":105,"img":3},{"x":15,"y":75,"img":3},{"x":15,"y":45,"img":3},{"x":-15,"y":45,"img":3},{"x":-15,"y":75,"img":3},{"x":-15,"y":105,"img":3},{"x":-15,"y":135,"img":3},{"x":-15,"y":165,"img":3},{"x":-15,"y":195,"img":3},{"x":-15,"y":225,"img":3},{"x":-15,"y":255,"img":3},{"x":-15,"y":285,"img":3},{"x":-15,"y":315,"img":3},{"x":-15,"y":345,"img":3},{"x":-15,"y":375,"img":3},{"x":-15,"y":405,"img":3},{"x":15,"y":345,"img":3},{"x":15,"y":15,"img":3},{"x":15,"y":-15,"img":3},{"x":-15,"y":-15,"img":3},{"x":-15,"y":15,"img":3},{"x":45,"y":15,"img":3},{"x":45,"y":-15,"img":3},{"x":75,"y":-15,"img":3},{"x":75,"y":15,"img":3},{"x":45,"y":45,"img":3},{"x":105,"y":-15,"img":3},{"x":45,"y":75,"img":3},{"x":45,"y":105,"img":3},{"x":285,"y":135,"img":3},{"x":285,"y":165,"img":3},{"x":195,"y":45,"img":3},{"x":435,"y":225,"img":3},{"x":465,"y":225,"img":3},{"x":465,"y":195,"img":3},{"x":495,"y":165,"img":3},{"x":525,"y":135,"img":3},{"x":585,"y":15,"img":3},{"x":585,"y":-15,"img":3},{"x":645,"y":15,"img":3},{"x":615,"y":15,"img":3},{"x":615,"y":-15,"img":3},{"x":645,"y":-15,"img":3},{"x":675,"y":-15,"img":3},{"x":675,"y":15,"img":3},{"x":435,"y":255,"img":3},{"x":465,"y":255,"img":3},{"x":405,"y":255,"img":3},{"x":525,"y":195,"img":3},{"x":555,"y":225,"img":3},{"x":525,"y":165,"img":3},{"x":555,"y":195,"img":3},{"x":495,"y":225,"img":3},{"x":495,"y":195,"img":3},{"x":525,"y":225,"img":3},{"x":495,"y":255,"img":3},{"x":525,"y":255,"img":3},{"x":555,"y":255,"img":3},{"x":495,"y":285,"img":3},{"x":465,"y":315,"img":3},{"x":435,"y":345,"img":3},{"x":435,"y":375,"img":3},{"x":405,"y":405,"img":3},{"x":375,"y":405,"img":3},{"x":345,"y":405,"img":3},{"x":315,"y":435,"img":3},{"x":315,"y":465,"img":3},{"x":315,"y":495,"img":3},{"x":285,"y":525,"img":3},{"x":285,"y":495,"img":3},{"x":285,"y":465,"img":3},{"x":285,"y":435,"img":3},{"x":315,"y":405,"img":3},{"x":345,"y":375,"img":3},{"x":375,"y":375,"img":3},{"x":405,"y":375,"img":3},{"x":405,"y":345,"img":3},{"x":435,"y":315,"img":3},{"x":465,"y":285,"img":3},{"x":435,"y":285,"img":3},{"x":405,"y":285,"img":3},{"x":315,"y":375,"img":3},{"x":285,"y":405,"img":3},{"x":375,"y":345,"img":3},{"x":405,"y":315,"img":3},{"x":285,"y":195,"img":3},{"x":285,"y":225,"img":3},{"x":285,"y":255,"img":3},{"x":285,"y":285,"img":3},{"x":285,"y":315,"img":3},{"x":285,"y":345,"img":3},{"x":285,"y":375,"img":3},{"x":225,"y":195,"img":3},{"x":225,"y":225,"img":3},{"x":255,"y":255,"img":3},{"x":255,"y":285,"img":3},{"x":255,"y":315,"img":3},{"x":255,"y":225,"img":3},{"x":255,"y":195,"img":3},{"x":255,"y":405,"img":3},{"x":225,"y":435,"img":3},{"x":225,"y":465,"img":3},{"x":225,"y":495,"img":3},{"x":195,"y":495,"img":3},{"x":135,"y":495,"img":3},{"x":165,"y":495,"img":3},{"x":105,"y":525,"img":3},{"x":135,"y":525,"img":3},{"x":165,"y":525,"img":3},{"x":195,"y":525,"img":3},{"x":225,"y":525,"img":3},{"x":255,"y":525,"img":3},{"x":255,"y":495,"img":3},{"x":255,"y":465,"img":3},{"x":255,"y":435,"img":3},{"x":45,"y":405,"img":3},{"x":195,"y":315,"img":3},{"x":225,"y":285,"img":3},{"x":225,"y":255,"img":3},{"x":165,"y":345,"img":3},{"x":195,"y":345,"img":3},{"x":45,"y":375,"img":4},{"x":45,"y":525,"img":4},{"x":75,"y":525,"img":4},{"x":165,"y":465,"img":4},{"x":105,"y":495,"img":4},{"x":135,"y":465,"img":4},{"x":195,"y":465,"img":4},{"x":225,"y":405,"img":4},{"x":255,"y":375,"img":4},{"x":165,"y":315,"img":4},{"x":195,"y":285,"img":4},{"x":315,"y":345,"img":4},{"x":225,"y":165,"img":4},{"x":255,"y":165,"img":4},{"x":75,"y":195,"img":4},{"x":45,"y":195,"img":4},{"x":285,"y":105,"img":4},{"x":315,"y":165,"img":4},{"x":375,"y":315,"img":4},{"x":345,"y":345,"img":4},{"x":405,"y":225,"img":4},{"x":435,"y":195,"img":4},{"x":465,"y":165,"img":4},{"x":495,"y":135,"img":4},{"x":525,"y":105,"img":4},{"x":555,"y":165,"img":4},{"x":645,"y":405,"img":4},{"x":675,"y":405,"img":4},{"x":705,"y":405,"img":4},{"x":615,"y":555,"img":4},{"x":585,"y":555,"img":4},{"x":555,"y":555,"img":4},{"x":525,"y":555,"img":4},{"x":495,"y":555,"img":4},{"x":465,"y":555,"img":4},{"x":405,"y":555,"img":4},{"x":315,"y":555,"img":4},{"x":345,"y":555,"img":4},{"x":375,"y":555,"img":4},{"x":435,"y":555,"img":4},{"x":645,"y":555,"img":4},{"x":675,"y":525,"img":4},{"x":705,"y":525,"img":4},{"x":735,"y":525,"img":4},{"x":195,"y":15,"img":4},{"x":225,"y":15,"img":4},{"x":255,"y":15,"img":4},{"x":285,"y":15,"img":4},{"x":315,"y":15,"img":4},{"x":345,"y":15,"img":4},{"x":375,"y":15,"img":4},{"x":165,"y":15,"img":4},{"x":135,"y":15,"img":4},{"x":105,"y":15,"img":3},{"x":135,"y":45,"img":3},{"x":75,"y":75,"img":3},{"x":75,"y":45,"img":3},{"x":105,"y":45,"img":3},{"x":165,"y":45,"img":3},{"x":645,"y":405,"img":5},{"x":645,"y":435,"img":5},{"x":645,"y":465,"img":5},{"x":645,"y":495,"img":5},{"x":645,"y":525,"img":5},{"x":675,"y":465,"img":5},{"x":675,"y":495,"img":5},{"x":675,"y":435,"img":5},{"x":675,"y":405,"img":5},{"x":705,"y":405,"img":5},{"x":705,"y":435,"img":5},{"x":705,"y":465,"img":5},{"x":645,"y":105,"img":5},{"x":645,"y":135,"img":5},{"x":645,"y":165,"img":5},{"x":645,"y":195,"img":5},{"x":645,"y":225,"img":5},{"x":675,"y":225,"img":5},{"x":675,"y":195,"img":5},{"x":675,"y":165,"img":5},{"x":675,"y":135,"img":5},{"x":675,"y":105,"img":5},{"x":705,"y":135,"img":5},{"x":705,"y":105,"img":5},{"x":705,"y":165,"img":5},{"x":645,"y":255,"img":5},{"x":675,"y":255,"img":5},{"x":645,"y":285,"img":5},{"x":615,"y":45,"img":5},{"x":615,"y":75,"img":5},{"x":645,"y":45,"img":5},{"x":645,"y":75,"img":5},{"x":615,"y":105,"img":5},{"x":615,"y":135,"img":5},{"x":675,"y":75,"img":5},{"x":465,"y":315,"img":5},{"x":465,"y":345,"img":5},{"x":465,"y":375,"img":5},{"x":465,"y":405,"img":5},{"x":435,"y":255,"img":5},{"x":405,"y":285,"img":5},{"x":435,"y":285,"img":5},{"x":435,"y":315,"img":5},{"x":405,"y":345,"img":5},{"x":435,"y":345,"img":5},{"x":435,"y":375,"img":5},{"x":405,"y":375,"img":5},{"x":405,"y":405,"img":5},{"x":435,"y":435,"img":5},{"x":405,"y":465,"img":5},{"x":435,"y":465,"img":5},{"x":405,"y":435,"img":5},{"x":435,"y":405,"img":5},{"x":405,"y":495,"img":5},{"x":405,"y":525,"img":5},{"x":165,"y":315,"img":5},{"x":165,"y":345,"img":5},{"x":165,"y":375,"img":5},{"x":165,"y":405,"img":5},{"x":165,"y":435,"img":5},{"x":195,"y":315,"img":5},{"x":195,"y":345,"img":5},{"x":195,"y":375,"img":5},{"x":195,"y":405,"img":5},{"x":195,"y":435,"img":5},{"x":105,"y":45,"img":5},{"x":105,"y":75,"img":5},{"x":105,"y":105,"img":5},{"x":75,"y":75,"img":5},{"x":75,"y":105,"img":5},{"x":75,"y":135,"img":5},{"x":75,"y":165,"img":5},{"x":75,"y":195,"img":5},{"x":75,"y":225,"img":5},{"x":255,"y":165,"img":5},{"x":255,"y":195,"img":5},{"x":285,"y":195,"img":5},{"x":285,"y":165,"img":5},{"x":255,"y":225,"img":5},{"x":285,"y":225,"img":5},{"x":285,"y":255,"img":5},{"x":285,"y":135,"img":5},{"x":285,"y":105,"img":5},{"x":195,"y":465,"img":5},{"x":195,"y":495,"img":5},{"x":195,"y":525,"img":5},{"x":165,"y":465,"img":5},{"x":225,"y":405,"img":5},{"x":225,"y":435,"img":5},{"x":225,"y":465,"img":5},{"x":225,"y":495,"img":5},{"x":195,"y":555,"img":5},{"x":165,"y":495,"img":5},{"x":225,"y":525,"img":5},{"x":375,"y":15,"img":5},{"x":375,"y":45,"img":5},{"x":375,"y":75,"img":5},{"x":105,"y":-45,"img":4},{"x":75,"y":-45,"img":4},{"x":45,"y":-45,"img":4},{"x":15,"y":-45,"img":4},{"x":-15,"y":-45,"img":4},{"x":585,"y":-45,"img":4},{"x":615,"y":-45,"img":4},{"x":645,"y":-45,"img":4},{"x":675,"y":-45,"img":4},{"x":705,"y":-45,"img":4},{"x":735,"y":-45,"img":4},{"x":765,"y":-45,"img":4},{"x":795,"y":-15,"img":4},{"x":825,"y":15,"img":4},{"x":855,"y":45,"img":4},{"x":795,"y":15,"img":3},{"x":795,"y":75,"img":3},{"x":795,"y":105,"img":3},{"x":795,"y":135,"img":3},{"x":795,"y":165,"img":3},{"x":795,"y":195,"img":3},{"x":795,"y":225,"img":3},{"x":795,"y":255,"img":3},{"x":795,"y":285,"img":3},{"x":825,"y":285,"img":3},{"x":825,"y":255,"img":3},{"x":825,"y":225,"img":3},{"x":825,"y":165,"img":3},{"x":825,"y":135,"img":3},{"x":825,"y":75,"img":3},{"x":825,"y":45,"img":3},{"x":795,"y":45,"img":3},{"x":825,"y":105,"img":3},{"x":855,"y":75,"img":3},{"x":855,"y":105,"img":3},{"x":855,"y":135,"img":3},{"x":855,"y":165,"img":3},{"x":855,"y":225,"img":3},{"x":855,"y":195,"img":3},{"x":825,"y":195,"img":3},{"x":855,"y":255,"img":3},{"x":855,"y":285,"img":3},{"x":855,"y":315,"img":3},{"x":825,"y":315,"img":3},{"x":795,"y":315,"img":3},{"x":795,"y":345,"img":3},{"x":825,"y":345,"img":3},{"x":795,"y":375,"img":3},{"x":795,"y":555,"img":3},{"x":825,"y":555,"img":3},{"x":855,"y":555,"img":3},{"x":855,"y":525,"img":3},{"x":885,"y":495,"img":3},{"x":885,"y":525,"img":3},{"x":885,"y":555,"img":3},{"x":885,"y":585,"img":3},{"x":855,"y":585,"img":3},{"x":825,"y":585,"img":3},{"x":795,"y":585,"img":3},{"x":795,"y":615,"img":3},{"x":855,"y":615,"img":3},{"x":885,"y":615,"img":3},{"x":975,"y":615,"img":3},{"x":1005,"y":615,"img":3},{"x":1035,"y":615,"img":3},{"x":1035,"y":585,"img":3},{"x":1005,"y":585,"img":3},{"x":975,"y":585,"img":3},{"x":975,"y":555,"img":3},{"x":1005,"y":555,"img":3},{"x":975,"y":525,"img":3},{"x":975,"y":495,"img":3},{"x":975,"y":465,"img":3},{"x":1005,"y":465,"img":3},{"x":1005,"y":495,"img":3},{"x":1005,"y":525,"img":3},{"x":1035,"y":555,"img":3},{"x":1035,"y":525,"img":3},{"x":1035,"y":495,"img":3},{"x":1035,"y":465,"img":3},{"x":765,"y":495,"img":4},{"x":795,"y":525,"img":4},{"x":825,"y":525,"img":4},{"x":855,"y":495,"img":4},{"x":885,"y":465,"img":4},{"x":975,"y":435,"img":4},{"x":1005,"y":435,"img":4},{"x":1035,"y":435,"img":4},{"x":1065,"y":435,"img":3},{"x":1065,"y":405,"img":3},{"x":1065,"y":375,"img":3},{"x":1065,"y":345,"img":3},{"x":1065,"y":315,"img":3},{"x":1035,"y":315,"img":3},{"x":1035,"y":345,"img":3},{"x":1035,"y":285,"img":4},{"x":1065,"y":285,"img":4},{"x":1095,"y":285,"img":4},{"x":1125,"y":285,"img":4},{"x":885,"y":645,"img":3},{"x":885,"y":675,"img":3},{"x":975,"y":645,"img":3},{"x":975,"y":675,"img":3},{"x":975,"y":705,"img":3},{"x":885,"y":705,"img":3},{"x":885,"y":735,"img":3},{"x":975,"y":735,"img":3},{"x":885,"y":765,"img":3},{"x":975,"y":765,"img":3},{"x":885,"y":795,"img":3},{"x":915,"y":795,"img":3},{"x":1005,"y":645,"img":3},{"x":945,"y":795,"img":3},{"x":975,"y":795,"img":3},{"x":1005,"y":675,"img":3},{"x":1005,"y":705,"img":3},{"x":1005,"y":735,"img":3},{"x":1005,"y":765,"img":3},{"x":1005,"y":795,"img":3},{"x":975,"y":825,"img":3},{"x":1005,"y":825,"img":3},{"x":945,"y":825,"img":3},{"x":915,"y":825,"img":3},{"x":885,"y":825,"img":3},{"x":855,"y":825,"img":3},{"x":855,"y":795,"img":3},{"x":855,"y":735,"img":3},{"x":855,"y":705,"img":3},{"x":855,"y":675,"img":3},{"x":855,"y":645,"img":3},{"x":825,"y":615,"img":3},{"x":825,"y":645,"img":3},{"x":825,"y":675,"img":3},{"x":825,"y":705,"img":3},{"x":825,"y":735,"img":3},{"x":825,"y":765,"img":3},{"x":855,"y":765,"img":3},{"x":825,"y":795,"img":3},{"x":825,"y":855,"img":3},{"x":825,"y":825,"img":3},{"x":855,"y":855,"img":3},{"x":885,"y":855,"img":3},{"x":915,"y":855,"img":3},{"x":945,"y":855,"img":3},{"x":1005,"y":855,"img":3},{"x":975,"y":855,"img":3},{"x":1035,"y":855,"img":3},{"x":1035,"y":825,"img":3},{"x":1035,"y":795,"img":3},{"x":1035,"y":765,"img":3},{"x":1035,"y":735,"img":3},{"x":1035,"y":705,"img":3},{"x":1035,"y":675,"img":3},{"x":1035,"y":645,"img":3},{"x":1065,"y":465,"img":3},{"x":1065,"y":495,"img":3},{"x":1065,"y":525,"img":3},{"x":1065,"y":555,"img":3},{"x":1065,"y":585,"img":3},{"x":1065,"y":615,"img":3},{"x":1065,"y":645,"img":3},{"x":1065,"y":675,"img":3},{"x":1065,"y":705,"img":3},{"x":1065,"y":735,"img":3},{"x":1065,"y":765,"img":3},{"x":1065,"y":795,"img":3},{"x":1065,"y":825,"img":3},{"x":1065,"y":855,"img":3},{"x":1065,"y":885,"img":3},{"x":1035,"y":885,"img":3},{"x":975,"y":885,"img":3},{"x":1005,"y":885,"img":3},{"x":945,"y":885,"img":3},{"x":915,"y":885,"img":3},{"x":885,"y":885,"img":3},{"x":855,"y":885,"img":3},{"x":825,"y":885,"img":3},{"x":795,"y":885,"img":3},{"x":795,"y":855,"img":3},{"x":795,"y":825,"img":3},{"x":795,"y":795,"img":3},{"x":795,"y":765,"img":3},{"x":795,"y":735,"img":3},{"x":795,"y":705,"img":3},{"x":795,"y":675,"img":3},{"x":795,"y":645,"img":3},{"x":765,"y":615,"img":3},{"x":735,"y":615,"img":3},{"x":735,"y":645,"img":3},{"x":765,"y":645,"img":3},{"x":765,"y":675,"img":3},{"x":735,"y":675,"img":3},{"x":705,"y":615,"img":3},{"x":705,"y":645,"img":3},{"x":705,"y":675,"img":3},{"x":705,"y":705,"img":3},{"x":735,"y":705,"img":3},{"x":765,"y":705,"img":3},{"x":765,"y":735,"img":3},{"x":735,"y":735,"img":3},{"x":735,"y":765,"img":3},{"x":765,"y":765,"img":3},{"x":765,"y":795,"img":3},{"x":735,"y":795,"img":3},{"x":735,"y":825,"img":3},{"x":765,"y":825,"img":3},{"x":885,"y":315,"img":3},{"x":915,"y":285,"img":3},{"x":945,"y":255,"img":3},{"x":975,"y":225,"img":3},{"x":1005,"y":195,"img":3},{"x":1035,"y":165,"img":3},{"x":1035,"y":135,"img":3},{"x":1035,"y":75,"img":3},{"x":1035,"y":105,"img":3},{"x":1005,"y":75,"img":3},{"x":975,"y":75,"img":3},{"x":945,"y":75,"img":3},{"x":945,"y":105,"img":3},{"x":945,"y":165,"img":3},{"x":945,"y":135,"img":3},{"x":915,"y":165,"img":3},{"x":885,"y":165,"img":3},{"x":885,"y":225,"img":3},{"x":885,"y":195,"img":3},{"x":885,"y":255,"img":3},{"x":885,"y":285,"img":3},{"x":915,"y":255,"img":3},{"x":915,"y":225,"img":3},{"x":915,"y":195,"img":3},{"x":945,"y":195,"img":3},{"x":945,"y":225,"img":3},{"x":975,"y":195,"img":3},{"x":975,"y":165,"img":3},{"x":975,"y":135,"img":3},{"x":975,"y":105,"img":3},{"x":1005,"y":105,"img":3},{"x":1005,"y":135,"img":3},{"x":1005,"y":165,"img":3},{"x":885,"y":135,"img":4},{"x":915,"y":135,"img":4},{"x":945,"y":45,"img":4},{"x":975,"y":45,"img":4},{"x":1005,"y":45,"img":4},{"x":1035,"y":45,"img":4},{"x":915,"y":765,"img":4},{"x":945,"y":765,"img":4},{"x":-15,"y":615,"img":3},{"x":15,"y":615,"img":3},{"x":45,"y":615,"img":3},{"x":105,"y":615,"img":3},{"x":135,"y":615,"img":3},{"x":195,"y":615,"img":3},{"x":225,"y":615,"img":3},{"x":255,"y":615,"img":3},{"x":285,"y":615,"img":3},{"x":315,"y":615,"img":3},{"x":345,"y":615,"img":3},{"x":375,"y":615,"img":3},{"x":405,"y":615,"img":3},{"x":435,"y":615,"img":3},{"x":465,"y":615,"img":3},{"x":495,"y":615,"img":3},{"x":525,"y":615,"img":3},{"x":555,"y":615,"img":3},{"x":585,"y":615,"img":3},{"x":615,"y":615,"img":3},{"x":645,"y":615,"img":3},{"x":675,"y":615,"img":3},{"x":675,"y":645,"img":3},{"x":645,"y":645,"img":3},{"x":615,"y":645,"img":3},{"x":585,"y":645,"img":3},{"x":555,"y":645,"img":3},{"x":525,"y":645,"img":3},{"x":465,"y":645,"img":3},{"x":495,"y":645,"img":3},{"x":435,"y":645,"img":3},{"x":375,"y":645,"img":3},{"x":405,"y":645,"img":3},{"x":345,"y":645,"img":3},{"x":315,"y":645,"img":3},{"x":285,"y":645,"img":3},{"x":255,"y":645,"img":3},{"x":225,"y":645,"img":3},{"x":195,"y":645,"img":3},{"x":165,"y":615,"img":3},{"x":165,"y":645,"img":3},{"x":135,"y":645,"img":3},{"x":105,"y":645,"img":3},{"x":75,"y":645,"img":3},{"x":75,"y":615,"img":3},{"x":-45,"y":-45,"img":3},{"x":-45,"y":-75,"img":3},{"x":-45,"y":-105,"img":3},{"x":-45,"y":-135,"img":3},{"x":-45,"y":-165,"img":3},{"x":-45,"y":-225,"img":3},{"x":-45,"y":-195,"img":3},{"x":-15,"y":-225,"img":3},{"x":15,"y":-225,"img":3},{"x":45,"y":-225,"img":3},{"x":75,"y":-225,"img":3},{"x":105,"y":-225,"img":3},{"x":135,"y":-225,"img":3},{"x":165,"y":-225,"img":3},{"x":195,"y":-225,"img":3},{"x":225,"y":-225,"img":3},{"x":255,"y":-225,"img":3},{"x":255,"y":-195,"img":3},{"x":255,"y":-165,"img":3},{"x":255,"y":-135,"img":3},{"x":225,"y":-135,"img":3},{"x":225,"y":-165,"img":3},{"x":225,"y":-195,"img":3},{"x":195,"y":-195,"img":3},{"x":195,"y":-165,"img":3},{"x":165,"y":-165,"img":3},{"x":165,"y":-195,"img":3},{"x":135,"y":-195,"img":3},{"x":-75,"y":-225,"img":3},{"x":-75,"y":-165,"img":3},{"x":-75,"y":-195,"img":3},{"x":-75,"y":-135,"img":3},{"x":-75,"y":-105,"img":3},{"x":-75,"y":-75,"img":3},{"x":-75,"y":-15,"img":3},{"x":-45,"y":-15,"img":3},{"x":-75,"y":-45,"img":3},{"x":-75,"y":15,"img":3},{"x":-45,"y":15,"img":3},{"x":-45,"y":45,"img":3},{"x":-75,"y":45,"img":3},{"x":225,"y":-165,"img":5},{"x":225,"y":-135,"img":5},{"x":255,"y":-165,"img":5},{"x":255,"y":-135,"img":5},{"x":255,"y":-105,"img":5},{"x":255,"y":-75,"img":5},{"x":255,"y":-45,"img":5},{"x":225,"y":-105,"img":5},{"x":225,"y":-75,"img":5},{"x":225,"y":-195,"img":5},{"x":255,"y":-195,"img":5},{"x":-15,"y":-225,"img":5},{"x":-45,"y":-195,"img":5},{"x":-45,"y":-225,"img":5},{"x":-45,"y":-165,"img":5},{"x":-15,"y":-195,"img":5},{"x":-15,"y":-165,"img":5},{"x":-15,"y":-135,"img":5},{"x":-45,"y":-105,"img":5},{"x":-45,"y":-135,"img":5},{"x":-45,"y":-75,"img":5},{"x":-45,"y":-45,"img":5},{"x":-75,"y":-105,"img":5},{"x":-75,"y":-135,"img":5},{"x":-75,"y":-165,"img":5},{"x":-75,"y":-75,"img":5},{"x":-75,"y":-45,"img":5},{"x":-75,"y":15,"img":5},{"x":-75,"y":-15,"img":5},{"x":855,"y":315,"img":5},{"x":885,"y":315,"img":5},{"x":855,"y":345,"img":5},{"x":885,"y":345,"img":5},{"x":855,"y":375,"img":5},{"x":885,"y":375,"img":5},{"x":855,"y":405,"img":5},{"x":885,"y":405,"img":5},{"x":855,"y":435,"img":5},{"x":855,"y":465,"img":5},{"x":855,"y":525,"img":5},{"x":855,"y":495,"img":5},{"x":855,"y":555,"img":5},{"x":855,"y":585,"img":5},{"x":855,"y":615,"img":5},{"x":855,"y":645,"img":5},{"x":855,"y":675,"img":5},{"x":285,"y":-135,"img":3},{"x":285,"y":-165,"img":3},{"x":285,"y":-195,"img":3},{"x":285,"y":-225,"img":3},{"x":315,"y":-225,"img":3},{"x":315,"y":-195,"img":3},{"x":315,"y":-165,"img":3},{"x":315,"y":-135,"img":3},{"x":345,"y":-135,"img":3},{"x":345,"y":-165,"img":3},{"x":345,"y":-195,"img":3},{"x":345,"y":-225,"img":3},{"x":375,"y":-225,"img":3},{"x":375,"y":-195,"img":3},{"x":375,"y":-165,"img":3},{"x":405,"y":-165,"img":3},{"x":435,"y":-195,"img":3},{"x":405,"y":-195,"img":3},{"x":405,"y":-225,"img":3},{"x":435,"y":-225,"img":3},{"x":465,"y":-225,"img":3},{"x":465,"y":-195,"img":3},{"x":495,"y":-195,"img":3},{"x":525,"y":-225,"img":3},{"x":495,"y":-225,"img":3},{"x":555,"y":-225,"img":3},{"x":585,"y":-225,"img":3},{"x":615,"y":-225,"img":3},{"x":645,"y":-225,"img":3},{"x":675,"y":-225,"img":3},{"x":705,"y":-225,"img":3},{"x":735,"y":-225,"img":3},{"x":765,"y":-225,"img":3},{"x":795,"y":-225,"img":3},{"x":825,"y":-225,"img":3},{"x":885,"y":-225,"img":3},{"x":855,"y":-225,"img":3},{"x":915,"y":-225,"img":3},{"x":945,"y":-225,"img":3},{"x":915,"y":-195,"img":3},{"x":915,"y":-165,"img":3},{"x":915,"y":-135,"img":3},{"x":915,"y":-105,"img":3},{"x":945,"y":-105,"img":3},{"x":945,"y":-135,"img":3},{"x":945,"y":-165,"img":3},{"x":945,"y":-195,"img":3},{"x":975,"y":-195,"img":3},{"x":975,"y":-165,"img":3},{"x":975,"y":-135,"img":3},{"x":975,"y":-105,"img":3},{"x":1005,"y":-105,"img":3},{"x":1005,"y":-135,"img":3},{"x":1005,"y":-165,"img":3},{"x":1005,"y":-195,"img":3},{"x":975,"y":-225,"img":3},{"x":945,"y":-165,"img":5},{"x":975,"y":-165,"img":5},{"x":975,"y":-135,"img":5},{"x":945,"y":-135,"img":5},{"x":945,"y":-105,"img":5},{"x":945,"y":-75,"img":5},{"x":945,"y":-45,"img":5},{"x":945,"y":-195,"img":5},{"x":975,"y":-195,"img":5},{"x":1005,"y":-195,"img":5},{"x":1005,"y":-225,"img":3},{"x":1035,"y":-165,"img":3},{"x":1035,"y":-195,"img":3},{"x":1035,"y":-225,"img":3},{"x":1035,"y":-135,"img":3},{"x":1095,"y":-135,"img":3},{"x":1065,"y":-165,"img":3},{"x":1065,"y":-195,"img":3},{"x":1065,"y":-225,"img":3},{"x":1125,"y":-225,"img":3},{"x":1095,"y":-195,"img":3},{"x":1095,"y":-225,"img":3},{"x":1095,"y":-165,"img":3},{"x":1065,"y":-135,"img":3},{"x":1125,"y":-135,"img":3},{"x":1125,"y":-165,"img":3},{"x":1125,"y":-195,"img":3},{"x":1155,"y":-225,"img":3},{"x":1155,"y":-195,"img":3},{"x":1155,"y":-165,"img":3},{"x":1155,"y":-135,"img":3},{"x":1095,"y":315,"img":3},{"x":1095,"y":345,"img":3},{"x":1095,"y":375,"img":3},{"x":1095,"y":435,"img":3},{"x":1095,"y":405,"img":3},{"x":1095,"y":465,"img":3},{"x":1095,"y":495,"img":3},{"x":1095,"y":525,"img":3},{"x":1095,"y":555,"img":3},{"x":1095,"y":585,"img":3},{"x":1095,"y":615,"img":3},{"x":1095,"y":645,"img":3},{"x":1095,"y":675,"img":3},{"x":1095,"y":705,"img":3},{"x":1125,"y":705,"img":3},{"x":1125,"y":675,"img":3},{"x":1125,"y":615,"img":3},{"x":1125,"y":585,"img":3},{"x":1125,"y":555,"img":3},{"x":1125,"y":525,"img":3},{"x":1125,"y":495,"img":3},{"x":1125,"y":465,"img":3},{"x":1125,"y":435,"img":3},{"x":1125,"y":405,"img":3},{"x":1125,"y":375,"img":3},{"x":1125,"y":345,"img":3},{"x":1125,"y":315,"img":3},{"x":1155,"y":285,"img":3},{"x":1155,"y":315,"img":3},{"x":1155,"y":255,"img":3},{"x":1155,"y":225,"img":3},{"x":1155,"y":195,"img":3},{"x":1185,"y":195,"img":3},{"x":1185,"y":225,"img":3},{"x":1185,"y":255,"img":3},{"x":1185,"y":315,"img":3},{"x":1185,"y":345,"img":3},{"x":1185,"y":285,"img":3},{"x":1155,"y":345,"img":3},{"x":1155,"y":165,"img":4},{"x":1185,"y":165,"img":4},{"x":1035,"y":495,"img":3},{"x":1035,"y":525,"img":5},{"x":1035,"y":555,"img":5},{"x":1065,"y":525,"img":5},{"x":1065,"y":555,"img":5},{"x":1035,"y":585,"img":5},{"x":1035,"y":645,"img":5},{"x":1035,"y":615,"img":5},{"x":1065,"y":585,"img":5},{"x":1065,"y":615,"img":5},{"x":1005,"y":525,"img":5},{"x":1005,"y":555,"img":5},{"x":1035,"y":495,"img":5},{"x":1065,"y":465,"img":5},{"x":1035,"y":465,"img":5},{"x":1035,"y":435,"img":5}];
var newBlock = function() {
	if (mouseX>=0 && mouseX<=canvas.width && mouseY>=0 && mouseY<=canvas.height){
		if (freedrawing==true){
				
				blocks.push({
					x:mouseX-15+camera.x,
					y:mouseY-15+camera.y,
					img:blockType,
				});
				
		}
		if (freedrawing==false){
			
				blocks.push({
					x:Math.round(mouseX/playerImg.width)*playerImg.width-15+camera.x,
					y:Math.round(mouseY/playerImg.height)*playerImg.height-15-camera.y,
					img:blockType
				});
			 w
		}
	}	
	 // JSON.stringify(blocks)
};
//blocks.push({"x":96,"y":128},{"x":93,"y":139},{"x":90,"y":169},{"x":95,"y":209},{"x":103,"y":248},{"x":107,"y":276},{"x":98,"y":301},{"x":92,"y":308},{"x":61,"y":316},{"x":41,"y":306},{"x":34,"y":285},{"x":185,"y":122},{"x":176,"y":145},{"x":171,"y":188},{"x":176,"y":227},{"x":178,"y":256},{"x":178,"y":312},{"x":178,"y":330},{"x":191,"y":337},{"x":236,"y":344},{"x":268,"y":336},{"x":298,"y":333},{"x":195,"y":218},{"x":209,"y":217},{"x":228,"y":220},{"x":253,"y":218},{"x":279,"y":217},{"x":290,"y":217},{"x":193,"y":113},{"x":241,"y":115},{"x":260,"y":116},{"x":293,"y":116},{"x":320,"y":114},{"x":428,"y":132},{"x":415,"y":158},{"x":407,"y":201},{"x":406,"y":234},{"x":404,"y":249},{"x":399,"y":272},{"x":398,"y":295},{"x":398,"y":310},{"x":409,"y":323},{"x":457,"y":327},{"x":517,"y":325},{"x":511,"y":324},{"x":483,"y":323},{"x":469,"y":322},{"x":451,"y":322},{"x":400,"y":177},{"x":429,"y":122},{"x":439,"y":121},{"x":456,"y":121},{"x":474,"y":123},{"x":529,"y":124},{"x":555,"y":124},{"x":512,"y":114},{"x":502,"y":120},{"x":426,"y":214},{"x":441,"y":217},{"x":470,"y":217},{"x":503,"y":215},{"x":531,"y":215},{"x":560,"y":214},{"x":181,"y":287},{"x":182,"y":272},{"x":179,"y":173},{"x":215,"y":106},{"x":206,"y":335},{"x":432,"y":325},{"x":398,"y":320},{"x":411,"y":215},{"x":407,"y":176})

var spaceKey = upKey = downKey = leftKey = rightKey = false;
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

    
      
      return true;
};

var getMouseCoords = function(event){
      var x = event.pageX;
      var y = event.pageY;
       mouseX = x;
       mouseY = y;
     }

var camera = {
	x:0,
	y:0
};

var goorotation = 0;
var render = function(){
	
	ctx.rect(0,0,canvas.width,canvas.height);
	ctx.fillStyle="grey";
	ctx.fill();
	ctx.stroke();

	//ctx.save();
	//ctx.translate(camera.x,camera.y);

	if (playerLoaded && enemyLoaded && mossLoaded){
		
		for(i=0; i<blocks.length; i++){
			ctx.save();
			ctx.translate(-camera.x,-camera.y);

			if(blocks[i].img==1){
				ctx.drawImage(playerImg, blocks[i].x, blocks[i].y);
			}
			if(blocks[i].img==2){
				ctx.drawImage(enemyImg, blocks[i].x, blocks[i].y);
			}
			if(blocks[i].img==3){
				ctx.drawImage(dirtImg, blocks[i].x, blocks[i].y);
			}
			if(blocks[i].img==4){
				ctx.drawImage(grassdirtImg, blocks[i].x, blocks[i].y);
			}
			if(blocks[i].img==5){
				ctx.drawImage(mossImg, blocks[i].x, blocks[i].y);
			}
			
			if(blocks[i].img==6){
				
				//ctx.save();
				//enemy.x-player.x+canvas.width/2,enemy.y+enemyImg.height/2
				//ctx.translate(blocks[i].x-player.x+canvas.width/2,blocks[i].y+15);
				//ctx.translate(blocks[i].x+camera.x,blocks[i].y+camera.y);
				//ctx.rotate(player.x/28);
				//ctx.restore();
				ctx.drawImage(gooImg,goorotation,0,30,30, blocks[i].x, blocks[i].y, 30, 30);
				//ctx.restore();

				
			}ctx.restore();
		};
		//ctx.translate(enemy.x-player.x+canvas.width/2,enemy.y+enemyImg.height/2);
		//ctx.drawImage(playerImg,player.x,player.y);
		
		ctx.save();
    	ctx.translate(canvas.width/2+15,canvas.height/2+15);
    	ctx.rotate(player.x/28);
		ctx.drawImage(playerImg, -15, -15);
		//ctx.drawImage(playerImg,player.x+camera.x,player.y+camera.y);
		ctx.restore();
	};


	//ctx.restore();
	
	if (freedrawing==false){

		ctx.beginPath();
		ctx.lineWidth="2";
		ctx.strokeStyle="red";
		ctx.rect(Math.round(mouseX/playerImg.width)*playerImg.width-playerImg.width/2 , Math.round(mouseY/playerImg.width)*playerImg.width-playerImg.width/2,30,30);
		ctx.stroke();
		//ctx.drawImage(playerImg, Math.round(mouseX/playerImg.width)*playerImg.width-playerImg.width/2,Math.round(mouseY/playerImg.width)*playerImg.width-playerImg.width/2);
	};
	if (freedrawing==true){
		ctx.beginPath();
		ctx.lineWidth="2";
		ctx.strokeStyle="red";
		ctx.rect(mouseX-15,mouseY-15,30,30);
		ctx.stroke();
		
		//ctx.drawImage(playerImg,mouseX-playerImg.width/2,mouseY-playerImg.width/2)
	}

	


};

var rectDotCol;
var collisionRectDot = function(rectX,rectY,rectWidth,rectHeigth,dotX,dotY){
	if (rectX<=dotX && rectX+rectWidth>=dotX && rectY<=dotY && rectY+rectHeigth>=dotY){
		rectDotCol = true;
	}
	else {
		rectDotCol = false;
	}

}

var dirKeyPushed = false;


var player = {
	x:100,
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
};
var platformTopCol = function(a, b){
   if  ((b.y <= a.y+a.height)&&(b.y + 4 >= a.y+a.height) && (b.x<=a.x+a.width) && (b.x+30>=a.x))
      {platformTopColDetected = true;}
    else {platformTopColDetected = false;}  
  };
player.falling = true;

var gameOrEditor = function(){
	if (gameRunning){
		gameRunning = false;
	}else{gameRunning = true;}
}

var game = function(modifier){
for (i=0; i<blocks.length; i++) {
  platformTopCol(player, blocks[i]);
    
    if (platformTopColDetected==true && player.jumping==false && player.y+player.height>=blocks[i].y){
      player.jumping= false;
      player.falling=false;
      player.jumpSpeed=0;
      player.y=blocks[i].y-player.height;
      } 
     
    

    
  };
  if (goorotation>90){
					goorotation = 0;
				} else {
					goorotation+=100*modifier;
					if (goorotation>=90){
						goorotation = 0;
					}
				}

if (leftKey) {
    
    if (player.speed > -player.maxSpeed){
    player.speed-=player.acceleration * modifier;
    
    }
    player.lastDir="dirLeft";
  };
  
  if (rightKey) {
    
    if (player.speed < player.maxSpeed){
    player.speed+=player.acceleration * modifier;
    player.lastDir="dirRight";
    }
  };
  
  if (!leftKey && player.speed < 0) {
    player.speed+=player.deAcceleration * modifier;
    if (player.speed > -1){
      player.speed=0;
    };
  };
  
  if (!rightKey && player.speed > 0) {
    player.speed-=player.deAcceleration * modifier;
    if (player.speed < 1){
      player.speed=0;
    };
    
  };
  
  if (upKey) {
    
    if (player.jumping==false && player.falling== false) {
      player.lastJumpY = player.y;
      player.jumping=true;
      player.jumpSpeed=-player.jumpForce;
      player.doubleJump = false
      };

    if (upKey && (player.jumping || player.falling) && player.doubleJump==false && player.y<=player.lastJumpY-50) {
        player.doubleJump = true; 
        player.jumping=true;
        player.jumpSpeed-= player.jumpForce/3;
    };
  };

  
  
  
  if (player.jumping) {
      player.jumpSpeed+=player.gravity * modifier;
      if (player.jumpSpeed>=0){
        player.jumping = false;
        player.falling = true;
        
        };
  }; 

  if (player.falling) {
    player.jumpSpeed+=player.gravity *modifier;
  };
  if (player.y < canvas.height-player.height && player.jumping == false){
   player.falling=true;
  };
  
  if (player.y>=canvas.height-player.height){
    player.falling=false;
    player.y=canvas.height-player.height;
  };
  player.x+=player.speed * modifier
  player.y+=player.jumpSpeed * modifier
}


var editorcode = function(modifier){
	
	if (spaceKey){
		for(i=0; i<blocks.length; i++){
			collisionRectDot(blocks[i].x, blocks[i].y, 30, 30, mouseX+camera.x, mouseY+camera.y)
			if (rectDotCol == true){

				blocks.splice(i,1);
				
			}
		}	
		
		
	}

	if (upKey){
		camera.y-=1000*modifier;
		dirKeyPushed = true;
	}
	if (downKey){
		camera.y+=1000*modifier;
		dirKeyPushed = true;

	}
	if (leftKey){
		camera.x-=1000*modifier;
		dirKeyPushed = true;
	}
	if (rightKey){
		camera.x+=1000*modifier;
		dirKeyPushed = true;

	}

// If freedrawing is off and no arrow keys or WASD is pushed -> rounds camera y and x position to nearest number that is  divisible with number 30
	if (!rightKey && !leftKey && !upKey && !downKey && !freedrawing && dirKeyPushed){
		camera.y = Math.round(camera.y/30)*30
		camera.x = Math.round(camera.x/30)*30
	}
	/*for(i=0; i<blocks.length; i++){
		if (blocks[i].x<=800){
			blocks[i].x++;
		}
		if (blocks[i].x>800){

			blocks[i].x=0;	
		}
	}*/


};

var gameRunning = false;
var renderDeltaTime=1000;
var fps = 60;
var main = function () {
	var now = Date.now();
	var deltaTime = now - then;
	if(gameRunning){ 
		editorcode(deltaTime / 1000);
	  	render();
	  	/*if (renderDeltaTime>=1000/fps){
	  		render();
	  		renderDeltaTime=now-then;
	  		
	  	};*/
	};
	if(!gameRunning){ 
		game(deltaTime / 1000);
		camera.x = player.x-canvas.width/2;
		camera.y = player.y-canvas.height/2;
	  	render();
	  	/*if (renderDeltaTime>=1000/fps){
	  		render();
	  		renderDeltaTime=now-then;
	  		
	  	};*/
	};

  	//renderDeltaTime+=deltaTime;
  	then = now;
  	
  	
};

var then = Date.now();
setInterval(main, 1);