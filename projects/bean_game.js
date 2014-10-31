 // U3.W7: Design your own Code Combat Mission

// This is a solo challenge

// Your mission description: You are farmer Jacque, so farm the beans where they need to be!
// Overall mission: Find the best place to plant some beans and plant them!
// Goals: find the right plot of land to work, dig a hole, plant the beans, water them, watch them grow, admire
// Characters:Farmer Jacque, The Ground
// Objects: Farmer Jacque, The Ground, Magic Beans
// Functions:a shovel, plant, water, admire, wait, equip

// Pseudocode
//create ground, farmer jacque, and magic beans objects
// ground object properties: digsLeft
// farmer jacque properties: in_pocket, strength, name, admired, equipped
//
//

// Initial Code





var strengthCounter = 4;
var wateringCounter = 0;
var farmerJacque = {inPocket: [" Magic Beans", " a Watering Pail", " a Shovel", " Lint", " a Dimensional Rift to the Secret Cow Level (Foreclosed)", " Pictures of the Fam"],
					strength: ["I am a broken man.", "Almost passed out trying to blink.", "All right, I guess...", "Phenomenal Cosmic Power!","Such Strength"],
					admired: false,
					equipped: "Nothing",
				};
var ground = {digsLeft: 5,
			  beansPlanted: false,
			  beanGrowth: [0,"eh", "yes!", "IT IS DONE"]
			};

function pocketSearch(){
	if (farmerJacque.admired == true){
		return "Enough work for now. Let's just admire this.";
	}
	else{
		itemFound = farmerJacque.inPocket[(Math.floor((Math.random() * 6)))];
		farmerJacque.equipped = itemFound;
		return("You equipped" + itemFound + ".");
	}
}

function checkPocket(){
	if (farmerJacque.admired == true){
		return "Enough work for now. Let's just admire this.";
	}
	else{
		return farmerJacque.inPocket;
	}
}

function praiseTheSun(){
	if (farmerJacque.admired == true){
		return "Enough work for now. Let's just admire this.";
	}
	else if (wateringCounter >= 3){
		farmerJacque.admired = true;
		return("Way to go, Farmer Jacque. Finally, you can rest.")
	}
	else{
		return("There's nothing to look at.")
	}
}
function water(){
	if (farmerJacque.admired == true){
		return "Enough work for now. Let's just admire this.";
	}
	else if (farmerJacque.equipped == " a Watering Pail"){
 		if (wateringCounter <= 2){
 			wateringCounter = wateringCounter + 1;
 			return(ground.beanGrowth[wateringCounter]);
 		}
 		else if (wateringCounter > 2){
 			return("All right, pump the brakes Little Mermaid. It's wet enough. Enjoy the show!");
 		}
 	}
 	else{
		return("How are you supposed to water with that?")
	}
}

function plant(){
	if (farmerJacque.admired == true){
		return "Enough work for now. Let's just admire this.";
	}
	else if (ground.beansPlanted == true){
		return("They're planted, now bury 'em!");
	}
	else if (farmerJacque.equipped == " Magic Beans"){
		if (ground.digsLeft == 0){
			ground.beansPlanted = true;
			return("IT HAS BEGUN!");
		}
		else{
			return("NOT DEEP ENOUGH, BUCKO!");
		}
	}
	else{

		return("How are you supposed to plant that?");
	}
}



function dig(){
	if (farmerJacque.admired == true){
		return "Enough work for now. Let's just admire this.";
	}
	else if (farmerJacque.equipped == " a Shovel"){
		if (strengthCounter == 0){
			return(farmerJacque.strength[strengthCounter]);
		}
		else if (ground.digsLeft > 0){
			ground.digsLeft = ground.digsLeft - 1;
			strengthCounter = strengthCounter - 1;
			return("Almost there! Keep Digging!");

		}
		else if (ground.digsLeft == 0){
			return("You've hit rock-bottom. Maybe plant something...");
		}
	}
	else{
		return("How are you supposed to dig with that?")
	}
}

function bury(){
	if (farmerJacque.admired == true){
		return "Enough work for now. Let's just admire this.";
	}
	else if (farmerJacque.equipped == " a Shovel"){
		if (strengthCounter == 0){
			return(farmerJacque.strength[strengthCounter]);
		}
		else if (ground.digsLeft != 5){
			ground.digsLeft = ground.digsLeft + 1;
			strengthCounter = strengthCounter - 1;
			return("Just fill the hole back up! Keep Burying!")
		}
		else if (ground.digsLeft == 5 && ground.beansPlanted == true){
			return("Pat me down and pass the watering can!");
		}
	}
	else{
		return("How are you supposed to bury with that?")
	}
}

function rest(){
	if (farmerJacque.admired == true){
		return "That'll do, Space Cowboy.";

	}
	else if (strengthCounter < 4){
		strengthCounter = 4;
		return(farmerJacque.strength[strengthCounter]);
	}
	else{
		return("Quit Slacking Off!");
	}
}

