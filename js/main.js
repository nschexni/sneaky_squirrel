/*global $ */
'use strict';

//Spinner Class
function Spinner(){
	//Array to represent the game spinner
	this.wheel = [
		{
			id:0,
			name:'Sneaky Squire',
			// verb: placeholderFunction(),
			instruction:'You get to Steal an Acorn from another user!'
		},
		{
			id:1,
			name:'Sleepy Squire',
			// verb: placeholderFunction(),
			instruction:'Oh no! You lose your turn because you were sleeping. :('
		},
		{
			id:2,
			name:'Wind Storm',
			// verb: placeholderFunction(),
			instruction:'A strong wind storm blew all your acorns away. Tough break.'
		},
		{
			id:3,
			name:'Green',
			// verb: placeholderFunction(),
			instruction:'You get a <span style="color:green;">Green Acorn</span>'
		},
		{
			id:4,
			name:'Blue',
			// verb: placeholderFunction(),
			instruction:'You get a <span style="color:blue;">Blue Acorn</span>'
		},
		{
			id:5,
			name:'Red',
			// verb: placeholderFunction(),
			instruction:'You get a <span style="color:red;">Red Acorn</span>'
		},
		{
			id:6,
			name:'Purple',
			// verb: placeholderFunction(),
			instruction:'You get a <span style="color:purple;">Purple Acorn</span>'
		},
		{
			id:7,
			name:'Yellow',
			// verb: placeholderFunction(),
			instruction:'You get a <span style="color:yellow;">Yellow Acorn</span>'
		},
		{
			id:8,
			name:'Pick One',
			// verb: placeholderFunction(),
			instruction:'You get to pick an Acorn'
		},
		{
			id:9,
			name:'Pick Two',
			// verb: placeholderFunction(),
			instruction:'You get to pick Two Acorns'
		}
    ];

	//Spin the Wheel function. Returns a representation of landing on a color or event
	this.spin = function(){
		//get a random number
        var i = Math.floor((Math.random()*this.wheel.length));
        //feed that number to the wheel array to pull an individual item
        var result = this.wheel[i];
        return result;
    };
}

//Game Piece Class
function TreeStump(){
	var empty = Boolean(true);
	this.playerStump = [
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
}

//Player Class
function Player(name){
	this.name = name;
	this.stump = new TreeStump();
}


$(document).ready(function(){
	var spinner = new Spinner();


	function startGame(){
		var numberOfPlayers = prompt('How many players do we have?');
		console.log(numberOfPlayers);
		var playerName;
		var player;
		var players = [];
		for (var i = 1; i < numberOfPlayers.length; i++) {
			playerName = prompt('What is this player\'s name?');
			player[i] = new Player(playerName);
			players.push(player[i]);
		}
		return players;
	}
	
	//Begin the game by asking the number of players and their name
	startGame();



	//1. when a user clicks Spin the Wheel, pick a random wheelElement
		$('#spin_button').click(function(){
			var result = spinner.spin();
			$('.spin_action_result').html(result.instruction);
		});

	//2. check to see if the wheelElement is a Color or Event




//3. if it is a Color, check to see if the users treeStump already has the Color
//3a. add color to treeStump if it doesn't exist, else skip turn
//3b. check to see if the active players treeStump is full.  if so, they win. else move to next player
//4. if it is an Event, check to see which Event it is
//4a. if event is Sneaky Squire - steal an Acorn from another player
//4a_A  bring up list of every player containing thier Acorns
//4a_B  When the active Player selects an Acorn from another list, add it to thier treeStump
//4a_C  check to see if treeStump is full. if so, they win End turn
//5. if event is Sleepy Squire - skip turn
//6. if event is Wind Storm - remove all Acorns from active Players list


});



