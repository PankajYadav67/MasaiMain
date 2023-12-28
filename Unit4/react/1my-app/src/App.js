import { LecToDos } from "./lec/LecToDos";


function App() {
  let todos = [
    {id:1, value :"react", completed : false},
    {id:2, value :"vdom", completed : false},
    {id:3, value :"babel", completed : true},
    {id:4, value :"webpack", completed : true}

  ]

  return (
    <>
    

     <div>
       <LecToDos Todos todos={todos} />
     </div>
    </>
  );
}

export default App;
