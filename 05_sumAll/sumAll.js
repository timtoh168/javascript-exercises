const sumAll = function(num1, num2) {
    if(typeof num1 != 'number' || typeof num2 != 'number' || num1 <0 || num2 <0) {
        return 'ERROR';
    }
    let first = num1;
    let last = num2;
    let total=0;

    if (num1 > num2) {
        first =num2;
        last =num1;
    } 
    while (first <= last) {
        total += first;
        first++;
    }
    return total;
};
// Do not edit below this line
module.exports = sumAll;
