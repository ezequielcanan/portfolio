import Presentation from "../../components/Presentation"
import Carousel from "../../components/Carousel"
import Section from "../../components/Section";
import { GoArrowDown } from "react-icons/go"

const Home = ({scrollRef}) => {
  return (
    <Section id={"home"} className={"h-screen grid items-center px-0 justify-items-center md:grid-cols-2 bg-[url('./background.webp')] bg-third/80 bg-left-top bg-cover bg-no-repeat bg-fixed bg-blend-multiply"}>
      <Presentation />
      <Carousel />
      <GoArrowDown className="absolute bottom-[5%] animate-bounce left-1/2 text-secondary text-5xl bg-[#000] rounded-full p-3 cursor-pointer" onClick={() => document.getElementById("about").scrollIntoView()}/>
    </Section>
  )
}

export default Home