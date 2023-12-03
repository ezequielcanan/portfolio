import { useState } from "react"
import { NavLink } from "react-router-dom"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavLi from "../NavLi"
import logo from "../../assets/images/logo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const sections = ["About", "Projects", "Contact"]
  const handleNavClick = () => setNav(!nav)
  return (
    <header className="w-full h-[100px] z-20 flex fixed md:flex-col md:top-0 md:left-0 md:justify-center md:w-[120px] md:h-full">
      <nav className="h-full w-full flex items-center px-5 md:px-auto md:flex-col justify-between">
        <NavLink to={"/"} className="w-[100px] md:h-auto" onClick={() => nav && setNav(false) }>
          <img src={logo} alt="" className=""/>
        </NavLink>
        <ul className="hidden text-[#0ff] h-full md:flex md:flex-col justify-evenly">
          {sections.map(section => {
            return <NavLi key={section} url={section.toLowerCase()} text={section}/>
          })}
        </ul>

        <div className="block md:hidden" onClick={handleNavClick}>
          {nav ? <AiOutlineClose size={40} color="#fff"/> : <AiOutlineMenu size={40} color="#fff"/>}
        </div>

        <ul className={(nav ? "fixed left-0 bg-primary/70 text-fourth ease-in-out duration-300" : "ease duration-[1.5s] fixed left-[-100%]") + " top-[100px] backdrop-blur-md w-full h-screen flex flex-col justify-center gap-y-32 px-8 py-10 items-center md:hidden"}>
          {sections.map(section => {
            return <NavLi key={section} url={section.toLowerCase()} text={section} nav={setNav} />
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar