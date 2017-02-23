Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return this;
}

Array.prototype.myMap = function(callback) {
  let mapped = [];
  this.myEach(el => {
    mapped.push(callback(el));
  })
  return mapped;
}

Array.prototype.myInject = function(callback) {
  let acc = this[0];
  this.slice(1).myEach(el => acc = callback(acc, el));
  return acc;
}

let array = [1,2,3,4,5];

let injected = array.myInject(function(acc, el) {
  return acc + el;
})

console.log(`myInject: ${injected}`);


array.myEach(el => {
  console.log(`Logging for myEach: ${el}`);
})

let mapped = array.myMap(el => {
  return el + 1;
})

console.log(`myMap: ${mapped}`);
