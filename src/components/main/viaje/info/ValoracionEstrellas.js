import { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ValoraciónEstrellas = () => {
  const [valoracion, setValoracion] = useState(0); // Estado para almacenar la calificación

  const cambiarValoracion = (valor) => {
    setValoracion(valor); // Actualizar el estado con el valor de la calificación
  };

  // Renderizar estrellas con react-icons y react-bootstrap
  const renderizarEstrellas = () => {
    const estrellas = [];

    for (let i = 1; i <= 5; i++) {
      estrellas.push(
        <OverlayTrigger
          key={i}
          placement="top"
          overlay={
            <Tooltip id={`tooltip-${i}`}>
              {`${i} ${i === 1 ? "estrella" : "estrellas"}`}
            </Tooltip>
          }
        >
          <span
            className="star"
            onClick={() => cambiarValoracion(i)}
            style={{ color: i <= valoracion ? "#ffc107" : "#e4e5e9" }}
          >
            {i <= valoracion ? <FontAwesomeIcon icon={solid('star')} /> : <FontAwesomeIcon icon={regular('star')} />}
          </span>
        </OverlayTrigger>
      );
    }

    return estrellas;
  };

  return (
    <Container>
      {renderizarEstrellas()}
    </Container>
  );
};

export default ValoraciónEstrellas;
