/* https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} */
import React from 'react'
import InputsComponent from '../components/InputsComponent';

export default function HomePage() {
  return (
    <>
        <h1 className='mt-5 text-center'>Mi devo portare l'ombrello?</h1>
        <InputsComponent />
    </>
    
  )
}
