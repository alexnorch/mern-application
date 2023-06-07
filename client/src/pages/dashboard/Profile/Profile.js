import { useState } from "react";
import { useAppContext } from "../../context/AppContext";

// Components
// import StyledCategories from "../../components/styles/Categories.styled";
// import Category from "../../../components/Category/Category";
import Input from "../../../components/UI/Input/Input";

// Icons
import { AiOutlineUpload } from "react-icons/ai";

const Profile = () => {
  const { user } = useAppContext();
  const [userValues, setUserValues] = useState({
    name: user.name,
    email: user.email,
    location: user.location,
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <div>
      <div className="profile-left">
        <label className="image" htmlFor="image">
          <img src={user.photo} alt="" />
          <span>
            <AiOutlineUpload />
          </span>
        </label>
        <input className="hide" id="image" type="file" accept="image/*" />
        <div className="bio">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
        <Input labelText="Role" value={user.role} disabled />
        <Input labelText="Your ID" value={user._id} disabled />
      </div>
      <div className="profile-middle">
        <form>
          <Input
            changeHandler={onChange}
            name="name"
            labelText="Your name"
            value={userValues.name}
          />
          <Input
            changeHandler={onChange}
            name="email"
            labelText="Your email"
            type="email"
            value={userValues.email}
            placeholder="Please enter your email"
          />
          <Input
            changeHandler={onChange}
            name="location"
            labelText="Your location"
            value={userValues.location}
            placeholder="Please enter your location"
          />
          <button className="btn">Change</button>
        </form>
      </div>
      <div className="profile-right">
        {/* <h3>My categories</h3>
        <StyledCategories>
          {categories.map((item) => (
            <Category name={item.name} color={item.color} />
          ))}
        </StyledCategories> */}
        <h3>Create new category</h3>
        <form>
          <Input
            labelText="Title"
            placeholder="Type the title of the category"
          />
          <Input
            labelText="Color"
            placeholder="Type the color of the category"
          />
          <button type="submit" className="btn">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
