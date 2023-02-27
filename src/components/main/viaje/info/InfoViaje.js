import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function InfoViaje() {
    return (
    <Card style={{ width: '18rem', fontSize: '0.8rem' }} className="mb-2" bg="light">
        <Card.Body>
            <Card.Title style={{ fontSize: '0.8rem', color:'blue' }}>
                <FontAwesomeIcon icon={solid('route')} />
                <span> Viaje </span>
            </Card.Title>
            <Card.Text>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={regular('calendar-days')} />
                        <span> 14-02-2023 </span>
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={regular('clock')} />
                        <span> 09:00 </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={regular('money-bill-1')} />
                        <span> $ 3.50 </span>
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={solid('route')} />
                        <span> 7.6 KM </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={solid('circle')} />
                        <span> Punto A </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FontAwesomeIcon icon={regular('circle')} />
                        <span> Punto B </span>
                    </Col>
                </Row>
            </Card.Text>
        </Card.Body>
    </Card>
                        // <FontAwesomeIcon icon={faCircle} />
    // <FontAwesomeIcon icon={solid('user-secret')} />
    // <FontAwesomeIcon icon={regular('coffee')} />
    // <FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />
    // <FontAwesomeIcon icon={brands('twitter')} />
    );
}

export default InfoViaje;