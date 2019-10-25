import React from 'react'

import './style.css'

function Comment({ data }) {
    return (
        <div className="comment">
            <img src={data.author.avatar} alt="Comentarista"/>
            <div className="comment-content">
                <strong>{data.author.name}</strong> {data.content}
            </div>
        </div>
    )
}

export default Comment
