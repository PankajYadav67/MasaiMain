import React from "react" ;
import { v4 as uuidv4 } from 'uuid';
import TodoItem from "./ToDoItem";



const ToDoList = () => {

  const [task, setTask] = React.useState("");

  //for recording all tasks entered
  const [todo,setToDo] = React.useState([]) ;
  const [isLoggedIn,setLoggedIn] = React.useState(false) ;
  

  //set the task whenever input changes
  const handleChange = (e) => {
    
    setTask(e.target.value) ;
  }

  // onClick Function
  const handleClick = () => {
    const payload = {
      id : uuidv4(),
      title :task,
      status : false

    }
    setToDo([payload,...todo]);
  }

  const handleDelete = (id) => {
    console.log(id);
    
    let newToDo =todo.filter(item =>item.id !==id) //all array with filtered data
    setToDo(newToDo);
  };

  const handleLogIn = () => {
    setLoggedIn(true);
  };

  const handleLogOut = () => {
    setLoggedIn(false);
  };


 // {isLoading && <h2>Loading...</h2>}
  return (
    <>
    
      { isLoggedIn ? (<>
     <h1>TO-DO List</h1>

     <button onClick={handleLogOut} >Log-Out</button>

     <input type="text" value={task} placeholder="Enter Activies / Task"  onChange={handleChange} />

     <button onClick={handleClick} >Add To List</button>

     { todo.length ? todo.map( (item) => {

         return <TodoItem key = {item.id} {...item} handleId= {handleDelete}/>;
         
        }
      ) : <p>No To-Do Exists</p>

     }

    </>

    ) : 

    ( <h1>Something Went Wrong!!! MayBe You're Not Logged In <button onClick={handleLogIn}>Log-In</button> </h1>) }

   </>
  );
};


export { ToDoList} ;


// uuid
// nanoid
// arr1 -> 10 element => 10 different ids 1202222 
/// arr2 -> can same as arr1 id's


//condtion renderring

//true ? a:b

//