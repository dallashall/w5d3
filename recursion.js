function range(start, end) {
  if(start === end){
    return [end];
  }
  let rangeArray = [start];
  return rangeArray.concat(range(start + 1, end));
}
console.log(`Range: ${range(2, 5)}`);

function exp(base, n) {
  return n === 1 ? base : n === 0 ? 1 : base * exp(base, n - 1);
}
console.log(`Exponent-one for 2^5: ${exp(2, 5)}`);

function expTwo(base, n) {
  if(n === 1) {
    return base;
  } else if(n === 0) {
    return 1;
  } else if(n % 2 === 0) {
    let squarePart = exp(base, n / 2);
    return squarePart * squarePart;
  } else {
    let squarePart = exp(base, (n - 1) / 2);
    return base * squarePart * squarePart;
  }
}
console.log(`Exponent-two for 2^5: ${expTwo(2, 5)}`);

function fibRecursive(n) {
  if(n === 0) {
    return [];
  } else if(n === 1) {
    return [0];
  } else if(n === 2) {
    return [0, 1];
  } else {
    let lowerFibs = fibRecursive(n - 1);
    let len = lowerFibs.length;
    return lowerFibs.concat([lowerFibs[len - 2] + lowerFibs[len - 1]]);
  }
}
console.log(`Fib Recursion: ${fibRecursive(10)}`);

function fibIterative(n) {
  let fibNums = [];
  let fibValue = function(i) {
    if (i === 0) {
      return 0;
    } else if (i === 1) {
      return 1;
    } else {
      return fibNums[i - 2] + fibNums[i - 1];
    }
  };
  let i = 0;
  while (fibNums.length < n) {
    fibNums.push(fibValue(i));
    i++;
  }
  return fibNums;
}
console.log(`Fib Iteration: ${fibIterative(10)}`);

let sortedArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function binarySort(array, target) {
  let midPoint = Math.floor(array.length / 2);

  if(target === array[midPoint]) {
    return midPoint;
  } else if (target < array[midPoint]) {
    return binarySort(array.slice(0, midPoint), target);
  } else {
    return midPoint + binarySort(array.slice(midPoint), target);
  }
}
console.log(`binarySort Recursive: ${binarySort(sortedArray, 20)}`);
