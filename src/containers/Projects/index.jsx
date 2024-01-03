import Section from "../../components/Section"
import Text from "../../components/Text"
import Card from "../../components/Card"
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si"

const Projects = () => {
  return (
    <Section id={"projects"} className={"min-h-screen flex flex-col items-center justify-center bg-third/80 h-auto px-2 md:p-10 md:px-[30px] bg-[url('/projects-background.jpg')] bg-center md:bg-left-top bg-no-repeat bg-cover bg-blend-multiply"}>  
      <Text title={"Projects"} text={""} className={""} size={"lg"}/>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 items-center justify-center gap-[80px] w-full mt-[40px] px-[30px]">
        <Card title={"Smart Parking"} src={"/smartparking.png"} technologies={[SiMongodb, SiExpress, SiReact, SiNodedotjs]}/>
      </div>
    </Section>
  )
}

export default Projects