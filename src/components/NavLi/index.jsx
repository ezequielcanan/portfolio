import { NavLink } from "react-router-dom"

const NavLi = ({text, url, nav}) => {
  const activeClass = "relative text-primary px-4 w-full block ease-in-out duration-300 after:absolute after:top-[-25%] after:left-0 after:h-[150%] after:p-0 after:w-full after:bg-secondary after:ease-in-out after:duration-500 after:-z-10"
  const notActiveClass = "relative ease-out duration-300 px-4 w-full hover:text-fourth after:left-[-100%] after:-z-10"
  return (
    <li className="w-4/5 text-2xl font-bold text-center md:py-auto md:w-auto md:rotate-90">
      <NavLink to={url} className={({isActive}) => isActive ? activeClass : notActiveClass} onClick={() => window.innerWidth < 768 && nav(false)}>
        {text}
      </NavLink>
    </li>
  )
}

export default NavLi
