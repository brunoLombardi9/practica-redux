import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
    value: 0
};

export  const counterSlice = createSlice({
        name: "counter",
        initialState: initialCounterState,
        reducers: {
            increment(state) {state.value++},
            decrement(state) {state.value--}
        }
    });

export const counterActions = counterSlice.actions;










    // function counterReducer(state = initialState, action) {
    // switch (action.type) {
    //     case "decrement":
    //         return {
    //             counter: state.counter - 1
    //         }
    //         break;
    //     case "increment":
    //         return {
    //             counter: state.counter + 1
    //         }
    //         break;
    //     default:
    //         return state;
    // }

// }

// const store = createStore(counterReducer);