import Header from "../components/Header";
import BooksGroup from "../components/BooksGroup";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      <section>
        <Header />
        <BooksGroup groupName="Programming" />
        <BooksGroup groupName="Computer cience" />
        <BooksGroup groupName="Python" />
        <BooksGroup groupName="Node Js" />
        <BooksGroup groupName="Linux" />
      </section>
      <Footer />
    </>
  )
}

export default Home;