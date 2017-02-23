Array.prototype.bubbleSort = function(callback) {

  if(callback === undefined) {
    callback = (a, b) => { return a < b; }
  }

  let thirdWheel = undefined;
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for(var i = 0; i < this.length - 1; i++){
      if( !callback(this[i], this[i + 1]) ) {
        sorted = false;
        thirdWheel = this[i];
        this[i] = this[i + 1];
        this[i + 1] = thirdWheel;
      }
    }
  }
  return this;
};

String.prototype.substrings = function() {
  let letters = this.split('');
  let subsObj = {};
  let subs = [];
  let notInSubs = function(sub) {
    return subsObj[sub]? false : true;
  };
  for(let i = 0; i < letters.length; i++){
    for(let j = i + 1; j < letters.length; j++) {
      let subToLetter = letters.slice(i, j);
      if(notInSubs(subToLetter)) {
        subsObj[subToLetter] = true;
        subs.push(subToLetter.join(''));
      }
    }
    let subToEnd = letters.slice(i);
    if(notInSubs(subToEnd)) {
      subsObj[subToEnd] = true;
      subs.push(subToEnd.join(''));
    }
  }
  return subs;
};

let array = [2, 1, 3, 5, 8, 4, 7, 6];
let bubSortOne = array.bubbleSort(); // Should sort small to large...
console.log(bubSortOne);

let bubSortTwo = array.bubbleSort((a, b) => { // Should sort large to small..
  return b < a;
});
console.log(bubSortTwo);

console.log("cat".substrings());
