const Section = ({ children, className, id }) => {
  return (
    <section id={id} className={`w-full pt-[120px] md:pl-[150px] md:pt-0 ${className}`}>
      {children}
    </section>
  )
}

export default Section