/* 
ES5 Global Constants
    var PI = 3.14;
    PI = 42;
*/

//ES2015 Global Constants
let PI = 3.14;
PI = 42;

/*
    Quiz:
1) With var, you are able to reassign AND redeclare. With let, you're limited to being able to reassign.
    Var declares a function-scoped or globally-scoped variable. Let declares block-scoped local variables.

2) Unlike var, const does not allow reassignment, nor the ability to redeclare. However, if const is an object, its properties can mutate. Like let, const creates block scope.

3) Let allows for reassignment, const does not.

4) Hoisting is a concept where declarations of variables using var are accessible before the initialization of that variable. The variable name is accessible within the scope; however, it will return undefined.

*/