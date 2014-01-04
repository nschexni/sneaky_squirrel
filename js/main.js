/*global $ */
'use strict';

//---Objects---//

//Player Class
function Player(name){
	this.name = name;
	this.stump = new TreeStump();
}

//ask for number of players and each players name
function startGame(){
		var numberOfPlayers = prompt('How many players do we have?'),playerName = '',player = {};
		//sanity check
		console.log('num of players is ' + numberOfPlayers);
		for (var i = 0; i < numberOfPlayers; i++) {
			playerName = prompt('What is this player '+ (i+1) +'\'s name?');
			player[i] = new Player(playerName);
			players.push(player[i]);
		}
		return players;
	}

//Makes a list of the players
function listPlayers(){
	var list = [],playerName,playerBox;
	for (var i = 0; i < players.length; i++) {
		playerName = players[i].name;
		playerBox = '<div class="playerBox" >'+playerName+'</div>';
		list.push(playerBox);
	}
	return list;
}

//Spinner Class.  
//Represents the spin wheel. 
//Returns: id, name, instruction, and action of spin result
function Spinner() {
	//Array to represent the game spinner
	this.wheel = [
		{
			id: 0,
			name: 'Sneaky Squire',
			// verb: placeholderFunction(),
			instruction: 'You get to Steal an Acorn from another user!',
			action: 'steal'
		},
		{
			id: 1,
			name: 'Sleepy Squire',
			// verb: placeholderFunction(),
			instruction: 'Oh no! You lose your turn because you were sleeping. :(',
			action: 'skip'
		},
		{
			id: 2,
			name: 'Wind Storm',
			// verb: placeholderFunction(),
			instruction: 'A strong wind storm blew all your acorns away. Tough break.',
			action: 'clear'
		},
		{
			id: 3,
			name: 'Green',
            color:'green',
            //verb: addColorSquare(this.color),
			instruction: 'You get a <span style="color:green;">Green Acorn</span>'
		},
		{
			id: 4,
			name: 'Blue',
			color:'blue',
			// verb: placeholderFunction(),
			instruction: 'You get a <span style="color:blue;">Blue Acorn</span>'
		},
		{
			id: 5,
			name: 'Red',
			color:'red',
			// verb: placeholderFunction(),
			instruction: 'You get a <span style="color:red;">Red Acorn</span>'
		},
		{
			id: 6,
			name: 'Purple',
			color:'purple',
			// verb: placeholderFunction(),
			instruction: 'You get a <span style="color:purple;">Purple Acorn</span>'
		},
		{
			id: 7,
			name: 'Yellow',
			color:'yellow',
			// verb: placeholderFunction(),
			instruction: 'You get a <span style="color:yellow;">Yellow Acorn</span>'
		},
		{
			id: 8,
			name: 'Pick One',
			// verb: placeholderFunction(),
			instruction: 'You get to pick an Acorn',
			action: 'pick_one'
		},
		{
			id: 9,
			name: 'Pick Two',
			// verb: placeholderFunction(),
			instruction: 'You get to pick Two Acorns',
			action: 'pick_two'
		}
    ];

	//Spin the Wheel function. Returns a representation of landing on a color or event
	this.spin = function () {
		//get a random number
        var i = Math.floor((Math.random()*this.wheel.length));
        //feed that number to the wheel array to pull an individual item
        var result = this.wheel[i];
        return result;
    };
}

//function to check is player already has the acorn color in their stump
function acornCheck(player, result){
	for (var k = players[player].stump.space.length - 1; k >= 0; k--) {
		if(players[player].stump.space[k].color === result.color){
			if(players[player].stump.space[k].isEmpty === true){
				players[player].stump.space[k].isEmpty = false;
			}else{
				console.log('You already have this Acorn!');
			}
		}
	};	
}

//Game Piece Class
function TreeStump() {
	var empty = Boolean(true);
	this.space = [
		{
			color: 'red',
			isEmpty: empty
		},
		{
			color: 'blue',
			isEmpty: empty
		},
		{
			color: 'yellow',
			isEmpty: empty
		},
		{
			color: 'green',
			isEmpty: empty
		},
		{
			color: 'purple',
			isEmpty: empty
		}
	];

	//display in html
	$('.playerBox').html('<p>playerCard</p>');
}

//manage who's turn it is
function playerTurn(){
	var numOfPlayers = players.length;
	var currentPlayer = players[0];
	return currentPlayer;




	// for (var i = 0; i <= numOfPlayers - 1; i++) {
	// 	players.player[i++];
	// };
}

//---Declare Variables---//

//holds the list of players
var players = []
	,spinner = new Spinner()
;




//Begin the game by asking the number of players and their name
startGame();

$(document).ready(function(){
	//make the players name visible
	$('.player_table').append(listPlayers());
	//who's turn is it?	
	for(var j = 0; j < players.length;j++){
		//print who's turn it is
		$('.player_turn_information').html('It is player: '+ players[j].name +'\'s turn.');
		//1. when a user clicks Spin the Wheel, pick a random wheelElement
		$('#spin_button').click(function(){
			var result = spinner.spin();
			$('.spin_action_result').html(result.instruction);
			//2. check to see if the wheelElement is a Color or Event
			var colorOrAction = result.hasOwnProperty('color');
			if(colorOrAction){
				//sanity check
				console.log(result.color);
				console.log(players[j].name);
				//3. if it is a Color, check to see if the users treeStump already has the Color
				acornCheck(j,result);	
			}
		});
		return;
	}
});






//3a. add color to treeStump if it doesn't exist, else skip turn
//3b. check to see if the active players treeStump is full.  if so, they win. else move to next player
//4. if it is an Event, check to see which Event it is
//4a. if event is Sneaky Squire - steal an Acorn from another player
//4a_A  bring up list of every player containing thier Acorns
//4a_B  When the active Player selects an Acorn from another list, add it to thier treeStump
//4a_C  check to see if treeStump is full. if so, they win End turn
//5. if event is Sleepy Squire - skip turn
//6. if event is Wind Storm - remove all Acorns from active Players list



