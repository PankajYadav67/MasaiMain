const getData =async (url) => {

  try {
    let res = await fetch(url) ; // await is f*cking important af !!! 
    
    let data = await res.json() ;// await is f*cking important af !!!

    return data ;

  } 
  
  catch (error) 
  {
    console.log("error:",error) ;
  } 

};

// data 
// parameter --> Making dynamic

const append = (data,parent) => {
    
  parent.innerHTML = null ;

  data.forEach(({title,image,price}) => { // dynamic

    let div = document.createElement('div') ;

    let Product_name = document.createElement('p') ;
    Product_name.innerText = title ; //el.title remove --> 23

    let img = document.createElement('img') ;
    img.src = image ;

    let Product_price = document.createElement('p') ;
    Product_price.innerText = price ;

    div.append(img,Product_name,Product_price) ; // 1

    parent.append(div) ; // 2
  });

}

export {getData,append} ; // Order can be anything