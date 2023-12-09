import Section from "../../components/Section"
import Text from "../../components/Text"
import Card from "../../components/Card"

const Projects = () => {
  return (
    <Section id={"projects"} className={"flex flex-col items-center bg-third/80 h-auto p-10 pl-[30px] bg-[url('/projects-background.jpg')] bg-center md:bg-left-top bg-no-repeat bg-cover bg-blend-multiply"}>  
      <Text title={"Projects"} text={""} className={""} size={"lg"}/>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 items-center gap-[80px] w-full mt-[40px] px-[30px]">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Section>
  )
}

export default Projects