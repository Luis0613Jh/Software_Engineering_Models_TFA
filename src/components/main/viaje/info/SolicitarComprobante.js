import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SolicitarComprobante = () => {
    return (
        <>
            <Row>
                <Col>
                    <Form.Group className="mb-1" controlId="formDetalle">
                        <Form.Label>Detalle</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese el detalle"  size="sm"/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-1" controlId="formValorCobrar">
                        <Form.Label>Valor a cobrar </Form.Label>
                        <Form.Control type="number" placeholder="ingrese el valor a cobrar" size="sm"/>
                        <Form.Text className="text-muted">
                            Valor a cobrar sujeto a variaciones por tiempos de espera o extras.
                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-1" controlId="formFormaDePago">
                        <Form.Label>Forma de pago</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese la forma de pago" size="sm"/>
                    </Form.Group>
                </Col>
            </Row>
        </>
    );
};

export default SolicitarComprobante;