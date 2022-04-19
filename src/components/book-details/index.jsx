import "./index.scss";
import BookImage from "../../assets/images/Astrophysics-for-People-in-a-Hurry-eBook.png";
import OptionBtn from "../option-btn";
import Tag from "../tag";
import FoldedNewspaper from "../../assets/images/folded-newspaper.png";
import AudioHeadphones from "../../assets/images/audio-headphones.png";
import BookMark from "../../assets/images/Group 2254.png";
import Cart from "../../assets/images/Group 2275.png";

const BookDetails = ({ image, title, sub_title, authors }) => {
  console.log({ image, title, sub_title, authors });
  return (
    <div className="book-details-wrapper">
      <div className="book-image">
        <img src={BookImage} alt={title} />
      </div>
      <div className="book-info">
        <h1 className="title">{title}</h1>
        <h2 className="sub-title">{sub_title}</h2>
        <h3 className="author">{authors}</h3>
        <div className="options">
          <OptionBtn icon={FoldedNewspaper} text="18 min read" />
          <OptionBtn icon={AudioHeadphones} text="14 min listen" />
          <OptionBtn icon={BookMark} text="Add to Library" />
          <OptionBtn icon={Cart} text="Buy Book" />
        </div>
        <div className="tags">
          <Tag text="Business & Finance" />
          <Tag text="Business & Finance" />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
