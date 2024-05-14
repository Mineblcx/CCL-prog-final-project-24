/* @format */

// Define player objects
const canvas = document.getElementById("gameCanvas");

const player1 = {
	name: "Red",
	gold: 100,
	units: [],
};

const player2 = {
	name: "Blue",
	gold: 100,
	units: [],
};

// Define unit class
class Unit {
	constructor(name, cost, damage, health, speed) {
		this.name = name;
		this.cost = cost;
		this.damage = damage;
		this.health = health;
		this.speed = speed;
	}
}
// Create some sample units
const Newbie = new Unit("Newbie", 10, 5, 25, 100);
const Knight = new Unit("Knight", 20, 10, 50, 75);
const Assasin = new Unit("Assasin", 25, 15, 75, 150);
const Sword_Master = new Unit("Sword Master", 40, 25, 125, 50);
// Function to buy units
function buyUnit(player, unit) {
	if (player.gold >= unit.cost) {
		player.gold -= unit.cost;
		player.units.push(unit);
		console.log(`${player.name} bought a ${unit.name}`);
	} else {
		console.log(
			`${player.name} does not have enough gold to buy a ${unit.name}`
		);
	}
}
document.addEventListener("keydown", function (event) {
	if (event.key === "1") {
		console.log(buyUnit(player1, Newbie));
	} else if (event.key === "!") {
		console.log(buyUnit(player2, Newbie));
	} else if (event.key === "2") {
		console.log(buyUnit(player1, Knight));
	} else if (event.key === "@") {
		console.log(buyUnit(player2, Knight));
	} else if (event.key === "3") {
		console.log(buyUnit(player1, Assasin));
	} else if (event.key === "#") {
		console.log(buyUnit(player2, Assasin));
	} else if (event.key === "4") {
		console.log(buyUnit(player1, Sword_Master));
	} else if (event.key === "$") {
		console.log(buyUnit(player2, Sword_Master));
	} else if (event.key === "b" || event.key === "B") {
		console.log(battle(player1, player2));
	}
});

// Simulate a battle
function battle(player1, player2) {
	let player1TotalDamage = player1.units.reduce(
		(total, unit) => total + unit.damage,
		0
	);
	let player2TotalDamage = player2.units.reduce(
		(total, unit) => total + unit.damage,
		0
	);

	if (player1TotalDamage == player2TotalDamage) {
		console.log(`The battle is a Draw!`);
		console.log("Blue did", player2TotalDamage, "Dammage");
		console.log("Red did", player1TotalDamage, "Dammage");
	} else if (player1TotalDamage > player2TotalDamage) {
		console.log(`${player1.name} wins the battle!`);
		console.log("Blue did", player2TotalDamage, "Dammage");
		console.log("Red did", player1TotalDamage, "Dammage");
	} else if (player2TotalDamage > player1TotalDamage) {
		console.log(`${player2.name} wins the battle!`);
		console.log("Blue did", player2TotalDamage, "Dammage");
		console.log("Red did", player1TotalDamage, "Dammage");
	} else {
		console.log("error");
	}
}
