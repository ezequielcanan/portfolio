import Presentation from "../../components/Presentation"
import Carousel from "../../components/Carousel"

const Home = () => {
  return (
    <main className="w-full py-[100px] md:py-0 bg-[url('./background.jpg')] bg-third/80 bg-left-top bg-cover bg-no-repeat bg-blend-multiply">
      <section className="h-screen grid items-center justify-items-center md:grid-cols-2 md:pl-[150px]">
        <Presentation/>
        <Carousel/>
      </section>
    </main>
  )
}

export default Home