import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://api.adorable.io/avatars/96/abott@adorable.png',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://api.adorable.io/avatars/96/abott@adorable.png',
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://api.adorable.io/avatars/96/abott@adorable.png',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://api.adorable.io/avatars/96/abott@adorable.png',
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
      {
        id: 3,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://api.adorable.io/avatars/96/abott@adorable.png',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 3,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://api.adorable.io/avatars/96/abott@adorable.png',
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <>
        {posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </>
    );
  }
}

export default PostList;
