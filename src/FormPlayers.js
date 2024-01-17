import { useState, useEffect } from "react";
import { Form, Table, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FormPlayer = ({ playersArr }) => {
  const [players, setPlayers] = useState({});
  const [input, setInput] = useState("");
  const [jugadores, setJugadores] = useState();

  console.log(jugadores, "<< jugadores", playersArr, "<< playersARr");

  const navigate = useNavigate();
  let bag = new Set();
  const handleCheck = (e) => {
    const name = e.target.value;
    const isChecked = e.target.checked;
    isChecked ? bag.add(name) : bag.delete(name);
  };
  function handleSubmit(e) {
    e.preventDefault();
    setPlayers(bag);
    createPlayers();
  }

  function createPlayers() {
    let playersFromSub = Array.from(bag);
    const searchParams = new URLSearchParams();
    playersFromSub.forEach((player) => {
      searchParams.append("players", player);
    });
    navigate(`/post?${searchParams.toString()}`);
  }

  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleSubmit2(e) {
    e.preventDefault();
    setJugadores(
      playersArr.concat({ name: input, match: 0, goals: 0, score: 0 })
    );
  }

  return (
    <Container
      fluid
      style={{
        width: "570px",
      }}
      className="p-0 m-0 "
    >
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Add New Player</Form.Label>
          <Form.Control
            as="input"
            name="formulario"
            onChange={(e) => handleChange(e)}
            //rows={3}
          />
          <Button
            as="input"
            type="submit"
            value="Submit"
            onClick={(e) => handleSubmit2(e)}
          />
        </Form.Group>
      </Form>
      <Form onSubmit={handleSubmit}>
        <Table striped hover>
          <thead>
            <tr style={{ backgroundColor: "#e495e4" }}>
              <th>Name</th>
              <th>I play!</th>
            </tr>
          </thead>
          <tbody>
            {(jugadores ?? playersArr).map((player, index) => {
              return (
                <tr key={index}>
                  <td>{player.name}</td>
                  <td>
                    <Form.Check
                      type="checkbox"
                      id={index}
                      value={player.name}
                      onChange={(e) => handleCheck(e)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button
          as="input"
          type="submit"
          value="Submit"
          onClick={(e) => handleSubmit(e)}
        />
      </Form>
    </Container>
  );
};

export default FormPlayer;
