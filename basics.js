// let fname ;
// console.log(fname.length)
var username = "Alice";
username = "Jane";
var age = 35;
function greeting(fullname, age) {
    return "Hello, " + fullname + "You are " + age + "years old!";
}
var result = greeting('John', 20);
console.log(result.length);
var user1 = {
    username: 'john',
    password: 'john123',
    email: 'john@mail.de'
};
var numbers = [1, 2, 3, 4];
var coord = [10, 15];
// array of users
var users = [
    {
        username: 'user1',
        password: 'user123!',
        email: 'user1@gmail.com'
    },
    {
        fullname: 'user one',
        username: 'user1',
        password: 'user123!',
        email: 'user1@gmail.com'
    },
];
// tuple
var user_info = ['john', 40];
var data = [1, 'one', true, { one: 1 }];
var id = '10';
var user_priority = 'Low';
// a function that accept a string or number as input
function printValue(value) {
    console.log(value);
}
printValue(10);
var salary = 1000; // inferred as 1000
var salari = 1000; // inferred as number
var income; // inferred as any
var x = "hello";
var strLength = x.length;
// define generic function
function griting(param) {
    console.log("Hi ".concat(param));
}
// call function with different types of input
griting('john');
griting(10);
griting(true);
