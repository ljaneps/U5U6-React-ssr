'use client';
import "bootstrap/dist/css/bootstrap.min.css";
import { CardFilm } from "../components/CardFilm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { BarraInicio } from "@/components/BarraInicio";

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export default async function Home() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      cache: "no-store",
    }
  );

  const data = await res.json();
  const movies = data.results;

  return (
    <Container>
      <BarraInicio />
      <br />
      <Row className="g-4">
        {movies.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <CardFilm movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
