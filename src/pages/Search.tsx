import BooksGroup from "../components/BooksGroup";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

const Search = () => {
  const { query } = useParams()
  return (
    <>
      <section>
        <Header />
        <BooksGroup groupName={`${query}`} isSearch/>
      </section>
      <Footer />
    </>
  )
}

export default Search;