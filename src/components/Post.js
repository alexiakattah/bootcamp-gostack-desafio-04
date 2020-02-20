import React from 'react';
import '../styles/post.css';
import Comment from './Comment';

function Post({ data }) {
  return (
    <>
      <div className="content">
        <div className="Postfile">
          <div className="PostContent">
            <div className="PostHeader">
              <img src="" alt="" />
              <div className="UserName">
                <span>{data.author.name}</span>
                <span>{data.date}</span>
              </div>
            </div>
            <div className="PostMessage">{data.content}</div>
          </div>
        </div>
        <hr />
        {/* {data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))} */}
      </div>
    </>
  );
}

export default Post;
