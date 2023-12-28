import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement } from "./Redux/action";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count : {count} </h1>

      <br />

      <button onClick={() => dispatch(Increment(1))}>Increment</button>
      <button onClick={() => dispatch(Decrement(1))}>Decrement</button>
    </div>
  );
}

export default App;
