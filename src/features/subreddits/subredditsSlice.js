import { createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from '../../api/reddit';

const subredditSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        error: false,
        isLoading: false,
    },
    reducers: {
        startGetSubreddits(state) {
            state.isLoading = true;
            state.error = false;
          },
          getSubredditsSuccess(state, action) {
            state.isLoading = false;
            state.subreddits = action.payload;
          },
          getSubredditsFail(state) {
            state.isLoading = false;
            state.error = true;
          },
    }
});

export const { startGetSubreddits, getSubredditsSuccess, getSubredditsFail } = subredditSlice.actions;
export const selectSubreddits = (state) => state.subreddits.subreddits;
export default subredditSlice.reducer;

//thunk
export const fetchSubreddits = () => async (dispatch) => {
    try {
      dispatch(startGetSubreddits());
      const subreddits = await getSubreddits();
      dispatch(getSubredditsSuccess(subreddits));
    } catch (error) {
      dispatch(getSubredditsFail());
    }
  };