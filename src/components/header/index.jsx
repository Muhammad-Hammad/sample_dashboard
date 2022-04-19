import HeaderMenu from "../header-menu";
import "./index.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="left">
        <h2>Instaread</h2>
      </div>
      <div className="right">
        <HeaderMenu text="Discover" />
        <HeaderMenu text="Search" />
        <HeaderMenu text="Try Instead" active />
        <HeaderMenu text="Login" />
      </div>
    </div>
  );
};

export default Header;
