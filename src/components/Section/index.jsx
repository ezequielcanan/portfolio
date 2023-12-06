const Section = ({ children, className, id }) => {
  return (
    <section id={id} className={`w-full md:pl-[150px] ${className}`}>
      {children}
    </section>
  )
}

export default Section