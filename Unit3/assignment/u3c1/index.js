

// index.js

document.addEventListener("DOMContentLoaded",function(){
    const productForm = document.getElementById("ProductForm");

    productForm.addEventListener("submit",function(e){
        e.preventDefault() ;
        const productname = document.getElementById("productname").value ;
        const producttype = document.getElementById("producttype").value ;
        const brandname = document.getElementById("brandname").value ;
        const productimage = document.getElementById("productimage").value ;
        const productprice = parseFloat(document.getElementById("productprice").value) ;


        const Product = {
            productname,
            productprice,
            producttype,
            brandname,
            productimage
        };

        // Retrieve existing products from localStorage
        const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
        existingProducts.push(Product);

        // Save updated product list to localStorage
        localStorage.setItem("products", JSON.stringify(existingProducts));

        // Clear form fields
        productForm.reset();


    })
})