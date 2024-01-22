import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function TableMeteoComponents(props) {
    console.log(props)

  return (
    <>
        <Row className='d-flex align-items-center fs-4 flex-column'>
            <Col className='col-auto'>
                <p>La città cercata: {props.list.name}</p>
            </Col>
            
            <Col className='col-auto'>
                <ul className='list-style-type: none p-0'>
                    <li>Le coordinate della tua localita sono: </li>
                    <li>Latitudine: {props.list.coord.lat}, </li>
                    <li>Longitudine: {props.list.coord.lon}. </li>
                </ul>
            </Col>
            <Col className='col-auto'>
                <ul className='list-style-type: none p-0'>
                    <li>Le condizioni saranno: {props.list.weather[0].description} </li>
                    <li>La direzione del vento: {props.list.wind.deg}, con una velocità di: {props.list.wind.speed}</li>
                    <li>Alba: {props.list.sys.sunrise}. Tramonto {props.list.sys.sunset}</li>
                    <li>Nuvolosità: {props.list.clouds.all}</li>
                </ul>
            </Col>
            <Col className='col-auto'>
                <ul className='list-style-type: none p-0'>
                    <li>La temperatura percepita: {props.list.main.feels_like} °C</li>
                    <li>Umidità: {props.list.wind.deg}, con una velocità di: {props.list.wind.speed}</li>
                    <li>Alba: {props.list.sys.sunrise}. Tramonto {props.list.sys.sunset}</li>
                    <li>Nuvolosità: {props.list.clouds.all}</li>
                </ul>
            </Col>
        </Row>
    </>
  )
}
