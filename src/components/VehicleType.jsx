const VehicleType = ({ 
                       svgLink,
                       type, 
                       description
                      }) => {

  const correctSVGLink = "." + svgLink
  return (
    <section className = {`vehicle ${type.toLowerCase()}`} >
      <img src= { correctSVGLink }/>
      <h2>{ type }</h2>
      <p>{ description }</p>
      <button href = {`./${type}`}>Learn More</button>
    </section>
  )
}

export default VehicleType;