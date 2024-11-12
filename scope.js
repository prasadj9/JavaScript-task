/* 
scope : Scope refers to accessibility of variables across the code;
    types of scope : global, function and block

    lexical scope - (static scope) It means scope is determined at lexical timing (compiling time) 

    Scope chain - When a variable is used, JS engine try to find the variable's value in current scope. 
    If it could not find the variable, it will look into its outer scope and will continue to do so until it finds the variable or reaches global scope.
    
*/

//lexical scope example

let number = 42;

function printNum() {
    console.log(number);
}

function log() {
    let number = 52;
    printNum();
}
log(); //Here the console.log(number) will always print 42 no matter from where the function printNumber() is called.

