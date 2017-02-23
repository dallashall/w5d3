'use strict';
Array.prototype.uniq = function() {
  let existing_nums = {};
  let unique_nums = [];
  this.forEach(num => {
    if (!existing_nums[num]) {
      unique_nums.push(num);
      existing_nums[num] = true;
    }
  })
  return unique_nums;
}

Array.prototype.twoSum = function() {
  let idxPairs = [];
  for(let i = 0; i < this.length - 1; i++) {
    for(let j = i + 1; j < this.length; j++) {
      if(this[i] + this[j] === 0) {
        idxPairs.push([i, j]);
      }
    }
  }
  return idxPairs;
}

Array.prototype.transpose = function() {
  let transposed = [];
  for(let i = 0; i < this.length; i++) {
    for(let j = 0; j < this[i].length; j++) {
      if(!transposed[j]) {
        transposed[j] = [];
      }
      transposed[j][i] = this[i][j];
    }
  }
  return transposed;
}
