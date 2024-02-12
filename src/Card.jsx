import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample({source}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={source} />
      <Card.Body>
        <Card.Title>Disneyland® Paris - Billets 2/3/4 jours</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis rem
          itaque expedita commodi enim, blanditiis aliquam eveniet a assumenda
          
        </Card.Text>
        <Button variant="success">Réserver</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
