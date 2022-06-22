import Posts from '../posts/Posts';
import './post.css';

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
