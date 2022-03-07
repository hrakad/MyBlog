import "./topbar.css"

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topLeft">
      <i className="topIcons fa-brands fa-facebook"></i>
      <i className="topIcons fa-brands fa-twitter"></i>
      <i className="topIcons fa-brands fa-tiktok"></i>
      <i className="topIcons fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
      <img className="topImage"
      src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt=""
      />
      <i className="topSearch fa-solid fa-magnifying-glass"></i>
      </div>
      
    </div>
  )
}
