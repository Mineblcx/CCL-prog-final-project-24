//play area
const canvas = document.getElementById("gameCanvas");

// Unit Legend

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
  constructor(amountper, level, price) {
    this.amountper = amountper * 1000;
    this.level = level;
    this.price = price;
  }
}

// Unit Library
const Newbie = new Unit("Newbie", 1000, 200, 1.5, 50, 100, 50, 10, 5, 3);
const Knight = new Unit("Knight", 1500, 300, 1.5, 40, 60, 125, 45, 3, 5);
const Assasin = new Unit("Assasin", 1250, 400, 0.75, 35, 150, 500, 25, 5, 4);
const Sword = new Unit("Sword Master", 4000, 500, 1, 75, 125, 1500, 350, 2, 7.5);


//Cash library
const Level_0 = new Gold(5, 0, 0);
const Level_1 = new Gold(10, 1, 150);
const Level_2 = new Gold(25, 2, 450);
const Level_3 = new Gold(35, 3, 1125);
const Level_4 = new Gold(40, 4, 1050);
const Level_5 = new Gold(50, 5, 2000);

// other libraries
const baseHP = 30000;
var time1 = new Date();
delta_time = time1.getTime();