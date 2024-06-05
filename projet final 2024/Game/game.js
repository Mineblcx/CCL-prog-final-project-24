//play area
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
let Level_1_Blue = "UnBought";
let Level_2_Blue = "UnBought";
let Level_3_Blue = "UnBought";
let Level_4_Blue = "UnBought";
let Level_5_Blue = "UnBought";
let Level_1_red = "UnBought";
let Level_2_red = "UnBought";
let Level_3_red = "UnBought";
let Level_4_red = "UnBought";
let Level_5_red = "UnBought";

// Unit Library
const Newbie = new Unit("Newbie", 1000, 200, 1.5, 50, 100, 50, 10, 5, 3);
const Knight = new Unit("Knight", 1500, 300, 1.5, 40, 60, 125, 45, 3, 5);
const Assasin = new Unit("Assasin", 1250, 400, 0.75, 35, 150, 500, 25, 5, 4);
const Sword = new Unit("Sword Master", 4000, 500, 1, 75, 125, 1500, 350, 2, 7.5);

class Player_1 {
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
    document.getElementById("money_blue").innerHTML = this.gold;
}

}
class Player_2 {
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
    document.getElementById("money_red").innerHTML = this.gold;
}

}

function moneyup_blue() {
  if (Level_1_Blue === "UnBought") {
    Level_1_Blue = "Bought";
    console.log(Level_1_Blue, "money upgrade 1");
  } else if (Level_2_Blue === "UnBought") {
    Level_2_Blue = "Bought";
    console.log(Level_2_Blue, "money upgrade 2");
  } else if (Level_3_Blue === "UnBought") {
    Level_3_Blue = "Bought";
    console.log(Level_3_Blue, "money upgrade 3");
  } else if (Level_4_Blue === "UnBought") {
    Level_4_Blue = "Bought";
    console.log(Level_4_Blue, "money upgrade 4");
  } else if (Level_5_Blue === "UnBought") {
    Level_5_Blue = "Bought";
    console.log(Level_5_Blue, "money upgrade 5");
  }}
  function moneyup_red() {
    if (Level_1_red === "UnBought") {
      Level_1_red = "Bought";
      console.log(Level_1_red, "money upgrade 1");
    } else if (Level_2_red === "UnBought") {
      Level_2_red = "Bought";
      console.log(Level_2_red, "money upgrade 2");
    } else if (Level_3_red === "UnBought") {
      Level_3_red = "Bought";
      console.log(Level_3_red, "money upgrade 3");
    } else if (Level_4_red === "UnBought") {
      Level_4_red = "Bought";
      console.log(Level_4_red, "money upgrade 4");
    } else if (Level_5 === "UnBought") {
      Level_5_red = "Bought";
      console.log(Level_5_red, "money upgrade 5");
    }}
//players
const Blue = new Player_1("Blue", 0, 0, "Blue");
const Red = new Player_2("Red", 0, 0, "Red");
// Generate money every second
setInterval(() => {
  if (Level_1_Blue === "UnBought") {
    Blue.generateMoney(Level_0_stats.amountper);
  } else if (Level_2_Blue === "UnBought") {
    Blue.generateMoney(Level_1_stats.amountper);
  } else if (Level_3_Blue === "UnBought") {
    Blue.generateMoney(Level_2_stats.amountper);
  } else if (Level_4_Blue === "UnBought") {
    Blue.generateMoney(Level_3_stats.amountper);
  } else if (Level_5_Blue === "UnBought") {
    Blue.generateMoney(Level_4_stats.amountper);
  } else { Blue.generateMoney(Level_5_stats.amountper); }
  if (Level_1_red === "UnBought") {
    Red.generateMoney(Level_0_stats.amountper);
  } else if (Level_2_red === "UnBought") {
    Red.generateMoney(Level_1_stats.amountper);
  } else if (Level_3_red === "UnBought") {
    Red.generateMoney(Level_2_stats.amountper);
  } else if (Level_4_red === "UnBought") {
    Red.generateMoney(Level_3_stats.amountper);
  } else if (Level_5_red === "UnBought") {
    Red.generateMoney(Level_4_stats.amountper);
  } else { Red.generateMoney(Level_5_stats.amountper); }
}, 1000);

//Cash library

// other libraries
const baseHP = 30000;
var time1 = new Date();
delta_time = time1.getTime();