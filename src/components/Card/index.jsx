import { AiFillGithub } from "react-icons/ai"


const Card = ({ src, title, link, technologies }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-third w-full flex flex-col items-center justify-between shadow-xl border border-nav">
      {src ? (
        <>
          <div className="border-b-4 border-secondary">
            <img src={src} alt="" />
          </div>
          <div className="flex flex-col w-full h-full p-5">
            <h3 className="text-fourth text-3xl">{title}</h3>
            <p className="text-xl text-nav">Web App to manage a parking of vehicles per hour.</p>
            <div className="flex items-start gap-y-7 xs:items-center flex-col xs:flex-row gap-x-[20px] mt-[20px]">
              <a href={link} target="_blank" className="flex bg-none border-2 border-secondary text-2xl px-3 py-2 rounded gap-3 text-secondary duration-300 hover:bg-secondary hover:text-primary">Code <AiFillGithub className="text-3xl"/></a>
              <div className="flex w-full justify-between xs:justify-evenly">
                {technologies.map((Technology, i) => {
                  return <Technology key={i} className="text-fourth text-3xl"/>
                })}
              </div>
            </div>
          </div>
        </>
      ) : (
        <h3 className="text-2xl text-fourth">Coming soon</h3>
      )}
    </div>
  )
}

export default Card