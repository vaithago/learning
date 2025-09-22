// Factorial 5! = 5*4*3*2*1
/** 1. FOR LOOP */
function factorialize(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
console.log(`For loop: ${factorialize(5)}`);

/** 2. WHILE LOOP */
function fact_while(num) {
    let result = 1;
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        result = result * num;
        num--;
    }
    return result;
}
console.log(`While loop: ${fact_while(5)}`);


/** 3. RECURSION */
function fact_rec(num) {
    if (num === 0 || num === 1)
        return 1;
    else
        return num * fact_rec(num - 1);
}
console.log(`Recursion: ${fact_rec(5)}`);