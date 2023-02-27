import React, { useState } from "react";
import "../../../assets/styles/main/viaje/viaje.css";
import { ButtonGroup, Button } from 'react-bootstrap';
import InfoViaje from "./info/InfoViaje";
import InfoConductor from "./info/InfoConductor";
import InfoVehiculo from "./info/InfoVehiculo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import  SolicitarComprobante  from './info/SolicitarComprobante';
import ValoracionEstrellas from "./info/ValoracionEstrellas"

function Viaje(props) {

    const { taxiContext } = props;
    const {c: conductor, ...vehiculo} = taxiContext;
    const [showModalCalificarViaje, setShowModalCalificarViaje] = useState(false);
    const [showModalRegistrarDatos, setShowModalRegistrarDatos] = useState(false);
    const [showSolicitarComprobante, setShowSolicitarComprobante] = useState(false);

    const handleMostrarModalCalificarViaje = () => setShowModalCalificarViaje(!showModalCalificarViaje);
    const handleMostrarModalRegistrarDatos = () => setShowModalRegistrarDatos(!showModalRegistrarDatos);
    const handleMostrarSolicitarComprobante = () => setShowSolicitarComprobante(!showSolicitarComprobante);

    return (
        <Container >
            <Row id="fila" className="mb-2">
                <h1 id="titulo">Información del viaje</h1>
            </Row>
            <Row id="fila" className="mb-2" >
                <Col id="columnaComponentes"><InfoViaje /></Col>
            </Row>
            <Row id="fila" className="mb-2">
                <Col id="columnaComponentes"><InfoConductor conductor={conductor[0]}/></Col>
            </Row>
            <Row id="fila" className="mb-2">
                <Col id="columnaComponentes"><InfoVehiculo vehiculo={vehiculo} propietario={conductor[0].nombres}/></Col>
            </Row>
            <Row id="fila" className="mb-2" >
                <Col id="columnaBotones" style={{textAlign: 'center'}}>
                    <ButtonGroup vertical id="contenedorBotones" >
                        <Button id="boton" onClick={handleMostrarModalRegistrarDatos} className="mb-2">Registrar datos</Button>
                        <Modal
                            show={showModalRegistrarDatos}
                            onHide={handleMostrarModalRegistrarDatos}
                            backdrop="static"
                            keyboard={false}
                            style={{fontSize: '0.7rem'}}
                        >
                            <Modal.Header closeButton >
                                <Modal.Title style={{fontSize: '1.2rem'}}>Registrar Datos</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form size="lg">
                                    <Container>
                                        <Row>
                                            <Col>
                                                <Form.Switch 
                                                    type="switch"
                                                    id="switchSolicitarComprobante"
                                                    label="Solicitar Comprobante"
                                                    onChange={handleMostrarSolicitarComprobante}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-1" controlId="formTipo_E_Identificacion" >
                                                <Form.Label>Tipo</Form.Label>
                                                <Form.Select size="sm">
                                                    <option>Cédula</option>
                                                </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-1" controlId="formIdentificacion">
                                                    <Form.Label>Identificación</Form.Label>
                                                    <Form.Control type="text" placeholder="Ingrese su identificación" size="sm"/>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-1" controlId="formrazonSocial">
                                                    <Form.Label>Razón Social / Nombre *</Form.Label>
                                                    <Form.Control type="text" placeholder="Ingrese su nombre" size="sm"/>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-1" controlId="formCelular">
                                                    <Form.Label>Celular </Form.Label>
                                                    <Form.Control type="text" placeholder="Ingrese su número de celular" size="sm"/>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-1" controlId="formCorreo">
                                                    <Form.Label>Correo</Form.Label>
                                                    <Form.Control type="email" placeholder="Ingrese su correo electrónico" size="sm"/>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        {showSolicitarComprobante && <SolicitarComprobante />}
                                        <Row>
                                            <Col>
                                                <Form.Group className="mb-1" controlId="formBotonRegistrar" style={{textAlign: 'center'}} id="contenedorBotonRegistrar">
                                                    <Button variant="primary" type="submit" size="sm">
                                                        Registrar
                                                    </Button>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Form>
                            </Modal.Body>
                        </Modal>
                        <Button id="boton" variant="danger"  className="mb-2">Reporte una emergencia</Button>
                        <Button id="boton" onClick={handleMostrarModalCalificarViaje} className="mb-2">Finalizar el viaje</Button>
                        <Modal
                            show={showModalCalificarViaje}
                            onHide={handleMostrarModalCalificarViaje}
                            backdrop="static"
                            keyboard={false}
                            style={{fontSize: '1rem'}}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title style={{fontSize: '1.2rem'}}>Calificar Viaje</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form>
                                <Container>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-1" controlId="formConductor">
                                                <Form.Label style={{ color:'blue' }}>Conductor</Form.Label>
                                                <Container id='contenedorEstrellas' style={{ textAlign:'center', fontSize:'2rem'}} className="mb-2">
                                                    <ValoracionEstrellas/>
                                                </Container>
                                                <FloatingLabel controlId="floatingDescripcionConductor" label="Descripción (Opcional)" className="mb-3">
                                                    <Form.Control type="text" placeholder="Descripción (Opcional)" />
                                                </FloatingLabel>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-1" controlId="formViaje">
                                                <Form.Label style={{ color:'blue' }}>Viaje</Form.Label>
                                                <Container id='contenedorEstrellas' style={{ textAlign:'center', fontSize:'2rem'}} className="mb-2">
                                                    <ValoracionEstrellas/>
                                                </Container>
                                                <FloatingLabel controlId="floatingDescripcionViaje" label="Descripción (Opcional)" className="mb-3">
                                                    <Form.Control type="text" placeholder="Descripción (Opcional)" />
                                                </FloatingLabel>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group  controlId="formBotonCalificarFinalizar" style={{textAlign: 'center'}}>
                                                <Button variant="primary" type="submit" size="sm">
                                                    CALIFICAR Y FINALIZAR
                                                </Button>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Container>
                            </Form>
                            </Modal.Body>
                        </Modal>
                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default Viaje;