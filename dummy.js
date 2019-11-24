function createCounter () {
    let counter = 0;
    const myFunction = function() {
        return ++counter;
    }
    return myFunction;
}

let a = createCounter();
console.log(a);
a()