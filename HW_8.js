function loggingDecorator(func) {
    return function(...args) {
        console.log(`${func.name}, args: ${args.join(', ')}`);
        return func.apply(this, args);
    }
}
const someFn = (param1, param2, param3) => {  };
const loggedFn = loggingDecorator(someFn);
loggedFn(1, 2, 3); 
loggedFn('test'); 
