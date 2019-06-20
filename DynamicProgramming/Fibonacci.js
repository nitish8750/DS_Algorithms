function Fibonacci(n, mem = [0, 1, 1]){
    if(mem[n]) return mem[n];
    mem[n] = Fibonacci(n - 1, mem) + Fibonacci(n - 2, mem);
    return mem[n];
}

console.log(Fibonacci(10));