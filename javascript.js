let x = 3;
let y = 3.0;
let n = 2 + 3 / 4;

// + - / * 
// % modulus (remainder of division)

let m1 = 9 % 3;
let m2 = 19 % 3;



let s = 3e94;

let three = parseFloat(32.63);

let four = Number(4);
let f = 4;
String();
Number();
Array();
Object();

// array literal
let a = [1, 2, 3, 4];

console.log('third element: ', a[2]);

// array non-literal
let b = new Array();
let c = Array();
b.push(1);
c.push(1);

console.log('is it an array? ', Array.isArray(b));
console.log('is this also an array: ', Array.isArray(n));


// object literal
let person = {
    name: '',
    age: 0,
    height: 0
};

// object non-literal

let obj1 = new Object();

obj1.name = "hello";

const bigstring = `This is a very big string that has a lot
of characters in it.`;

console.log('how long is my string: ', bigstring.length);
console.log('third letter: ', bigstring[2]);

for (let i = 0; i < bigstring.length; i++) {
    // check to see if the number is divisible (evenly) by 2
    if (i % 2) {
        // console.log(`This is an odd iteration ${i}: `, bigstring[i])
    }
}


let spec1 = null;
let spec2 = undefined;











let thethings = [x, y, n, three, s, four, a, b, 'Brian', c, person, obj1, m1, m2, spec1, spec2];
thethings.forEach((thing) => {
    console.log(typeof thing, thing);
})