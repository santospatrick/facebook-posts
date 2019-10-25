import React from 'react'

import './style.css'
import Post from '../Post';

class PostList extends React.Component {
    state = {
        posts: [
          {
            id: 1,
            author: {
              name: "Patrick Santos",
              avatar: "https://lh3.googleusercontent.com/-8dvWMJkMQQY/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfAc4q8Gw_88TjtIHmUFZYDbYe_9g.CMID/s64-c/photo.jpg"
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
            comments: [
              {
                id: 1,
                author: {
                  name: "Diego Fernandes",
                  avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                content: "Conteúdo do comentário"
              }
            ]
          }
        ]
    };

    render() {
        return (
            <div className="post-list">
                {this.state.posts.map(item => (
                    <Post key={item.id} data={item} />
                ))}
            </div>
        )
    }
}

export default PostList
