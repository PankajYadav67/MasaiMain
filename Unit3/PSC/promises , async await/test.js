


function append (s) {

    return  new Promise =(function(resolve,reject){

      let script =document.createElement('script')  ;

        script.src = s ;

        document.head.append(script) ;

        script.onload =function()
        {
            resolve('script loading done')
            hello()
        }

        script.onerror = function() 
        {
            reject('Not Loaded')
        }

    })
 

    // hello() // depednet on script to get completely loaded


}

console.log(append('/myScript.js') ) ;

/*

let myPromise = new Promise (function(resolve,reject){
   //  resolve('Gift the Laptop')
    reject('goodbye!')
})

console.log("Promise:",myPromise) ;

*/