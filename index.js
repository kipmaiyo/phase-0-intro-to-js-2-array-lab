// // Write your solution here!

  let cats = ["Milo", "Otis", "Garfield"]

  function destructivelyAppendCat(){
    let pushCat =[cats.push("Ralph")]
    return pushCat
  }

function destructivelyPrependCat(){
  let unshiftCats = cats.unshift("Bob")
  return unshiftCats
}

function destructivelyRemoveLastCat(){
  let popCats = cats.pop()
  return popCats
}

function destructivelyRemoveFirstCat(){
  let shiftCats = cats.shift()
  return shiftCats
}

function appendCat(){
  let appendCaaat = [...cats, "Broom"]
  return appendCaaat
}

function prependCat(name){
  let prependCaat =["Arnold", ...cats]
  return prependCaat
}

function removeLastCat(){
  let sliceLastCat =[...cats.slice(0,-1)]
  return sliceLastCat;
}

function removeFirstCat(){
  let sliceFirstCat = [...cats.slice(1)]
  return sliceFirstCat
}








// let cats = ['Milo','Otis','Garfield'] 
  
//   function catsLengthAndOrder (cats) {
//     cats.length = 0;
  
//     cats.push("Milo", "Otis", "Garfield");
//   };

// // Add your functions and code here

// function destructivelyAppendCat(name) {
//     cats.push('Ralph');
//    return cats;
// }

// function destructivelyPrependCat(name){
//     cats.unshift("Bob");
//   return cats;
// }

// function destructivelyRemoveLastCat(){
//     cats.pop();
//   return cats
// }

// function destructivelyRemoveFirstCat(){
//     cats.shift();
//   return cats;
// }

// function appendCat(name){
//   let catName= [...cats,"Broom"];
//   return catName;
// }

// function prependCat(name){
//   let catsname_2 =["Arnold", ...cats];
//   return catsname_2
// }

// function removeLastCat(){
//   let caats= cats.slice(0, cats.length-1);
//   return caats;
// }

// function removeFirstCat(){
//   let catts= cats.slice(1)
//   return catts
// }