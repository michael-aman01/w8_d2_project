
let range = (start,end) => {
    if(start === end){
        let arr = [end]
        return arr;
    }else{
        let arr = [start]
        return arr.concat(range(start+1,end));
    }
}

let sumRec = (arr) => {
    if(arr.length === 0){
        return 0;
    }else{
        return  arr.pop() + sumRec(arr)
    }
}

let exponentV1 = (base,exp) => {
    if(exp === 0){
        return 1; 
    }else{
        return base * exponentV1(base,exp-1);
    }
}


let exponentV2 = (base,exp) => {
    if(exp === 0){return 1;}
    if(exp === 1){return base;}
    if(exp%2 === 0){
        return exponentV2(base, exp/2) * exponentV2(base, exp/2);
    }else{
        return base * (exponentV2(base,((exp - 1)/2)) * exponentV2(base,((exp - 1)/2)));
    }
}


function fibonacci(n){
    if(n < 2){ return [1];}
    if(n === 0){ return [0];}
    return  [n].concat(fibonacci(n-2));
}

console.log(fibonacci(5))

