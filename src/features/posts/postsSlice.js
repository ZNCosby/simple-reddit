import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getSubredditPosts } from '../../api/reddit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        error: false,
        isLoading: false,
        searchTerm: '',
        selectedSubreddit: '/r/Home/'
    },
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
          },
          startGetPosts(state) {
            state.isLoading = true;
            state.error = false;
          },
          getPostsSuccess(state, action) {
            state.isLoading = false;
            state.posts = action.payload;
          },
          getPostsFailed(state) {
            state.isLoading = false;
            state.error = true;
          },
          setSearchTerm(state, action) {
            state.searchTerm = action.payload;
          },
          setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
            state.searchTerm = '';
          },
    }
});

export const { setPosts, startGetPosts, getPostsSuccess, getPostsFailed, setSearchTerm, setSelectedSubreddit } = postsSlice.actions;
const selectPosts = (state) => state.posts.posts;
const selectSearchTerm = (state) => state.posts.searchTerm;
export const selectSelectedSubreddit = (state) => state.posts.selectedSubreddit;
export default postsSlice.reducer;

//thunks
export const fetchPosts = (subreddit) => async (dispatch) => {
    try {
      dispatch(startGetPosts());
      const posts = await getSubredditPosts(subreddit);
      const postsWithData = posts.map((post) => ({
        ...post,
        showingComments: false,
        comments: [],
        loadingComments: false,
        errorComments: false,
      }));
      dispatch(getPostsSuccess(postsWithData));
    } catch (error) {
      dispatch(getPostsFailed());
    }
  };

  export const selectFilteredPosts = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
      if (searchTerm !== '') {
        return posts.filter((post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
  
      return posts;
    }
  );