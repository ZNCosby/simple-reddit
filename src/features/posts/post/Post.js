import React from "react";
import './Post.css';
import { TiArrowDownOutline, TiArrowDownThick, TiArrowUpOutline, TiArrowUpThick } from "react-icons/ti";

export const Post = (props) => {
    const { post } = props;

    return(
        <div className="post">
            <div className="post-header">
                <h3 className="post-title">{post.title}</h3>
                <div className="votes">
                    <button className="up-vote" aria-label="Up vote">
                    </button>
                    <p>{post.ups}</p>
                    <button className="down-vote" aria-label="Down vote">
                    </button>
                </div>
            </div>
            <img src={post.url} alt=''/>
            <div className="below-post">
                <h4 className="post-author">{post.author}</h4>
            </div>
        </div>
    )
}