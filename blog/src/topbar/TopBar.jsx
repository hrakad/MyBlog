import "./topbar.css"

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topLeft">
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-tiktok"></i>
      <i class="fa-brands fa-instagram-square"></i>
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
      <div className="topRight">Right</div>
    </div>
  )
}
