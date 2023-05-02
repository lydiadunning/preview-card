const VehicleType = ({ 
                       svgLink,
                       type, 
                       description
                      }) => {

  const correctSVGLink = "." + svgLink
  console.log(correctSVGLink)                     
  return (
    <div className = {`vehicle ${type.toLowerCase()}`} >
      <img src= { correctSVGLink }/>
      <h2>{ type }</h2>
      <p>{ description }</p>
      <button href = {`./${type}`}>Learn More</button>
    </div>
  )
}

export default VehicleType;