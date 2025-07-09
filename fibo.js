function fibs(n){
    let n1 = 0;
    let n2 = 1;
    let arr = [0,1];
    if(n == 2){
        return [0,1];
    }
    for(let i = 3 ; i <= n ; i++){
        let n3 = n1 + n2;
        arr.push(n3);
        n1 = n2;
        n2 = n3;
    }
    return arr;
}

function fibRec(n,arr){
    if(n <= 0) return n;
    if(n == 1) return[0];
    if(n == 2) return[0,1];

    let prev = fibRec(n-1);

    return[...prev,prev[prev.length-1]+prev[prev.length-2]];
}


console.log('Iterative :',fibs(8));
console.log('\n');
console.log('Recursive',fibRec(8))