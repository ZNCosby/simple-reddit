import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from "../features/subreddits/subredditsSlice";
import postsReducer from "../features/posts/postsSlice";

export const store = configureStore({
    reducer: {
        subreddits: subredditsReducer,
        posts: postsReducer,
    }
});