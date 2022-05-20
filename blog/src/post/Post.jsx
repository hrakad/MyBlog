import './post.css';

export default function Post() {
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
        <span className="postTitle">Lorem, ipsum dolor.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        tenetur eaque repellat maiores quam? Architecto magnam earum sit nulla
        sapiente eum eius, atque unde aperiam soluta minus ipsa provident
        nobis.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur tenetur eaque repellat maiores quam? Architecto magnam earum
        sit nulla sapiente eum eius, atque unde aperiam soluta minus ipsa
        provident nobis.Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consectetur tenetur eaque repellat maiores quam? Architecto magnam earum
        sit nulla sapiente eum eius, atque unde aperiam soluta minus ipsa
        provident nobis.
      </p>
    </div>
  );
}
