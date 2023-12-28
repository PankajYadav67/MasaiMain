
/*

console.log(typeof null) ;
console.log(1 == '1') ;


*/



var admin = {
    name : "Mark" ,
    password : "facebookismine",
    age : 35 
}

Object.freeze(admin) ; // Mutable is NOW Unmutable

admin.name="Elon Musk" ;

// tangle earphone - lot of change in data 

// tangle free or anti - tangle  earphone  - No Change

console.log("admin:", admin) ;