

// inentory.js

 document.addEventListener("DOMContentLoaded",function(){
    const productGrid = document.getElementById("productGrid") ;

    function displayProducts() {}
        //retrieve products from LocalStorage
 })

//         const products = JSON.paese(localStorage.getItem("products")) || [] ;

//         // clear the existing grid
//         productGrid.innerHTML = '';

//         //display each product in a grid format 
//         products.forEach((product,index) =>{
//           const productDiv = document.createElement("div") ;
//           productDiv.classList.add("product") ;

//           productDiv.innerHTML = `
//                 <img src="${product.image}" alt="${product.name}">
//                 <h2>${product.name}</h2>
//                 <p>Price: $${product.price.toFixed(2)}</p>
//                 <p>Brand: ${product.brand}</p>
//                 <p>Type: ${product.type}</p>
//                 <button class="removeButton" data-index="${index}">Remove Product</button>
//             `;

//             productGrid.appendChild(productDiv);
       

//         });
//     }

//         // Initial display
//         displayProducts();

//         // Handle product removal
//         productGrid.addEventListener("click", function (e) {
//             if (e.target.classList.contains("removeButton")) {
//                 const indexToRemove = parseInt(e.target.getAttribute("data-index"), 10);
    
//                 // Retrieve products from localStorage
//                 const products = JSON.parse(localStorage.getItem("products")) || [];
    
//                 // Remove the selected product
//                 products.splice(indexToRemove, 1);
    
//                 // Update localStorage
//                 localStorage.setItem("products", JSON.stringify(products));
    
//                 // Refresh the product grid
//                 displayProducts();

//             }
//       });
    


// }) ;