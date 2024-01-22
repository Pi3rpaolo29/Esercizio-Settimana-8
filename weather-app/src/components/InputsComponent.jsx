import React, {useState} from 'react'
import {Button, Col, Form, Row} from 'react-bootstrap'
import TableMeteoComponents from './TableMeteoComponents'

export default function InputsComponent() {
    const [dati, setDati] = useState({ coord:{lat:'', lon:''}, 
    clouds:{all:''}, 
    main:{feels_like:'', humidity:'', pressure:'', temp:'', temp_max:'', temp_min:''},
    name: '',
    sys: {sunrise: '', sunset: ''},
    visibility:'',
    weather:[{description:''}],
    wind: {deg:'',speed:''}
    });



    const [city, setCity] = useState('')
    let nation = 'it'
    let key = '798ba4e6964e62bd0f19ac6d0c89939a'
    const fetchCallCity = () => {
        fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city},${nation}&APPID=${key}&units=metric`)
        .then(response => response.json())
        .then(json => setDati(json))
        .catch(errore => console.log(errore))
    }
    
  return (
    <>
    <Form as={Row} className='justify-content-center align-items-center'>
        <Col className='col-3'>
            <Row>
                <Form.Group controlId="inputCity" className='d-flex align-items-center '>
                    <Col className='text-center'>
                        <Form.Label className='fs-5 m-0'>Scrivi la tua città</Form.Label>
                    </Col>
                    <Col>
                    <Form.Control onChange={e=> setCity(e.target.value)} type="text" placeholder="City" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Col>                    
                </Form.Group>
            </Row>            
        </Col>
        <Col className='col-1'>
            <Button type="button" onClick={fetchCallCity}><i className="bi bi-search"></i></Button>
        </Col>
    </Form>
    
    <TableMeteoComponents list={dati} />
    </>
  )
}
