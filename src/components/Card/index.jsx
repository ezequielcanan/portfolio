const Card = ({ src, title }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-third w-full h-[500px] flex flex-col items-center justify-center shadow-xl border border-secondary">
      {src ? (
        <>
          <div>
            <img src={src} alt="" />
          </div>
          <h3>{title}</h3>
        </>
      ) : (
        <h3 className="text-2xl text-fourth">Coming soon</h3>
      )}
    </div>
  )
}

export default Card