Array.prototype.uniq = function(){
    let newArray = [];
    for(let ele of this){
        if (newArray.includes(ele) === false){
            newArray.push(ele);
        }
    }
    return newArray;
}


Array.prototype.twoSum = function(){
    let sums = [];
    for(let i = 0; i < this.length; i++){
        for(let j = i + 1; j < this.length; j++){
            if(this[i] + this[j] === 0){
                sums.push([i,j]);
            }
        }
    }
    return sums; 
}


Array.prototype.transpose = function(){
    let transposed = [];
    for(let i = 0; i < this[0].length; i++){
        let row = [];
        for(let j = 0; j < this.length; j++){
                row.push(this[j][i]);
        }
        transposed.push(row);
    }
    return transposed;
}


