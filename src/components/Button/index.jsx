const Button = ({className, children}) => {
  return (
    <button className={className + " text-2xl bg-secondary text-primary p-4 rounded duration-[.5s] hover:bg-fourth"}>{children}</button>
  )
}

export default Button