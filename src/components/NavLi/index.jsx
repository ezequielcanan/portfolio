import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

const NavLi = ({text, url, nav, type}) => {
  //const activeClass = "relative text-primary px-4 w-full block ease-in-out duration-300 after:absolute after:top-[-25%] after:left-0 after:h-[150%] after:p-0 after:w-full after:bg-fifth after:ease-in-out after:duration-500 after:-z-10"
  const notActiveClass = "relative text-fifth ease-out duration-300 px-4 w-full hover:text-nav after:w-0 after:-z-10"
  return (
    <li className="w-4/5 text-2xl font-bold text-center md:py-auto md:w-auto md:rotate-90">
      {type === "hash" ? (
        <HashLink to={url} className={notActiveClass} onClick={() => window.innerWidth < 768 && nav(false)}>
          {text}
        </HashLink>
      ) : (
        <Link to={url} className={notActiveClass} onClick={() => window.innerWidth < 768 && nav(false)}>
          {text}
        </Link>
      )}
    </li>
  )
}

export default NavLi
