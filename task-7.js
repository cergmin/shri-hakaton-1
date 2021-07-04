// Primes
const notPrimes = {};
const primes = [];

const isPrime = (n) => {
    for (const prime of primes) {
        if (prime > Math.sqrt(n)) {
            break;
        }

        if (n % prime === 0) {
            return false;
        }
    }

    return true;
}

const printPrimes = (n) => {
    const notPrimes = {};

    console.log(1);
    for (let i = 2; i <= n; i++) {
        if (notPrimes[i] || !isPrime(i)) {
            continue;
        }

        primes.push(i);
        console.log(i);

        for (let j = i * 2; j <= n; j += i) {
            notPrimes[j] = true;
        }
    }
};

printPrimes(100);