const Card = ({src, title}) => {
  return (
    <div className="overflow-hidden rounded-md">
      <div>
        <img src={src} alt="" />
      </div>
      <h3>{title}</h3>
    </div>
  )
}