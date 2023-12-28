import {useSelector} from "react-redux";

export const Counter = () => {
  const value = useSelector((state) => 50);

  return (
    <div> 
      <h1> Counter:{value}</h1>

      <button>Increment</button>
      <button>Decrement</button>
    </div>
  );
};