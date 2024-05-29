

//play area
const canvas = document.getElementById("gameCanvas");
console.log("should work");

// While loop with time measurement
while (gameStatus === "Running") {
  let currentTime = new Date();
  let elapsedTime = currentTime.getTime() - delta_time;

  // Update game logic based on elapsed time
  //...

  // Update delta_time for the next frame
  delta_time = currentTime.getTime();
}

  function ButtonTest() {
    Player_1.buyNewbie();
  }

class Unit {
  constructor(name, hp, atkdmg, atkspd, atkrng, WalkSPD, cost, killgain, spwammount, spwtimer) {
    //name, Health Points, Attack Dammage, Attack speed, Attack range (pixels), Walk speed(Pixels per seconds), cost, money gained from enemy kills, spawn ammount, spawn timer
    this.name = name;
    this.hp = hp;
    this.atkdmg = atkdmg;
    this.atkspd = atkspd * 1000;
    this.atkrng = atkrng;
    this.WalkSPD = WalkSPD;
    this.cost = cost;
    this.killgain = killgain;
    this.spwammount = spwammount;
    this.spwtimer = spwtimer * 1000;
  }
}
class Gold {
  constructor(amountper, price) {
    this.amountper = amountper;
    this.price = price;
  }
}
const Level_0_stats = new Gold(5, 0);
const Level_1_stats = new Gold(10, 150);
const Level_2_stats = new Gold(15, 450);
const Level_3_stats = new Gold(20, 1125);
const Level_4_stats = new Gold(25, 1050);
const Level_5_stats = new Gold(30, 2000);
let Level_1 = "UnBought";
let Level_2 = "UnBought";
let Level_3 = "UnBought";
let Level_4 = "UnBought";
let Level_5 = "UnBought";

// Unit Library
const Newbie = new Unit("Newbie", 1000, 200, 1.5, 50, 100, 50, 10, 5, 3);
const Knight = new Unit("Knight", 1500, 300, 1.5, 40, 60, 125, 45, 3, 5);
const Assasin = new Unit("Assasin", 1250, 400, 0.75, 35, 150, 500, 25, 5, 4);
const Sword = new Unit("Sword Master", 4000, 500, 1, 75, 125, 1500, 350, 2, 7.5);

class Player {
  constructor(name, gold, troopamnt, color) {
    this.name = name;
    this.gold = gold;
    this.troopamnt = troopamnt;
    this.color = color;
  }

  buyNewbie() {
    if (this.gold >= Newbie.cost) {
      this.gold -= Newbie.cost;
      this.troopamnt += Newbie.spwammount;
    } else {
      console.log(`${this.name} does not have enough gold to buy Newbies.`);
    }
  }
  buyKnight() {
    if (this.gold >= Knight.cost) {
      this.gold -= Knight.cost;
      this.troopamnt += Knight.spwammount;
    } else {
      console.log(`${this.name} does not have enough gold to buy Newbies.`);
    }
  }
  buyAssasin() {
    if (this.gold >= Assasin.cost) {
      this.gold -= Assasin.cost;
      this.troopamnt += Assasin.spwammount;
    } else {
      console.log(`${this.name} does not have enough gold to buy Newbies.`);
    }
  }
  buySword() {
    if (this.gold >= Sword.cost) {
      this.gold -= Sword.cost;
      this.troopamnt += Sword.spwammount;
    } else {
      console.log(`${this.name} does not have enough gold to buy Newbies.`);
    }
  }

  generateMoney(moneyRate) {
    this.gold += moneyRate;
    console.log(`${this.name} ${moneyRate}G/s. Total gold: ${this.gold}. Total Troops: ${this.troopamnt}.`);
  }


}
function Moneyup() {
  if (Level_1 === "UnBought") {
    Level_1 = "Bought";
    console.log(Level_1, "money upgrade 1");
  } else if (Level_2 === "UnBought") {
    Level_2 = "Bought";
    console.log(Level_2, "money upgrade 2");
  } else if (Level_3 === "UnBought") {
    Level_3 = "Bought";
    console.log(Level_3, "money upgrade 3");
  } else if (Level_4 === "UnBought") {
    Level_4 = "Bought";
    console.log(Level_4, "money upgrade 4");
  } else if (Level_5 === "UnBought") {
    Level_5 = "Bought";
    console.log(Level_5, "money upgrade 5");
  }}
//players
const Player_1 = new Player("Blue", 0, 0, "Blue");
// Generate money every second
setInterval(() => {
  if (Level_1 === "UnBought") {
    Player_1.generateMoney(Level_0_stats.amountper);
  } else if (Level_2 === "UnBought") {
    Player_1.generateMoney(Level_1_stats.amountper);
  } else if (Level_3 === "UnBought") {
    Player_1.generateMoney(Level_2_stats.amountper);
  } else if (Level_4 === "UnBought") {
    Player_1.generateMoney(Level_3_stats.amountper);
  } else if (Level_5 === "UnBought") {
    Player_1.generateMoney(Level_4_stats.amountper);
  } else { Player_1.generateMoney(Level_5_stats.amountper); }
}, 1000);

//Cash library

// other libraries
const baseHP = 30000;
var time1 = new Date();
delta_time = time1.getTime();