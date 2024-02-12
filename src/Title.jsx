import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>
          Venez à Disneyland Paris pendant les vacances ou les jours fériés !
        </Alert.Heading>
        <p>
          Vous souhaitez nous rendre visite pendant les vacances scolaires, lors
          d'un long week-end ou d'un jour férié ? Consultez notre page dédiée
          aux vacances scolaires avec notre calendrier des prix pratique pour
          comparer différentes dates d'arrivées et trouver la meilleure
          disponibilité.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button variant="outline-success" onClick={() => setShow(true)}>Show </Button>}
    </>
  );
}

export default AlertDismissible;
