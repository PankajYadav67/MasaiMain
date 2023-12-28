
export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        count: state.count++,
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        count: state.count--,
      };
    } 

    case "add": {
      return {
        ...state,
        count: state.count+x,
      };
    }

    case "minus": {
      return {
        ...state,
        count: state.count-x,
      };
    }
    case "multi": {
      return {
        ...state,
        count: state.count*x,
      };
    }
    case "divide": {
      return alert("this feature not available for now. thanx for visiting...");
    }
    default:{
      return state;
    }
  }
};
