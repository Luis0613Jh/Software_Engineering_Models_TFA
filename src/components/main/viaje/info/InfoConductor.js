import Card from 'react-bootstrap/Card';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image'
import usuario from '../../../../assets/images/viaje/usuario.jpeg';


function InfoViaje({ conductor }) {
    const { nombres, rol } = conductor;
    
    return (
    <Card style={{ width: '18rem', fontSize: '0.8rem'}} className="mb-2" bg="light">
        <Card.Body style={{ display: 'flex' }}>
            <Image src={usuario} alt='Imagen Conductor' id="imagenUsuario" style={{ width: '3rem'}}/>
            <div>
                <Card.Title style={{ fontSize: '0.8rem', color:'blue' }}>
                    <FontAwesomeIcon icon={solid('car')} />
                    <span> { rol }: </span>
                </Card.Title>
                <Card.Text>
                    <strong>{ nombres }</strong>
                </Card.Text>
            </div>
        </Card.Body>
    </Card>
    );
}

export default InfoViaje;