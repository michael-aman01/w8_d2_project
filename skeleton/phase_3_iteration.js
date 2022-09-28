Array.prototype.bubbleSort = function(){
    for(let i = 0; i < this.length; i++){
        for(let j = i + 1; j < this.length; j++){
            if(this[i] > this[j]){
                let temp = this[j]
                this[j] = this[i]
                this[i] = temp
            }
        }
    }
    return this
}

String.prototype.substrings = function(){
    let substrings = [];
    for(let i = 0; i < this.length; i++){
        substr = this[i];
        for(let j = i + 1; j < this.length; j++){
            substr = substr + this[j];
            substrings.push(substr);
        }
    }
    return substrings;
}
