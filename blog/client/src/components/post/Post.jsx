import Posts from '../posts/Posts';
import './post.css';
import { Link } from 'react-router-dom';

export default function Post({ post }) {
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCategs">
          {post.categories.map((c) => (
            <span className="postCategs">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id} `} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
