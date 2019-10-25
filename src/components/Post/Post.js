import React from 'react'

import './style.css'

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
        </div>
    )
}

export default Post
