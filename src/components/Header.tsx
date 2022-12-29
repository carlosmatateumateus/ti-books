import { MagnifyingGlass } from "phosphor-react";
import { GithubLogo, LinkedinLogo } from "phosphor-react"
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("")

  return (
    <header className="h-[42px] py-10 flex items-center justify-between center mb-[25px]">
      <div className="flex items-center">
        <Link to="/">
          <span className="text-2xl text-white font-medium">tiBooks</span>
        </Link>
        <form 
          className="w-[180px] h-12 rounded bg-gray-900 flex items-center gap-2 ml-[26px]"
          onSubmit={(e) => {
            e.preventDefault()
            window.document.location = `/search/${search}`
          }}
          >
          <MagnifyingGlass className="ml-[16px]" color="#636363"/>
          <input 
            value ={search} 
            type="text" 
            placeholder="Search books" 
            className="w-[105px] text-[14px] bg-transparent  text-gray-800 placeholder:text-gray-800 placeholder:font-medium outline-none inline-block"
            onChange={(e) => setSearch(e.target.value)}
            />
        </form>
      </div>
      <ul className="flex gap-1">
        <li>
          <a href="https://github.com/carlosmatateumateus/ti-books" target="_blank" rel="noopener noreferrer">
            <GithubLogo weight="duotone" color="#818a91" size="25px"/>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/carlosmateus" target="_blank" rel="noopener noreferrer">
            <LinkedinLogo weight="duotone" color="#818a91" size="25px" />
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header;