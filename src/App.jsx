import { useState } from 'react'
import './App.css'
import VehicleType from './components/VehicleType.jsx'

function App() {
  const content = [
    {
      svgLink: '/icon-sedans.svg',
      type: 'Sedans', 
      description: `Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
      or on your next road trip.`, 
    },
    {
      svgLink: '/icon-suvs.svg',
      type: 'SUVs', 
      description: `Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
      and off-road adventures.`, 
    },
    {
      svgLink: '/icon-luxury.svg',
      type: 'Luxury', 
      description: `Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
      rental and arrive in style.`, 
    },
  ]

  return (
    <div className="app">
      <h1>Vehicles</h1>
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
