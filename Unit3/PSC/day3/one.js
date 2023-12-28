/*

let obj = {
    name : "bike" ,

}

let obj2 = Object.create(obj) ;
console.log("obj2",obj2) ;


*/

function person (n, a) {
   this.name = n ,
   this.age = a 
 }

person.prototype.setCity = function  (c) {
    this.city = c

}

let person1 = new person('raj', 23) ;
console.log("person1:",person1) ;