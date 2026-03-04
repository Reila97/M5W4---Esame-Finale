import { Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

function FetchProva() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Error");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main>
      <Container fluid>
        {isLoading ? (
          <div>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
          </div>
        ) : isError ? (
          <h1>Errore nel caricamento dati</h1>
        ) : users.length === 0 ? (
          <h2>Non ci sono risultati</h2>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.email}</li>
            ))}
          </ul>
        )}
      </Container>
    </main>
  );
}

export default FetchProva;
