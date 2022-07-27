import {FaCloudUploadAlt} from 'react-icons/fa';

const Profile = () => {
    
    return (
        <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="https://img.icons8.com/cotton/452/gender-neutral-user--v1.png" alt="ProfileAvatar" />
            <label htmlFor="fileInput">
                <FaCloudUploadAlt class="settingsPPIcon"/>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            required
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password you want to keep"
            minlength="5" maxlength="15" required
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
        </form>
      </div>
      {/* <Categories /> */}
    </div>
    );
}
 
export default Profile;