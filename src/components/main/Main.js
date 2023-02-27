import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/styles/main/main.css'
import { Container, Row, Col } from 'react-bootstrap';
import { TaxiContext } from '../../context/TaxiContext';
import Viaje from "./viaje/Viaje.js";
import Map from "./map/Map.js";
import Spinner from 'react-bootstrap/Spinner';

export default function Main() {
    const taxiContext = useContext(TaxiContext);

    return (
        <>
            {taxiContext !== null ? (
                <Container fluid id='contenedor' className="mt-2">
                    <Row>
                        <Col md='auto' id='columna1'>
                            <Viaje taxiContext={taxiContext}/>
                        </Col>
                        <Col   id='columna2'>
                            <Map />
                        </Col>
                    </Row>
                </Container>
            ) : (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            )}
        </>
    )
}