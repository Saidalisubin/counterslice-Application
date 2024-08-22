
import {configureStore} from "@reduxjs/toolkit";
import  counterSlice  from "./counterSlice";

// we have to use a method configurestore to initialize this file as store
export const store =configureStore({
    reducer:{
        counter:counterSlice
    }


})
