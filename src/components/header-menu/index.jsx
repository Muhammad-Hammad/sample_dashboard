import "./index.scss";

const HeaderMenu = ({ text, onClick, active = false }) => {
  return (
    <div className={`header-menu-wrapper ${active ? "active" : ""}`}>
      {text}
    </div>
  );
};

export default HeaderMenu;
