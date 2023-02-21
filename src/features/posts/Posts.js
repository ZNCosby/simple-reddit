import React from "react";
import './Posts.css';
import logo from '../searchbar/logo.png';
import { Post } from "../post/Post";

export const Posts = () => {
    return (
        <div className="posts">
            <Post />
            <Post />
        </div>
    )
}