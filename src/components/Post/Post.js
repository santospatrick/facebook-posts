import React from 'react'

import './style.css'
import Comment from '../Comment'

function Post({ data }) {
    return (
        <div className="post">
            <div className="post-header">
                <img src={data.author.avatar}  />
                <div className="post-text">
                    <span className="post-name">{data.author.name}</span>
                    <span className="post-date">{data.date}</span>
                </div>
            </div>
            <div className="post-content">
                {data.content}
            </div>
            <div className="post-divisor"></div>
            {data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
        </div>
    )
}

export default Post
