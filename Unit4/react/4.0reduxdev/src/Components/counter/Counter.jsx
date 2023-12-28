import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment, Reset } from "../../Redux/Counter/action";

export const Counter = () => {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count : {count} </h1>

      <br />

      <button onClick={() => dispatch(Increment(3))}>Increment By 3</button>
      <button onClick={() => dispatch(Decrement(2))}>Decrement By 2</button>
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </div>
  );
};
