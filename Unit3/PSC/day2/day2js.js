/*

var person1 ={
    name :"pankaj" ,
    age : 20 ,
    myname : function() {
        console.log(this) ;
    }
} // Object Literal

// person.myname() 

// function --> Object ?

function myName () {
    console.log(this) ; // this --> Global Object

}


*/

/*
 // BluePrint

 function Player (n,t) {
    this.name = n 
    this.team = t
 }

 // This refer to the parent Object 

 var myplayer = new Player('masai','barcelona');
 var myplayer2 = new Player('Walter White' , 'Breaking Bad') ;

 console.log("myplayer:",myplayer) ;
 console.log("myplayer2:",myplayer2) ;
 
*/

var person = {
    name : 'rahul',
    
}


  function myName (a,c) {
    this.name = a ;
    this.team = c ;
 }


 myName.call(WalterWhite , 45 , "pune") ;
 
 myName.call(WalterWhitejr ,16 , "Bangalore") ;


 console.log("Person2:",WalterWhite ) ;
 
 console.log("Person2:",WalterWhite ) ;
