
// call apply bind -- > Hotel , Zoomcar  , etc .. 
// Object create --> own house , own car , etc ..

// Flipkart Product Catalog --> NIKE


const Product ={
    Company_name : "Nike" ,
    seller : "flipkart ",
    Type_Of_Product : "Sport" ,
    logo : "nike.com/logo"

}


const p1 = Object.create(Product, {Company_namename :{value : "air_jordan_1"}}) ; // function name ${key name} $ {value you want}

console.log("p1:",p1) ;