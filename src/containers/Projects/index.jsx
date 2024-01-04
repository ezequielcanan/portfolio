import Section from "../../components/Section"
import Text from "../../components/Text"
import Card from "../../components/Card"
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiHtml5, SiCss3 } from "react-icons/si"

const Projects = () => {
  return (
    <Section id={"projects"} className={"min-h-screen flex flex-col items-center justify-center bg-third/80 h-auto px-2 pb-10 md:pt-10 md:px-[30px] bg-[url('/projects-background.jpg')] bg-center md:bg-left-top bg-no-repeat bg-cover bg-blend-multiply"}>  
      <Text title={"Projects"} text={""} className={""} size={"lg"}/>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 items-center justify-center gap-[80px] w-full mt-[70px] px-[30px]">
        <Card title={"Smart Parking"} src={"/smartparking.png"} technologies={[SiMongodb, SiExpress, SiReact, SiNodedotjs]} link={"https://github.com/ezequielcanan/parking-mern.git"}/>
        <Card title={"Responsive Portfolio"} src={"/meta.png"} technologies={[SiReact, SiHtml5, SiCss3]} link={"https://github.com/ezequielcanan/portfolio.git"}/>
      </div>
    </Section>
  )
}

export default Projects