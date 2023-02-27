import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image'
import taxi from '../../../../assets/images/viaje/taxi.jpg';


function InfoViaje({ vehiculo, propietario }) {
    const { placa, reg: registroMunicipal } = vehiculo;

    return (
    <Card style={{ width: '18rem', fontSize: '0.8rem' }} className="mb-2" bg="light">
        <Card.Body style={{ display: 'flex' }}>
            <Image src={taxi} alt='Imagen Taxi' id="imagenTaxi" style={{ width: '5rem'}}/>
            <div>
                <Card.Title style={{ fontSize: '0.8rem', color:'blue' }}>
                    <FontAwesomeIcon icon={solid('car')} />
                    <span> Vehículo </span>
                </Card.Title>
                <Card.Text>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={regular('address-card')} />
                            <span> Placa: <strong>{ placa }</strong> </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={regular('pen-to-square')} />
                            <span> Registro Municipal: <strong>{ registroMunicipal }</strong> </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={regular('user')} />
                            <span> Propietario: <strong>{ propietario }</strong></span>
                        </Col>
                    </Row>
                </Card.Text>
            </div>
        </Card.Body>
    </Card>
    );
}

export default InfoViaje;