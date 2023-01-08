import { useEffect, useState } from "react";
import SingleUser from "./components/singleuser/SingleUser";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { UserProvider } from "./context/UserProvider";
import { UserData } from "./context/UserProvider";
import Loader from "./components/Loader/Loader";

function App() {
  const { data } = UserData();

  return (
    <Container fluid>
      <Row>
        {data ? (
          data.map((item) => {
            return <SingleUser item={item} key={item.id} />;
          })
        ) : (
          <Loader />
        )}
      </Row>
    </Container>
  );
}

export default App;
