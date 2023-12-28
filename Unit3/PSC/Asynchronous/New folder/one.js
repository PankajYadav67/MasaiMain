let h1 = document.getElementById('count') ;
function counter () {


    let i = 10 ;
   let id = setInterval(function (){
        i -= 1 ;
     h1.innerText = i ;
     if(i==0)
    {
        clearInterval(id) ;
    }
    },1000) ;
    
}

counter() ;