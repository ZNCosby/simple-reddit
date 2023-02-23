import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits, selectSubreddits } from './subredditsSlice';
import { selectSelectedSubreddit, setSelectedSubreddit } from "../posts/postsSlice";
import './subreddits.css';
import logo from '../searchbar/logo.png';

const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);

    useEffect(() => {
        dispatch(fetchSubreddits());
      }, [dispatch]);

    return (
        <div className="subreddits">
            <h1 className="subreddits-header">Subreddits</h1>
            <div className="border"></div>
            <ul className="subreddit-list">
                {subreddits.map((subreddit) => (
                    <li
                        key={subreddit.id}
                        className={selectedSubreddit === subreddit.url ? 'selected-subreddit' : 'subreddit'}
                    >
                        <button
                        type="button"
                        className="subreddit-link"
                        onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
                        >
                        <img
                            src={subreddit.icon_img || logo}
                            alt={subreddit.display_name}
                            className="subreddit-icon"
                            style={{ border: `3px solid ${subreddit.primary_color}` }}
                        />
                            {subreddit.display_name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Subreddits;