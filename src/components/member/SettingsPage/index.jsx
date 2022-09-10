import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpdateProfile } from "features/auth/authSlice";
import pic from "../../../assets/images/pic.png";
import "./styles.scss";

export default function SettingsComponent() {
  const [data, setData] = useState({});
  const [imagePreview, setImagePreview] = useState();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const AVATAR_URL = "http://localhost:8000/uploads/users";

  useEffect(() => {
    if (auth.isLogin && auth.token && Object.keys(auth.user).length) {
      setData(auth.user);
    }
  }, [auth]);

  const handleInputAvatar = (e) => {
    const [file] = e.target.files;

    setImagePreview(URL.createObjectURL(file));
    setData({
      ...data,
      avatar: file,
    });
  };

  const handleInputName = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const handleInputEmail = (e) => {
    setData({
      ...data,
      email: e.target.value,
    });
  };

  const handleInputPhoneNumber = (e) => {
    setData({
      ...data,
      phone_number: e.target.value,
    });
  };

  const showAvatarOrPreview = () => {
    if (imagePreview) {
      return <img src={imagePreview} width="90" height="90" alt="" />;
    } else {
      if (auth.user.avatar) {
        return (
          <img
            src={`${AVATAR_URL}/${auth.user.avatar}`}
            width="90"
            height="90"
            alt=""
          />
        );
      } else {
        return <img src={pic} width="90" height="90" alt="" />;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone_number", data.phone_number);
    formData.append("avatar", data.avatar);

    const profileData = {
      id: data.id,
      data: formData,
    };

    dispatch(fetchUpdateProfile(profileData));

    Swal.fire({
      title: "Success",
      text: "Successfully updated your profile",
      icon: "success",
      confirmButtonText: "OK!",
    });
  };

  return (
    <div className="settings-container col-lg-5">
      <h2 className="settings-header">Settings</h2>
      {Object.keys(data).length !== 0 && (
        <form className="settings-form" onSubmit={handleSubmit}>
          <div className="form-avatar">{showAvatarOrPreview()}</div>
          <div className="form-upload">
            <input
              type="file"
              name="upload"
              className="form-file form-control"
              onChange={handleInputAvatar}
            />
          </div>
          <div className="form-input form-email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Your Email Address"
              value={data.email ? data.email : ""}
              onChange={handleInputEmail}
              disabled
            />
          </div>
          <div className="form-input form-name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Write Your Full Name"
              value={data.name ? data.name : ""}
              onChange={handleInputName}
            />
          </div>
          <div className="form-input form-phone">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Your Phone Number"
              value={data.phone_number ? data.phone_number : ""}
              onChange={handleInputPhoneNumber}
            />
          </div>
          <div className="form-button">
            <button type="submit" className="btn btn-save">
              Save Changes
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
