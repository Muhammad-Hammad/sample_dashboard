import "./App.scss";
import BookDetails from "./components/book-details";
import Header from "./components/header";
import { dummy_book } from "./utils/dummy_data";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page">
        <BookDetails {...dummy_book} />
      </div>
    </div>
  );
}

export default App;
