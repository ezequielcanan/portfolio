import Section from "../../components/Section"
import SectionText from "../../components/SectionText"
import htmlCertificate from "../../assets/images/html-certificate.png"
import jsCertificate from "../../assets/images/js-certificate.jpg"
import reactCertificate from "../../assets/images/react-certificate.jpg"
import frontendCertificate from "../../assets/images/frontend-certificate.jpg"

const About = () => {
  const certificates = [
    {
      text: "HTML and CSS",
      src: htmlCertificate,
      alt: ""
    },
    {
      text: "JavaScript",
      src: jsCertificate,
      alt: ""
    },
    {
      text: "React JS",
      src: reactCertificate,
      alt: ""
    },
    {
      text: "Frontend Career",
      src: frontendCertificate,
      alt: ""
    }
  ]
  return (
    <Section id={"about"} className={`flex flex-col gap-y-[80px] p-10 relative h-auto`}>
      <div className="w-full h-full absolute top-0 left-0 -z-40">
        <video muted autoPlay loop className="w-full h-full absolute top-0 left-0 object-cover bg-primary -z-10">
          <source src="/about-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute w-full h-full object-cover bg-primary/70 top-0 left-0 -z-1" />
      </div>
      <SectionText title={"About Me"} text={"Hi! My name is Ezequiel Canan, I'm a frontend developer from Argentina. My best skills are Javascript, HTML and CSS, but I'm always learning more to become a full stack developer. I'm looking to gain experience and I'm doing a Backend course right now. I started out as a self-taught programmer so I have experience fast learning new technologies."} />
      <div className="md:px-[30px] flex flex-col gap-y-[50px] text-fourth">
        <div>
          <h3 className="text-secondary text-2xl xs:text-4xl self-start">Education</h3>
          <p className="text-xl">I've studied in CoderHouse a full stack career, I finished the frontend section and now I'm doing the backend one.</p>
        </div>
        <ul className="text-3xl grid justify-items-center md:grid-cols-2 w-full h-full gap-y-[50px]  px-[30px]">
          {
            certificates.map((c) => {
              return <li className="flex flex-col items-center">
                <img src={c.src} className="w-2/5" alt="" />
                <h4 className="bg-nav/20 text-xl shadow-[0_10px_25px_0px_rgba(255,255,255,0.3)] backdrop-blur w-2/5 text-center text-fourth rounded-b-lg py-3">{c.text}</h4>
              </li>
            })
          }
        </ul>
      </div>
    </Section>
  )
}

export default About