import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from "../features/subreddits/subredditsSlice";

export const store = configureStore({
    reducer: {
        subreddits: subredditsReducer,
        
    }
});