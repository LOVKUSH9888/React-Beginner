import plusMinus from "./plusMinus";
//Initial State
const initialState = 0;

//Reducer Funtion

const plusMinus = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
      default : return state;
  }
};
export default plusMinus;
