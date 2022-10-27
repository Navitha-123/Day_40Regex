function validEmail (email)
{
    let pattern = RegExp('\^([a-z]+)(\.[a-z0-9_\+\-]+)?@([a-z]+)\.([a-z]{2,4})(\.[a-z]{2})?$');
    if(pattern.test(email))
    {
        return true;
    }
    else
    {
        return false;
    }
}
let email1 = 'abc@yahoo.com';
let email2 = 'abc – must contains “@” symbol';
let email3 = 'abc123@gmail.a ';
let email4 = 'abc-100@yahoo.com';
let email5 = 'abc.100@yahoo.com';
let email6 = 'abc123@.com.com';
let email7 = 'abc@%*.com';
let email8 = 'abc..2002@gmail.com –';
let email9 = 'abc.100@abc.com.au';
let email10 = 'abc@gmail.com.com';
let email11 = 'abc@gmail.com.1a ';
let email12 = 'abc@gmail.com.aa.au ';
let email13 = 'abc123@gmail.a ';
let email14 = 'abc+100@gmail.com';
let email15 = 'abc-100@abc.net';

console.log(email1+"is " +validEmail(email1));
console.log(email2+"is " +validEmail(email2));
console.log(email3+"is " +validEmail(email3));
console.log(email4+"is " +validEmail(email4));
console.log(email5+"is " +validEmail(email5));
console.log(email6+"is " +validEmail(email6));
console.log(email7+"is " +validEmail(email7));
console.log(email8+"is " +validEmail(email8));
console.log(email9+"is " +validEmail(email9));
console.log(email10+"is " +validEmail(email10));
console.log(email11+"is " +validEmail(email11));
console.log(email12+"is " +validEmail(email12));
console.log(email13+"is " +validEmail(email13));
console.log(email14+"is " +validEmail(email14));
console.log(email15+"is " +validEmail(email15));

