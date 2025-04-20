
import Container from "react-bootstrap/Container";
import { BarraInicio } from "@/components/BarraInicio";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function Search({ searchParams }) {
  const query = searchParams.query || "";
  let results = [];

  if (query) {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          query
        )}`,
        { cache: "no-store" }
      );

      const data = await res.json();
      results = data.results;
    } catch (error) {
      console.error("Error en búsqueda SSR:", error);
    }
  }

  return (
    <Container>
      <BarraInicio />
      <div style={{ padding: "2rem" }}>
        <h2>
          Resultados para: <em>{query}</em>
        </h2>
        <ul>
          {results.length > 0 ? (
            results.map((movie) => (
              <li key={movie.id}>
                <strong>{movie.title}</strong> (
                {movie.release_date?.split("-")[0]})
              </li>
            ))
          ) : (
            <p>No se encontraron resultados.</p>
          )}
        </ul>
      </div>
    </Container>
  );
}