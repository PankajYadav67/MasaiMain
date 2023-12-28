

// Prototype chain 


const grandfather = {
    eyes_color : "blue" ,

} ;

let father = Object.create(grandfather) ;

father.eyes_color = "yellow" ; 


let son = Object.create(father) ;

console.log("son:" , son.eyes_color) ; //  
