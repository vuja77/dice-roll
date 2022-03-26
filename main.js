const rollBtn = document.querySelector(".roll-btn");
const holdBtn = document.querySelector(".hold-btn");
const newBtn = document.querySelector(".new-btn");
const number = document.querySelector("#number-display");
const scoreDisplay1 = document.querySelector("#score-display-1");
const scoreDisplay2 = document.querySelector("#score-display-2");
const ply1 = document.getElementById("ply1");
const ply2 = document.getElementById("ply2");
const win1 = document.getElementById("win1");
const win2 = document.getElementById("win2");
let score = 0;
let score1 = 0;
let score2 = 0;
let canPlay = false;
let currentPlayer = 1;
let nb = 0;
let dice = document.getElementById("dice");
rollBtn.addEventListener("click", function () {
if(canPlay == true) {
	//RANDOM DICE
	nb = Math.floor(Math.random() * 5) + 1;
	score += nb;
	dice.innerHTML="<img src=dice"+nb+".png>";
	//koji je igrac
	if(currentPlayer == 1) {
		score1 = score;
		scoreDisplay1.innerHTML = score;
	} else {
		score2 = score;
		scoreDisplay2.innerHTML = score;
	}  
	//pobjeda-poraz
	if(nb < 2 && currentPlayer == 1) {
		score1 = 0;
		score = 0;
		currentPlayer = 2;
		scoreDisplay1.innerHTML = 0;
		ply2.classList.add("active");
	 	ply1.classList.remove("active");
	} else if(nb < 2 && currentPlayer == 2) {
		win1.innerHTML = "WINNER";
		win2.innerHTML = "LOSER";
		canPlay = false;
	}
}	
});
//HOLD FUNKCIJA
holdBtn.addEventListener("click", function () {
if(canPlay == true) {
	score = 0;
	 if(currentPlayer==2) {
	 	if(score1 > score2) {
	 		win1.innerHTML = "WINNER";
			win2.innerHTML = "LOSER";
			canPlay = false;
			rollBtn.classList.add("hidden");
			holdBtn.classList.add("hidden");
	 	} else {
	 		win2.innerHTML = "WINNER";
			win1.innerHTML = "LOSER";
			canPlay = false;
			rollBtn.classList.add("hidden");
			holdBtn.classList.add("hidden");
	 	}
	 } else {
	 	currentPlayer = 2;
	 }
	 if(currentPlayer==2) {
	ply2.classList.add("active");
	 	ply1.classList.remove("active");
	} else {
	ply1.classList.add("active");
	 	ply2.classList.remove("active")
	}
}
});
newBtn.addEventListener("click", function () {
	 currentPlayer = 1;
	 score = 0;
	 scoreDisplay1.innerHTML = 0;
	 scoreDisplay2.innerHTML = 0;
	 ply1.classList.add("active");
	 ply2.classList.remove("active");
	 rollBtn.classList.remove("hidden");
	 holdBtn.classList.remove("hidden");
	 canPlay = true;
});

if(currentPlayer==2) {
	ply2.classList.add("active");
	 	ply1.classList.remove("active");
} else {
	ply1.classList.add("active");
	 	ply2.classList.remove("active")
}

if(canPlay == true) {

} else {
	rollBtn.classList.add("hidden");
	holdBtn.classList.add("hidden");
}