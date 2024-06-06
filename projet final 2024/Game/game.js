

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
//variables
let Blue_DMG_1 = 0;
let Blue_DMG_2 = 0;
let Blue_DMG_3 = 0;
let Blue_DMG_4 = 0;
let Red_DMG_1 = 0;
let Red_DMG_2 = 0;
let Red_DMG_3 = 0;
let Red_DMG_4 = 0;
let Newbie_amnt_B = 0;
let Knight_amnt_B = 0;
let Assasin_amnt_B = 0;
let SwordMaster_amnt_B = 0;
let Newbie_amnt_R = 0;
let Knight_amnt_R = 0;
let Assasin_amnt_R = 0;
let SwordMaster_amnt_R = 0;
let Health_Troops_B = 0;
let Health_Base_B = 50000;
let Health_Troops_R = 0;
let Health_Base_R = 50000;
class Unit {
  constructor(
    name,
    hp,
    atkdmg,
    cost,
    spwammount,
  ) {
    //name, Health Points, Attack Dammage, Attack speed, Attack range (pixels), Walk speed(Pixels per seconds), cost, money gained from enemy kills, spawn ammount, spawn timer
    this.name = name;
    this.hp = hp;
    this.atkdmg = atkdmg;
    this.cost = cost;
    this.spwammount = spwammount;
  }
}
const Newbie = new Unit("Newbie", 500, 200, 50, 5);
const Knight = new Unit("Knight", 1500, 300, 125, 3);
const Assasin = new Unit("Assasin", 750, 400, 500, 5);
const Sword = new Unit(
  "Sword Master",
  4000,
  100,
  1500,
  2
);

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
      this.troopamnt += Newbie.hp * Newbie.spwammount;
      Newbie_amnt_B += Newbie.spwammount;
      Health_Troops_B += Newbie.hp * Newbie.spwammount;

    } else {
      let originaltext = document.getElementById("costN_B").innerHTML;
      document.getElementById("costN_B").innerHTML = "Not Enough";
      setTimeout(() => {
        document.getElementById("costN_B").innerHTML = originaltext;
      }, 2500);
    }
  }
  buyKnight() {
    if (this.gold >= Knight.cost) {
      this.gold -= Knight.cost;
      this.troopamnt += Knight.spwammount;
      Knight_amnt_B += Knight.spwammount;
    } else {
      let originaltext = document.getElementById("costK_B").innerHTML;
      document.getElementById("costK_B").innerHTML = "Not Enough";
      setTimeout(() => {
        document.getElementById("costK_B").innerHTML = originaltext;
      }, 2500);
    }
  }
  buyAssasin() {
    if (this.gold >= Assasin.cost) {
      this.gold -= Assasin.cost;
      this.troopamnt += Assasin.spwammount;
      Assasin_amnt_B += Assasin.spwammount;
    } else {
      let originaltext = document.getElementById("costA_B").innerHTML;
      document.getElementById("costA_B").innerHTML = "Not Enough";
      setTimeout(() => {
        document.getElementById("costA_B").innerHTML = originaltext;
      }, 2500);
    }
  }
  buySword() {
    if (this.gold >= Sword.cost) {
      this.gold -= Sword.cost;
      this.troopamnt += Sword.spwammount;
      SwordMaster_amnt_B += Sword.spwammount;
    } else {
      let originaltext = document.getElementById("costSM_B").innerHTML;
      document.getElementById("costSM_B").innerHTML = "Not Enough";
      setTimeout(() => {
        document.getElementById("costSM_B").innerHTML = originaltext;
      }, 2500);
    }
  }

  generateMoney(moneyRate) {
    this.gold += moneyRate;
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
      this.troopamnt += Newbie.hp * Newbie.spwammount;
      Newbie_amnt_R += Newbie.spwammount;
      Health_Troops_R += Newbie.hp * Newbie.spwammount;

    } else {
      let originaltext = document.getElementById("costN_B").innerHTML;
      document.getElementById("costN_R").innerHTML = "Not Enough";
      setTimeout(() => {
        document.getElementById("costN_R").innerHTML = originaltext;
      }, 2500);
    }
  }
  buyKnight() {
    if (this.gold >= Knight.cost) {
      this.gold -= Knight.cost;
      this.troopamnt += Knight.spwammount;
      Knight_amnt_R += Knight.spwammount;
    } else {
      let originaltext = document.getElementById("costK_B").innerHTML;
      document.getElementById("costK_R").innerHTML = "Not Enough";
      setTimeout(() => {
        document.getElementById("costK_R").innerHTML = originaltext;
      }, 2500);
    }
  }
  buyAssasin() {
    if (this.gold >= Assasin.cost) {
      this.gold -= Assasin.cost;
      this.troopamnt += Assasin.spwammount;
      Assasin_amnt_R += Assasin.spwammount;
    } else {
      let originaltext = document.getElementById("costA_B").innerHTML;
      document.getElementById("costA_R").innerHTML = "Not Enough";
      setTimeout(() => {
        document.getElementById("costA_R").innerHTML = originaltext;
      }, 2500);
    }
  }
  buySword() {
    if (this.gold >= Sword.cost) {
      this.gold -= Sword.cost;
      this.troopamnt += Sword.spwammount;
      SwordMaster_amnt_R += Sword.spwammount;
    } else {
      let originaltext = document.getElementById("costSM_B").innerHTML;
      document.getElementById("costSM_R").innerHTML = "Not Enough";
      setTimeout(() => {
        document.getElementById("costSM_R").innerHTML = originaltext;
      }, 2500);
    }
  }

  generateMoney(moneyRate) {
    this.gold += moneyRate;
    document.getElementById("money_red").innerHTML = this.gold;
  }
}
function BuyN_Blue() {
  Blue.buyNewbie();
}
function BuyK_Blue() {
  Blue.buyKnight();
}
function BuyA_Blue() {
  Blue.buyAssasin();
}
function BuySM_Blue() {
  Blue.buySword();
}
function BuyN_Red() {
  Red.buyNewbie();
}
function BuyK_Red() {
  Red.buyKnight();
}
function BuyA_Red() {
  Red.buyAssasin();
}
function BuySM_Red() {
  Red.buySword();
}
function moneyup_blue() {
  if (Level_1_Blue === "UnBought" && Level_1_stats.price <= Blue.gold) {
    Level_1_Blue = "Bought";
    Blue.gold -= Level_1_stats.price;
    document.getElementById("moneylvl_blue").innerHTML = "1";
  } else if (Level_2_Blue === "UnBought" && Level_2_stats.price <= Blue.gold) {
    Level_2_Blue = "Bought";
    Blue.gold -= Level_2_stats.price;
    document.getElementById("moneylvl_blue").innerHTML = "2";
  } else if (Level_3_Blue === "UnBought" && Level_3_stats.price <= Blue.gold) {
    Level_3_Blue = "Bought";
    Blue.gold -= Level_3_stats.price;
    document.getElementById("moneylvl_blue").innerHTML = "3";
  } else if (Level_4_Blue === "UnBought" && Level_4_stats.price <= Blue.gold) {
    Level_4_Blue = "Bought";
    Blue.gold -= Level_4_stats.price;
    document.getElementById("moneylvl_blue").innerHTML = "4";
  } else if (Level_5_Blue === "UnBought" && Level_5_stats.price <= Blue.gold) {
    Level_5_Blue = "Bought";
    Blue.gold -= Level_5_stats.price;
    document.getElementById("moneylvl_blue").innerHTML = "5";
  } else {
    let originaltext = document.getElementById("monup_b").innerHTML;
    document.getElementById("monup_b").innerHTML =
      "Not Enough Gold | Lvl1 - 150 | Lvl2 - 450 | Lvl3 - 1125 | Lvl4 - 1050 | Lvl5 -  2000";
    setTimeout(() => {
      document.getElementById("monup_b").innerHTML = originaltext;
    }, 2500);
  }
}
function moneyup_red() {
  if (Level_1_red === "UnBought" && Level_1_stats.price <= Red.gold) {
    Level_1_red = "Bought";
    Red.gold -= Level_1_stats.price;
    document.getElementById("moneylvl_red").innerHTML = "1";
  } else if (Level_2_red === "UnBought" && Level_2_stats.price <= Red.gold) {
    Level_2_red = "Bought";
    Red.gold -= Level_2_stats.price;
    document.getElementById("moneylvl_red").innerHTML = "2";
  } else if (Level_3_red === "UnBought" && Level_3_stats.price <= Red.gold) {
    Level_3_red = "Bought";
    document.getElementById("moneylvl_red").innerHTML = "3";
    Red.gold -= Level_3_stats.price;
  } else if (Level_4_red === "UnBought" && Level_4_stats.price <= Red.gold) {
    Level_4_red = "Bought";
    Red.gold -= Level_4_stats.price;
    document.getElementById("moneylvl_red").innerHTML = "4";
  } else if (Level_5_red === "UnBought" && Level_5_stats.price <= Red.gold) {
    Level_5_red = "Bought";
    Red.gold -= Level_5_stats.price;
    document.getElementById("moneylvl_red").innerHTML = "5";
  } else {
    let originaltext = document.getElementById("monup_r").innerHTML;
    document.getElementById("monup_r").innerHTML =
      "Not Enough Gold | Lvl1 - 150 | Lvl2 - 450 | Lvl3 - 1125 | Lvl4 - 1050 | Lvl5 -  2000";
    setTimeout(() => {
      document.getElementById("monup_r").innerHTML = originaltext;
    }, 2500);
  }
}
//players
const Blue = new Player_1("Blue", 0, 0, "Blue");
const Red = new Player_2("Red", 0, 0, "Red");
// Generate money every second
setInterval(() => {
  //money generation
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
  } else {
    Blue.generateMoney(Level_5_stats.amountper);
  }
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
  } else {
    Red.generateMoney(Level_5_stats.amountper);
  }
  //dammages

  if (SwordMaster_amnt_B > 0) {
    let Blue_DMG_1 = Sword.atkdmg * SwordMaster_amnt_B;
    confirm(Blue_DMG_1);
  }
  else { let Blue_DMG_1 = 0; Blue_DMG_1;}
  if (SwordMaster_amnt_R > 0) {
    let Red_DMG_1 = Sword.atkdmg * SwordMaster_amnt_R;
    Red_DMG_1;
  }
  else { let Red_DMG_1 = 0; Red_DMG_1;}
  if (Assasin_amnt_B > 0) {
    let Blue_DMG_2 = Assasin.atkdmg * Assasin_amnt_B;
    Blue_DMG_2;
  }
  else { let Blue_DMG_2 = 0; Blue_DMG_2;} 
  if (Assasin_amnt_R > 0) {
    let Red_DMG_2 = Assasin.atkdmg * Assasin_amnt_R;
    Red_DMG_2;
  }
  else { let Red_DMG_2 = 0; Red_DMG_2;}
  if (Knight_amnt_B > 0) {
    let Blue_DMG_3 = Knight.atkdmg * Knight_amnt_B;
    Blue_DMG_3;
  }
  else { let Blue_DMG_3 = 0; Blue_DMG_3;} 
  if (Knight_amnt_R > 0) {
    let Red_DMG_3 = Knight.atkdmg * Knight_amnt_R;
    Red_DMG_3;
  }
  else { let Red_DMG_3 = 0; Red_DMG_3;}
  if (Newbie_amnt_B > 0) {
    let Blue_DMG_4 = Newbie.atkdmg * Newbie_amnt_B;
    Blue_DMG_4;
  }
  else { let Blue_DMG_4 = 0; Blue_DMG_4;}
  if (Newbie_amnt_R > 0) {
    let Red_DMG_4 = Newbie.atkdmg * Newbie_amnt_R;
    Red_DMG_4;
  }
  else { let Red_DMG_4 = 0; Red_DMG_4;}
  let Tot_Blue_DMG = Blue_DMG_1 + Blue_DMG_2 + Blue_DMG_3 + Blue_DMG_4;
  let Tot_Red_DMG = Red_DMG_1 + Red_DMG_2 + Red_DMG_3 + Red_DMG_4;
  console.log("Blue DMG: " + Tot_Blue_DMG + " | Red DMG: " + Tot_Red_DMG);
  let base_final_hp_blue = "N/A";
  let base_final_hp_red = "N/A";
  //updates
  document.getElementById("troop_blue").innerHTML = Blue.troopamnt;
  document.getElementById("troop_red").innerHTML = Red.troopamnt;
  document.getElementById("Troopamnt_type_N_B").innerHTML = "Newbies: " + Newbie_amnt_B;
  document.getElementById("Troopamnt_type_K_B").innerHTML = "Knigts: " + Knight_amnt_B;
  document.getElementById("Troopamnt_type_A_B").innerHTML = "Assasin: " + Assasin_amnt_B;
  document.getElementById("Troopamnt_type_SM_B").innerHTML = "Sword Masters: " + SwordMaster_amnt_B;
  document.getElementById("Troopamnt_type_N_R").innerHTML = Newbie_amnt_R + " :Newbies";
  document.getElementById("Troopamnt_type_K_R").innerHTML = Knight_amnt_R + " :Knigts";
  document.getElementById("Troopamnt_type_A_R").innerHTML = Assasin_amnt_R + " :Assasin";
  document.getElementById("Troopamnt_type_SM_R").innerHTML = SwordMaster_amnt_R + " :Sword Masters";
  document.getElementById("base_hp_blue").innerHTML = base_final_hp_blue + "/" + Health_Base_B;
  document.getElementById("base_hp_red").innerHTML = base_final_hp_red + "/" + Health_Base_R;
}, 1000);
//to delete

// other libraries
var time1 = new Date();
delta_time = time1.getTime();
