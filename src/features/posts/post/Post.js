import React, { useState } from "react";
import './Post.css';
import { TiArrowDownOutline, TiArrowDownThick, TiArrowUpOutline, TiArrowUpThick, TiMessages } from "react-icons/ti";
import moment from "moment/moment";
import Comment from '../comments/comment';

export const Post = (props) => {
    const [voteValue, setVoteValue] = useState(0);
    const { post, onToggleComments } = props;
    const [voteCount, setVoteCount] = useState(post.ups);

    /**
        * @param {number} newValue
        */
    const onHandleVote = (newValue) => {
        if (newValue === voteValue) {
            setVoteValue(0);
            setVoteCount(post.ups);
        } else if (newValue === 1) {
            setVoteValue(1);
            setVoteCount(voteCount + 1);
        } else {
            setVoteValue(-1);
            setVoteCount(voteCount - 1);
        }
      };

      const renderUpVote = () => {
        if (voteValue === 1) {
          return <TiArrowUpThick className="vote-action" />;
        }
        return <TiArrowUpOutline className="vote-action" />;
      };
      const renderDownVote = () => {
        if (voteValue === -1) {
          return <TiArrowDownThick className="vote-action" />;
        }
        return <TiArrowDownOutline className="vote-action" />;
      };

      const getVoteType = () => {
        if (voteValue === 1) {
          return 'up-vote';
        }
        if (voteValue === -1) {
          return 'down-vote';
        }
        return '';
      };

      const renderComments = () => {
        if (post.errorComments) {
          return (
            <div>
              <h2 className="comments-error">Error loading comments</h2>
            </div>
          );
        }

        if (post.loadingComments) {
          return (
            <div className="comments-loading">
              <h2>Loading comments</h2>
            </div>
          );
        }
        
        if (post.showingComments) {
          return (
            <div className="comments">
              {post.comments.map((comment) => (
                <Comment comment={comment} key={comment.id} />
              ))}
            </div>
          );
        }

        return null;
      }

    return(
        <div className="post">
            <div className="post-header">
                <h3 className="post-title">{post.title}</h3>
                <div className="votes">
                    <button
                        className={`vote-action-button up-vote ${voteValue === 1 && 'active'}`}
                        onClick={() => onHandleVote(1)}
                        aria-label="Up vote"
                    >
                        {renderUpVote()}
                    </button>
                    <p className={`vote-value ${getVoteType()}`}>
                        {voteCount}
                    </p>
                    <button
                        type="button"
                        className={`vote-action-button down-vote ${voteValue === -1 && 'active'}`}
                        onClick={() => onHandleVote(-1)}
                        aria-label="Down vote"
                    >
                        {renderDownVote()}
                    </button>
                </div>
            </div>
            <img src={post.url} alt=''/>
            <div className="below-post">
                <h4 className="post-author">{post.author}</h4>
                <h4 className="post-time">{moment.unix(post.created_utc).fromNow()}</h4>
                <div className="comment-toggle">
                  <button
                    type="button"
                    className={`show-comments-button ${post.showingComments && 'showing-comments'}`}
                    onClick={() => onToggleComments(post.permalink)}
                    aria-label="Show comments"
                  >
                    <TiMessages className="show-comments" />
                  </button>
                  {post.num_comments}
                </div>
                
            </div>
            {renderComments()}
        </div>
    )
}