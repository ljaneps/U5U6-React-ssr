
"use client";
import Container from "react-bootstrap/esm/Container";
import { BarraInicio } from "@/components/BarraInicio";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function MovieDetail({ params }) {
  console.log("params:", params);
  const { id } = params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES`
  );

  if (!res.ok) {
    return <p>Error al cargar detalles de la película</p>;
  }

  const movie = await res.json();

  return (
    <Container>
      <BarraInicio />

      <Card>
        <Row className="g-0">
          <Col md={5}>
            <Card.Img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="Imagen"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </Col>
          <Col md={7}>
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  Fecha de estreno: {movie.release_date}
                </ListGroup.Item>
                <ListGroup.Item>
                  Calificación: {movie.vote_average}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
