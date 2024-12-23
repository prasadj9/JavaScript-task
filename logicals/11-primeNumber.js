function isPrime(n) {
    if(n <= 1) return false; //base case
    for(let i = 2; i < Math.sqrt(n/2); i++) { // Check divisibility up to the square root of n
        if(n % i === 0) {  //if n is divisible by any num in range it is not prime
            return false;
        }
    }
    //if n is not divisible by any number except 1 and number itself then it is prime
    return true;
}

function printPrime(num) {

    for(let i = 2; i <= num; i++) {
        if(isPrime(i)) {
            console.log(i)
        }
    }
}

function sieveOfEratosthenes(limit) {
    const primes = Array(limit + 1).fill(true); //create array of num + 1 and mark them true
    primes[0] = primes[1] = false; //mark 0 and 1 as false as they are not prime

    for(let i = 2; i <= limit; i++) { 
        if(primes[i]) { 
            for(let j = i * i; j <= limit; j += i) { //mark all multiplies of i to false i.e. non-prime
                primes[j] = false;
            }
        }
    }

    for(let i = 2; i <= limit; i++) {
        if(primes[i]) {
            console.log(i);
        }
    }
}

const num = 20;
// printPrime(num);
sieveOfEratosthenes(num);
// console.log(isPrime(11));