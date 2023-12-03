import htmlImg from "../../assets/images/icons/html.svg"
import cssImg from "../../assets/images/icons/css.svg"
import jsImg from "../../assets/images/icons/js.svg"
import bootstrapImg from "../../assets/images/icons/bootstrap.svg"
import gitImg from "../../assets/images/icons/git.svg"
import githubImg from "../../assets/images/icons/github.svg"
import reactImg from "../../assets/images/icons/react.svg"

const Carousel = () => {
  const slides = [1, 2]
  const images = [htmlImg, cssImg, jsImg, bootstrapImg, gitImg, githubImg, reactImg]
  return (
    <div className="overflow-hidden flex w-full md:pb-[200px]">
      {slides.map((s,i) => {
        return <div key={s} className="inline-block animate-[carousel_20s_infinite_linear] shrink-0 flex">
          {images.map(img => {
            return <img src={img} key={img} className="h-[120px] mx-[70px] lg:mx-[150px]"/>
          })}
        </div>
      })}
    </div>
  )
}

export default Carousel