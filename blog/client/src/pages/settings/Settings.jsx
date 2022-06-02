import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css';

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfilePic">
            <img
              src="https://images.pexels.com/photos/6685428//pexels-photo-6685428.jpeg?auto=compress&css=tinysrgb&dpr=2&width=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="userIcon fa-solid fa-user"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
            ></input>
          </div>
          <label>Username</label>
          <input type="text" placeholder="John Doe" />
          <label>Email</label>
          <input type="email" placeholder="example@email.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
