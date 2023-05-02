import { useState } from 'react'
import './App.css'
import VehicleType from './components/vehicleType'
// import {ReactComponent as SedanSVG} from './assets/images/icon-sedans.svg'
// import {ReactComponent as SuvSVG} from './assets/images/icon-suvs.svg'
// import {ReactComponent as LuxurySVG} from './assets/images/icon-luxury.svg'

function App() {
  const [count, setCount] = useState(0)

  const content = [
    {
      svgLink: './src/assets/images/icon-sedans.svg',
      type: 'Sedans', 
      description: `Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
      or on your next road trip.`, 
    },
    {
      svgLink: './src/assets/images/icon-suvs.svg',
      type: 'SUVs', 
      description: `Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
      and off-road adventures.`, 
    },
    {
      svgLink: './src/assets/images/icon-luxury.svg',
      type: 'Luxury', 
      description: `Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
      rental and arrive in style.`, 
    },
  ]


  // console.log("sedanSGV: ", sedanSVG)
  return (
    <div className="app">
      <VehicleType 
        svgLink = { content[0].svgLink }
        type = { content[0].type }
        description = {content[0].description}
      />
      <VehicleType 
        svgLink = { content[1].svgLink }
        type = { content[1].type }
        description = {content[1].description}
      />
      <VehicleType 
        svgLink = { content[2].svgLink }
        type = { content[2].type }
        description = {content[2].description}
      />
    </div>
  )
}

export default App
