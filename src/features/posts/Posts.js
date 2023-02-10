import React from "react";
import './Posts.css';
import logo from '../searchbar/logo.png';

export const Posts = () => {
    return (
        <div className="posts">
            <div className="post">
                <div className="post-header">
                    <h2>Post Title</h2>
                    <div className="votes">
                        <button className="up-vote" aria-label="Up vote">
                        </button>
                        <p>Upvote count goes here</p>
                        <button className="down-vote" aria-label="Down vote">
                        </button>
                    </div>
                </div>
                <img src={logo} />
            </div>
        </div>
    )
}