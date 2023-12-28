
/*

function nikeProduct() {
    let product = {} ;
    product.name = "Air Jordan ";
    product.price = "$200" ;

    return product ;
}

let p1 = nikeProduct() ;
console.log("p1:", p1) ;

*/
//CF
/*

function Product (n,p,b) {
    this.name = n ;
    this.price = p ;
    this.brand = b ;
}

let p2 = new Product("Air Jordan 1", "$ 499","Nike") ;
let p3 = new Product("air jordan 2", "$ 599","Nike") ;
let p4 = new Product("Air Jordan 3", "$ 699","Nike") ;
console.log("p2:",p2 ) ;
console.log("p3:",p3 ) ;
console.log("p4:",p4 ) ;

 


// new --> Doing Returning Part
// this -- > taking Care of Intialisation


*/

/*

const  kitchen = {
    name : "Kitchen" ,
    purpose : "Cook Food",
    cookfood : function(order) {
        console.log(`Serving ${order} in ${this.name}`) ;
    } ,
}

const bedroom = {
    name : "Bedroom" ,
    purpose : "sleep" ,
}

const Living_room = {
    name :"L R" ,
    purpose : "We Live Here" ,

}

kitchen.cookfood("maggie") ;
kitchen.cookfood.call(Living_room ,"maggie") ;
kitchen.cookfood.call(bedroom,"maggie") ;

*/


function  jethalal (f1,f2){
    console.log(`i have a ${this.superpower}, i like ${f1} ${f2} `) ;

}

let thor = {
    superpower :"Web" ,
} ;

let shaktiman = {
    superpower : "Gol Gol ghumna" ,
} ;

jethalal.call(shaktiman,"jalebi","fafda") ;

jethalal.apply(shaktiman,["jalebi","fafda"]) ;


let x = jethalal.bind(shaktiman,"jalebi","fafda")   
 // console.log("x",x) ; 

// call --> Comma 
// apply --> array
// binnd --> when you need , call me when y'need 

// hoisting --> attendance
// this --> Owner
// CAB -->Borrowing
// Execution --> envoirment (Global / Local)