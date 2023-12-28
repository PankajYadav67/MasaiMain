import { useEffect, useState } from "react";

const CounterLec = () => {
    const[count1,setCount1] =useState(0);
    const[count2,setCount2] =useState(0);

    // const increment = () =>{
    //     setCount(count+1);
    // };

    // const decrement = () => {
    //     setCount(count-1) ;
    // };

    //Mounted , any state update in this component, then run this callback function , unmounted
    // everytime when component rendered or unrendered
    useEffect(()=> {
        console.log("mounted");
     return () =>{
        console.log("Unmounted");
     };
    });

    // only once when the component  is mount
    useEffect(()=> {
        console.log("mounted []");
     return () =>{
        console.log("Unmounted []");
     }
    },[]);

    // intially when component is mounted then afterwards whenever value of count1 variable get changed 
    useEffect(()=> {
        console.log("mounted");
     if(count1 > 7) {
        setCount2(100) ;
     }
    },[count1]);

    //intially when component is mounted and if count1 , count2 changes values 
    useEffect(()=> {
        console.log('count changed!');

    }, [count1,count2]);




    return (
        <div>
           <h1>
             Counter: {count1} : {count2}
            </h1>

          <div>
              <button onClick={()=>setCount1(count1+1)}>
                 Increment
               </button>
               
               <button onClick={()=> setCount1(count1-1)}>
                  decrement
                </button>

                <br />
                <br />

              <button onClick={()=>setCount2(count2+1)}>
                 Increment
               </button>
               
               <button onClick={()=> setCount2(count2-1)}>
                  decrement
                </button>
            </div>
        </div>
    );
};

export{CounterLec};
