async function orderFood() {
    let food = get('food') ;
    // console.log("Food:" , food) ;

    let status = "open" ;
    let foodpromise = new Promise(function(resolve,reject){

        let time = Math.random() * 10000 ;
        if(status === "close")
        {
         reject("shop closed, ghar pe jao!") ;
        } 

        else {
            setTimeout(function(){
        
             resolve(food) ;
        
            },time)
        }
            

    });

    // foodpromise.then (function(res){
    //     console.log(`${res} is ready!`) ;
    // })

    // foodpromise.catch (function(error){
    //     console.log("error:",error) ;
    // })


    // try and catch blocks are silimar to .then and .catch 

    try{
        let res = await foodpromise ;
        console.log("res:" ,res) ;

    }
    catch(error){
        console.log("error:",error)

    }



}


function get (id) {
  return document.getElementById(id).value ;
}