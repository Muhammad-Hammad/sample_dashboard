import "./index.scss";

const Tag = ({ text = "default", onClick }) => {
  return <div className="tag">{text}</div>;
};

export default Tag;
