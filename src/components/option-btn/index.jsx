import "./index.scss";

const OptionBtn = ({ text, icon }) => {
  return (
    <button className="option-btn">
      <img src={icon} alt="icon" style={{ marginRight: "8px" }} /> {text}
    </button>
  );
};

export default OptionBtn;
