import axios from 'axios';
import { useEffect, useState } from 'react';
import './sidebar.css';

export default function Sidebar() {
  const [catgs, setCatgs] = useState([]);

  useEffect(() => {
    const getCatgs = async () => {
      const resp = await axios.get('http://localhost:3300/api/categories');
      setCatgs(resp.data);
    };
    getCatgs();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/12324973/pexels-photo-12324973.jpeg?cs=srgb&dl=pexels-yana-moroz-12324973.jpg&fm=jpg?h=300&w=300"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          reprehenderit qui iste illo officiis. Harum, labore adipisci,
          voluptate repudiandae necessitatibus ad porro sint mollitia
          accusantium nobis quidem! Quo, tenetur omnis!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {catgs.map((c) => (
            <li className="sidebarListItem" key={c.name}>
              {c.name}
            </li>
          ))}
          ;
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-tiktok"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
