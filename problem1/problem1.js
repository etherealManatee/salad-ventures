/*
input an integer,n, and return the summation to n
eg. n = 5
output = 15 (1+2+3+4+5)
assuming n is a positive integer number
*/

var sum_to_n_a = function(n) {
    let sum = (n*(n+1))/2;
    console.log(sum);
    return sum
};

var sum_to_n_b = function(n) {
    let sum = 0;
    for ( i = 1; i <= n; i++){
        sum += i
    }
    console.log(sum);
    return sum
};

var sum_to_n_c = function(n) {
    let sum = 0;
    for ( i = n; i > 0; i--){
        sum += i
    }
    console.log(sum);
    return sum
};

//test
sum_to_n_a(5)
sum_to_n_a(17)
sum_to_n_a(200)
sum_to_n_a(1001)
sum_to_n_b(5)
sum_to_n_b(17)
sum_to_n_b(200)
sum_to_n_b(1001)
sum_to_n_c(5)
sum_to_n_c(17)
sum_to_n_c(200)
sum_to_n_c(1001)