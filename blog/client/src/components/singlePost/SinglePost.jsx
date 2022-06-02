import './singlePost.css';

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          alt=""
          src="https://images.pexels.com/photos/6685428//pexels-photo-6685428.jpeg?auto=compress&css=tinysrgb&dpr=2&width=500"
        />
        <h1 className="singlePostTitle">
          {' '}
          Lorem ipsum dolor sit amet.
          <i className="singlePostIcon fa-solid fa-trash-can"></i>
          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>John Doe</b>
          </span>
          <span className="singlePostDate">1hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus in
          consectetur tenetur, distinctio ex, dolorum harum porro assumenda
          minima ea nostrum, eaque dolores! Error autem nobis corporis harum
          pariatur alias eum excepturi voluptatibus deserunt facere incidunt,
          ducimus deleniti asperiores fugiat quae quidem non impedit possimus,
          repellat ipsam dolorum omnis molestias id. Earum delectus facilis
          necessitatibus? Aut perspiciatis odit praesentium minima odio
          accusamus, consectetur illum fuga, soluta beatae repudiandae a
          numquam. Sit laborum illum, perspiciatis dolorum deserunt itaque,
          tenetur animi aspernatur voluptatum saepe dignissimos quo. Corrupti,
          voluptas id! Sunt, voluptate, aliquid corrupti aliquam voluptates
          dicta recusandae perferendis ipsum hic laborum, iste quo non est
          similique vel adipisci voluptas quia dolores voluptatem? Ratione,
          cumque deserunt! Fugit facilis modi eos ullam, omnis incidunt
          molestiae dolorum dignissimos similique eligendi itaque provident
          quam, velit impedit voluptatem odit ducimus id esse ex! Accusantium
          fugit dolorem, nobis nesciunt sapiente odit, corporis error sunt
          ratione, debitis iure? Quas voluptatibus repellat ipsa accusantium
          minima laudantium aut sunt. Reprehenderit aspernatur doloremque
          repudiandae quae? Veniam, expedita aut sed non iure id laudantium
          officia tempore magnam molestias, doloremque beatae repellat eum quos
          tenetur iste aliquam. Voluptatum consectetur numquam laudantium
          aliquid nostrum tempore ullam voluptatem, sit maxime voluptas, aperiam
          porro molestias ut iste.
        </p>
      </div>
    </div>
  );
}
