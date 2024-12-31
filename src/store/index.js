import { createSlice,configureStore } from "@reduxjs/toolkit";


const initialState={count:0,showCounter:true}
const countReducer=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state){
            state.count++;
        },
        decrement(state){
            state.count--;
        },
        increseby(state,action){
            state.count=state.count+action.amount;
        },
        toggleCounter(state){
            state.showCounter=!state.showCounter
        }
    }
})

const store=configureStore({reducer:{counter:countReducer.reducer}});

export const counterAction=countReducer.actions;
export default store;