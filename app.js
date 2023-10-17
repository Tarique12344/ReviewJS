var a = 10;
var b = 5;
var c= 15;

function plus(a, b){
    return a + b;
}
console.log(plus(a, b));

function sum(a,b,c){
    return a + b + c;
}
console.log(sum(a,b,c));

const Bird = {
    name: "Chester",
    Wings: 2,
    tails: 1,
    enemies: ["Water", "Winter"]
  };
  Bird.song = "chirp-chirp";

  console.log(Bird);
const Dog = {
    name: "Carl",
    Legs: 4,
    tails: 1,
    enemies: ["cats", "mailman"]
  };
  Dog.sound = "Bark!"
  console.log(Dog);
const snake = {
    name: "slither",
    legs: 0,
    tails: 1,
    enemies: ["cold", "mongoose"]

  };
  snake.noise = "Rattle-Rattle";
  console.log(snake);