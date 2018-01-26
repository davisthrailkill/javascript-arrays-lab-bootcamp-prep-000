const app = "I don't do much."

function kittens(){
  var kittens = ["Milo","Otis","Garfield"];
}

function destructivelyAppendKitten(name){
  kittens.push("Ralph");
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  kittens.appendKitten("Broom");
  return kittens;
}


