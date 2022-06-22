import Posts from '../posts/Posts';
import './post.css';

export default function Post({ post }) {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCategs">
          <span className="postCategs">Music</span>
          <span className="postCategs">Life</span>
        </div>
        <span className="postTitle">{post.title}</span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
