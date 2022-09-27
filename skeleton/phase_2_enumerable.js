Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    this[i] = callback(this[i]);
  }
}

//  let addOne = val => val + 1;

// function addOne(val) {
// return val + 1;
// }

Array.prototype.myMap = function(callback) {
  let newArr = [];
  this.myEach((ele) => {
    newArr.push(callback(ele));
  })
  return newArr;
}

Array.prototype.myReduce = function(callback = null, initial_value= 0){
  if(callback === null){
      callback = el => el
  }
  let acc = initial_value
  arr.myEach((ele) => {
      acc = acc + callback(ele);
  })
  return acc
}

function sum(val) {
  return val;
}


let arr = [1,2,3,4].myReduce(sum);
console.log(arr);