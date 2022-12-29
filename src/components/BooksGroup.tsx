import { useState, useEffect } from "react"
import api from "../services/api"
import { ArrowRight } from "phosphor-react"

interface BooksGroupProps {
  groupName: string,
  isSearch?: Boolean,
}

const BooksGroup = (props: BooksGroupProps) => {
  const [books, setBooks] = useState([] as any)
  const [booksCount, setBooksCount] = useState<number>(0)

  useEffect(() => {
    const callApi = () => {
      api.get(props.groupName)
      .then((response) => response.data)
      .then((data) => {
        setBooks(data.books)
        console.log(data.books)
        setBooksCount((data.books.length > 0)?(data.books.length):(0))
      })
      .catch()
    }
    
    return callApi()
  })

  return (
    <section className="center mt-[35px] mb-[54px]">
        <div className="flex justify-between">
          {
            (!props.isSearch)?
            (
              <h2 className="text-[18px] font-medium text-white">
                { props.groupName } <strong className="font-medium text-blue-900">books</strong>
              </h2>
            ):
            (
              <h2 className="text-[18px] font-medium text-white">
                {booksCount} results for <strong className="font-medium text-blue-900">{props.groupName}</strong>
              </h2>
            )
          }
          <button>
            <ArrowRight size="18px" color="#737373"/>
          </button>
        </div>
        <div className="flex gap-8 book-scroll-bar">
          {
            books.map((book: any) => (
              <div className="mt-[20px] w-[240px] shrink-0 rounded flex flex-col" key={book.title}>
                <a href={book.url} target="_blank" rel="noopener noreferrer">
                  <img className={`w-[100%] h-[255px] rounded`} src={book.image} alt={book.title}/>
                </a>
                <h3 className="text-center mb-2 font-medium text-gray-800">{book.price}</h3>
                <h2 className="text-center text-white font-medium">{book.title}</h2>
              </div>
            ))
          }
        </div>
      </section>
  )
  }

  export default BooksGroup;