import './header.css';

export default function Header() {
  return (
    <div className="Header">
      <div className="headerTitles">
        <span className="headerTitleSm">R & N</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/5833890/pexels-photo-5833890.jpeg?cs=srgb&dl=pexels-james-wheeler-5833890.jpg&fm=jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
