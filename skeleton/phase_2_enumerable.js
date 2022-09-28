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

Array.prototype.myReduce = function(callback, initialValue){
  let arr;
  if(callback === undefined){
      callback = el => el
  }
  if(initialValue === undefined){
    initialValue = this[0];
    arr = this.slice(1);
  }else{
     arr = this;
  }
  let acc = initialValue
  arr.myEach((ele) => {
      acc = callback(acc,ele);
  })
  return acc
}

function sub(val1,val2){
  return val1 - val2
}


let arr = [1,1,3,4].myReduce(1);
console.log(arr);