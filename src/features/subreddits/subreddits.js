import React from "react";
import './subreddits.css';
import logo from '../searchbar/logo.png';

export const Subreddits = () => {
    return (
        <div className="subreddits">
            <h1 className="subreddits-header">Subreddits</h1>
            <div className="border"></div>
            <ul className="subreddit-list">
                <li className="subreddit">
                    <button className="subreddit-link">
                        <img src={logo} className="subreddit-icon"/>
                        SubredditNameGoesHere
                    </button>
                </li>
                <li className="subreddit">
                    <button className="subreddit-link">
                        <img src={logo} className="subreddit-icon"/>
                        SubredditNameGoesHere
                    </button>
                </li>
            </ul>
        </div>
    );
}