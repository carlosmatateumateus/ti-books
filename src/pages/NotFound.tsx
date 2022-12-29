import Header from "../components/Header";
import notFoundErrorImg from "../assets/not-found.svg"
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <section className="flex flex-col justify-between items-center overflow-x-hidden">
        <Header/>
        <img src={notFoundErrorImg} alt="error 404" className="w-[450px]" draggable="false"/>
      </section>
      <Footer />
    </>
  )
}

export default NotFound;