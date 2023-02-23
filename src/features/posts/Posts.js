import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './Posts.css';
import { Post } from "./post/Post";
import { fetchPosts, selectFilteredPosts, setSearchTerm, fetchComments } from "./postsSlice";

export const Posts = () => {
    const postList = useSelector((state) => state.posts);
    const { isLoading, error, searchTerm, selectedSubreddit } = postList;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();

    useEffect(() => {dispatch(fetchPosts(selectedSubreddit));}, [selectedSubreddit]);

    const onToggleComments = (index) => {
        const getComments = (permalink) => {
          dispatch(fetchComments(index, permalink));
        };
    
        return getComments;
      };

    if (isLoading) {
        return (
            <h2>Loading</h2>
        );
    }

    if (error) {
        return (
          <div className="error">
            <h2>Failed to load posts.</h2>
            <button
              type="button"
              onClick={() => dispatch(fetchPosts(selectedSubreddit))}
            >
              Try again
            </button>
          </div>
        );
    }
    
    if (posts.length === 0) {
        return (
            <div className="error">
                <h2>No posts matching "{searchTerm}"</h2>
                <button type="button" onClick={() => dispatch(setSearchTerm(''))}>
                    Go home
                </button>
            </div>
        );
    }
    return (
        <div className="posts">
            {posts.map((post, index) => (
                <Post
                    key={post.id}
                    post={post}
                    onToggleComments={onToggleComments(index)}
                />
            ))}
        </div>
    )
}