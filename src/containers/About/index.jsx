import Section from "../../components/Section"
import Text from "../../components/Text"
import Button from "../../components/Button"
import { GoArrowRight } from "react-icons/go"
import { GoDownload } from "react-icons/go"

const About = () => {
  return (
    <Section id={"about"} className={`flex flex-col gap-y-[100px] p-10 bg-[url('/about-background.webp')] bg-third/80 md:bg-third/60 bg-right-bottom md:bg-left-top bg-cover bg-no-repeat bg-fixed bg-blend-multiply xl:h-screen`}>
      <Text className={"col-span-2 flex flex-col gap-y-[30px] md:p-[30px]"} title={"About Me"} text={"Hi! My name is Ezequiel Canan, I'm a frontend developer from Argentina. My best skills are Javascript, HTML and CSS, but I'm always learning more to become a full stack developer. I'm looking to gain experience and I'm doing a Backend course right now. I started out as a self-taught programmer so I have experience fast learning new technologies."} size={"lg"} />
      <div className="md:px-[30px] flex flex-col items-start gap-y-[50px] text-fourth">
        <Text className={""} text={"I've studied in CoderHouse a full stack career, I finished the frontend section and now I'm doing the backend one."} title={"Education"} size={"md"}>
          <Button className={"flex gap-x-[20px] mt-[30px]"}>Resume and certificates <GoDownload className="animate-pulse text-[1.3em]" /></Button>
        </Text>
      </div>
      <div className="md:px-[30px] flex flex-col items-start gap-y-[50px] text-fourth">
        <Text className={""} text={"I have some experience coding for a private parking. I coded softwares to manage the vehicles and a simple React Native app to receive notifications when a parking's user pay the monthly garage."} title={"Experience"} size={"md"}>
          <Button className={"flex gap-x-[20px] mt-[30px]"} onClick={() => document.getElementById("projects").scrollIntoView()}>Projects <GoArrowRight className="animate-pulse text-[1.3em]" /></Button>
        </Text>
      </div>
    </Section>
  )
}

export default About