// Refactored Code

var strengthCounter = 4;
var wateringCounter = 0;
var farmerJacque = {inPocket: [" Magic Beans", " a Watering Pail", " a Shovel", " Lint", " a Dimensional Rift to the Secret Cow Level (Foreclosed)", " Pictures of the Fam"],
					strength: ["I am a broken man.", "Almost passed out trying to blink.", "All right, I guess...", "Phenomenal Cosmic Power!","Such Strength"],
					admired: false,
					equipped: "Nothing",
				};
var ground = {digsLeft: 5,
			  beansPlanted: false,
			  beanGrowth: [0,"eh", "yes!", "IT IS DONE"]
			};

function pocketSearch(){
	if (farmerJacque.admired == true){
		return "Enough work for now. Let's just admire this.";
	}
	else{
		itemFound = farmerJacque.inPocket[(Math.floor((Math.random() * 6)))];
		farmerJacque.equipped = itemFound;
		return("You equipped" + itemFound + ".");
	}
}

function checkPocket(){
	if (farmerJacque.admired == true){
		return "Enough work for now. Let's just admire this.";
	}
	else{
		return farmerJacque.inPocket;
	}
}

function praiseTheSun(){
	if (farmerJacque.admired == true){
		return "Enough work for now. Let's just admire this.";
	}
	else if (wateringCounter >= 3){
		farmerJacque.admired = true;
		return("Way to go, Farmer Jacque. Finally, you can rest.")
	}
	else{
		return("There's nothing to look at.")
	}
}
function water(){
	if (farmerJacque.admired == true){
		return "Enough work for now. Let's just admire this.";
	}
	else if (farmerJacque.equipped == " a Watering Pail"){
 		if (wateringCounter <= 2){
 			wateringCounter++;
 			return(ground.beanGrowth[wateringCounter]);
 		}
 		else if (wateringCounter > 2){
 			return("All right, pump the brakes Little Mermaid. It's wet enough. Enjoy the show!");
 		}
 	}
 	else{
		return("How are you supposed to water with that?")
	}
}

function plant(){
	if (farmerJacque.admired == true){
		return "Enough work for now. Let's just admire this.";
	}
	else if (ground.beansPlanted == true){
		return("They're planted, now bury 'em!");
	}
	else if (farmerJacque.equipped == " Magic Beans"){
		if (ground.digsLeft == 0){
			ground.beansPlanted = true;
			return("IT HAS BEGUN!");
		}
		else{
			return("NOT DEEP ENOUGH, BUCKO!");
		}
	}
	else{

		return("How are you supposed to plant that?");
	}
}



function dig(){
	if (farmerJacque.admired == true){
		return "Enough work for now. Let's just admire this.";
	}
	else if (farmerJacque.equipped == " a Shovel"){
		if (strengthCounter == 0){
			return(farmerJacque.strength[strengthCounter]);
		}
		else if (ground.digsLeft > 0){
			ground.digsLeft--;
			strengthCounter--;
			return("Almost there! Keep Digging!");

		}
		else if (ground.digsLeft == 0){
			return("You've hit rock-bottom. Maybe plant something...");
		}
	}
	else{
		return("How are you supposed to dig with that?")
	}
}

function bury(){
	if (farmerJacque.admired == true){
		return "Enough work for now. Let's just admire this.";
	}
	else if (farmerJacque.equipped == " a Shovel"){
		if (strengthCounter == 0){
			return(farmerJacque.strength[strengthCounter]);
		}
		else if (ground.digsLeft != 5){
			ground.digsLeft++;
			strengthCounter--;
			return("Just fill the hole back up! Keep Burying!")
		}
		else if (ground.digsLeft == 5 && ground.beansPlanted == true){
			return("Pat me down and pass the watering can!");
		}
	}
	else{
		return("How are you supposed to bury with that?")
	}
}

function rest(){
	if (farmerJacque.admired == true){
		return "That'll do, Space Cowboy.";

	}
	else if (strengthCounter < 4){
		strengthCounter = 4;
		return(farmerJacque.strength[strengthCounter]);
	}
	else{
		return("Quit Slacking Off!");
	}
}




// Reflection
//I got a little carried away with this one, but it was a lot
//of fun to mess around with object properties! And now I've got
//my first functioning JS game online, which is even cooler, I think.
//You know what, truth be told I enjoy this aproach to coding rather
//than Ruby classes. I don't know why, but it makes a lot of sense to me,
//even though it is darn near almost the same thing. I think it's the syntax?
// 
//Anyways, the worst part of this assignment was figuring out how to get html
//buttons to change the html when pushed using the JS code, but I figured it
//out all right. See if you can win! (You win when the game calls you a space cowboy).