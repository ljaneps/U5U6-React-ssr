"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "react-bootstrap/Form";


export function BarraInicio() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    router.push(`/search?query=${encodeURIComponent(searchTerm)}`);
  };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Cartelera</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <Form className="d-flex gap-2" onSubmit={handleSubmit}>
              <Form.Control
                type="text"
                placeholder="Buscar película"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button type="submit">Buscar</Button>
            </Form>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default BarraInicio;
