import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "../store/actions";

export const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Counter:{count}</p>

      <div>
        <button onClick={() => dispatch(incrementCounter(1))}>Increment</button>
        <button onClick={() => dispatch(decrementCounter(1))}>Decrement</button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementCounter(5))}>Increment by 5</button>
        <button onClick={() => dispatch(decrementCounter(20))}>Decrement by 20</button>
      </div>
    </div>
  );
};
