const Button = ({className, children, onClick}) => {
  return (
    <button onClick={onClick} className={className + " text-2xl bg-secondary text-primary p-4 rounded duration-[.5s] hover:bg-fourth"}>{children}</button>
  )
}

export default Button