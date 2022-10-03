import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0
};

    const counterSlice = createSlice({
        name: "counter",
        initialState: initialCounterState,
        reducers: {
            increment(state) {state.counter++},
            decrement(state) {state.counter--}
        }
    });

export const counterActions = counterSlice.actions;

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

export default store;






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