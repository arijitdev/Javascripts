var funcSum = function addNum(a,b) { return(a+b) } ;

var addFunc = function (a,b) { return(a+b) } ;

var mulFunc = function (functionArg,a) { return(functionArg*a)};

//var sum = funcSum(7,3);

var sum = addFunc(6,8);

var mul = mulFunc(addFunc(5,3),5);

console.log(sum);
console.log(mul);