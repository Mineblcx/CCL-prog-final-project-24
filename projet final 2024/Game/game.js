

//play area
const canvas = document.getElementById("gameCanvas");
console.log("should work");

function GameLoad(x) {
  if (x = 'on') {
    return GameStatus = "Running";
  }
  else {
    return GameStatus = "Stoped";
    console.log("error");
  }
}
function ButtonTest() {
  if (Level_1 = "UnBought") {
    Level_1 = "Bought";
  }
  else {
    if (Level_2 = "UnBought") {
      Level_2 = "Bought";
    }
    else {
      if (Level_3 = "UnBought") {
        Level_3 = "Bought";
      } else {
        if (Level_4 = "UnBought") {
          Level_4 = "Bought";
        } else {
          if (Level_5 = "UnBought") {
            Level_5 = "Bought";
          }
        }
      }
    }
  }
  moneyfunct();
}
function moneyfunct() {      if(Level_5 = "UnBought") {
        if (Level_4 = "UnBought") {
          if (Level_3 = "UnBought") {
            if (Level_2 = "UnBought") {
              if (Level_1 = "UnBought") {
                console.log("good0");
              } else {
                console.log("good1");
              }
            } else {
              console.log("good2");
            }
          } else {
            console.log("good3");
          }
        } else {
          console.log("good4");
        }
      } else {

      }
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
    this.amountper = amountper * 1000;
    this.price = price;
  }
}
class Player {
  constructor(name, gold, troopamnt, color){
    this.name = name;
    this.gold = gold;
    this.troopamnt = troopamnt;
    this.color = color;
  }
}
//Cash library
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
//while (GameStatus = "Running") {
  //players
  const Player_1 = new Player("Player 1", 0, "Blue")

  // Unit Library
  const Newbie = new Unit("Newbie", 1000, 200, 1.5, 50, 100, 50, 10, 5, 3);
  const Knight = new Unit("Knight", 1500, 300, 1.5, 40, 60, 125, 45, 3, 5);
  const Assasin = new Unit("Assasin", 1250, 400, 0.75, 35, 150, 500, 25, 5, 4);
  const Sword = new Unit("Sword Master", 4000, 500, 1, 75, 125, 1500, 350, 2, 7.5);

  // other libraries
  const baseHP = 30000;
  var time1 = new Date();
  delta_time = time1.getTime();
//};