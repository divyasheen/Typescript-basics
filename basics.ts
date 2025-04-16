

let username: string = "Divya";
username = "John";

let age: number = 35;


function greeting(fullname: string, age: number): string {
  return "Hello, " + fullname + "You are "+ age + "years old!";
}

const result = greeting('John', 20);
console.log(result.length);

// object type - can be reuse
interface User{
    fullname?: string, // optional property
    username: string,
    password: string,
    email: string
}

const user1:User = {
    username: 'john',
    password: 'john123',
    email: 'john@mail.de'
}

const numbers: number[] = [1,2,3,4];
const coord: [number, number] = [10, 15];

// array of users
const users: User[] = [
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
const user_info: [string, number] = ['john', 40];


const data = [1, 'one', true, {one: 1}]

let id: string | number = '10';

type Priority = 'High' | 'Low';
let user_priority: Priority = 'Low';

// a function that accept a string or number as input
function printValue (value: string | number ): void {
    console.log(value);
}

printValue(10)

const salary = 1000;    // inferred as 1000
let salari = 1000;      // inferred as number
let income;             // inferred as any


let x: unknown = "hello";
let strLength = (x as string).length;
// define generic function
function griting<T> (param: T): void{
    console.log(`Hi ${param}`);
}

// call function with different types of input
griting<string>('john');
griting<number>(10);
griting<boolean>(true)



