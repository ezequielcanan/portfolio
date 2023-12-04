const SectionText = ({ title, text }) => {
  return (
    <div className="col-span-2 flex flex-col gap-y-[30px] md:p-[30px]">
      <h2 className="text-secondary text-3xl xs:text-5xl">{title}</h2>
      <p className="text-fourth text-xl xs:text-3xl">{text}</p>
    </div>
  )
}

export default SectionText