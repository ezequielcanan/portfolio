const Text = ({ title, text, size, className, children }) => {
  return (
    <div className={className}>
      {size == "lg" ? (
        <>
          <h2 className="text-secondary text-3xl xs:text-5xl">{title}</h2>
          <p className="text-fourth text-xl xs:text-3xl">{text}</p>
        </>
      ) : (
        <>
          <h3 className="text-secondary text-2xl xs:text-4xl">{title}</h3>
          <p className="text-xl">{text}</p>
        </>
      )}
      {children}
    </div>
  )
}

export default Text