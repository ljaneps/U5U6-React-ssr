"use client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "next/link";

export function CardFilm({ movie }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Button as={Link} href={`/movie/${movie.id}`} variant="primary">
          Detalle
        </Button>
      </Card.Body>
    </Card>
  );
}
