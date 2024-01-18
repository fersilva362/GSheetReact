import { useState } from "react";
import { Form, Table, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const FormPlayer = ({ playersArr }) => {
  const [players, setPlayers] = useState({});
  const [input, setInput] = useState("");
  const [jugadores, setJugadores] = useState();

  const navigate = useNavigate();
  let bag = new Set();
  const handleCheck = (e) => {
    const name = e.target.value;
    const isChecked = e.target.checked;
    isChecked ? bag.add(name) : bag.delete(name);
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (bag.size !== 0) {
      setPlayers(bag);
      createPlayers();
    } else {
    }
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
    if (input) {
      setJugadores(
        playersArr.concat({ name: input, match: 0, goals: 0, score: 0 })
      );
    } else {
    }
  }

  return (
    <div className="container d-flex justify-content-center">
      <Container
        fluid
        className="p-0 m-0 "
        style={{
          width: "570px",
        }}
      >
        <Form className="mt-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="" style={{ color: "#2387d7" }}>
              Add New Player
            </Form.Label>
            <Form.Control
              className="mb-2 text-white"
              as="input"
              name="formulario"
              onChange={(e) => handleChange(e)}
              style={{
                border: "none",
                borderRadius: 0,
                borderBottom: " 2px solid #2387d7",
                backgroundColor: "#121212",
              }}
            />
            <div className="container d-flex justify-content-center">
              <Link
                style={{ textDecoration: "none" }}
                onClick={(e) => handleSubmit2(e)}
              >
                ADD
              </Link>
            </div>
          </Form.Group>
        </Form>
        <Form onSubmit={handleSubmit} className="">
          <Table>
            <tbody>
              {(jugadores ?? playersArr).map((player, index) => {
                return (
                  <tr key={index}>
                    <td
                      className=" p-3"
                      style={{
                        borderBottom: "none",
                        fontSize: "21px",
                        color: "white",
                        backgroundColor: "#121212",
                      }}
                    >
                      {player.name.toUpperCase()}
                    </td>
                    <td
                      className=" mt-1 p-3 text-end"
                      style={{
                        fontSize: "21px",
                        borderBottom: "none",
                        color: "red",
                        backgroundColor: "#121212",
                      }}
                    >
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
          <div className="container-fluid d-flex justify-content-center">
            <Button
              className="btn p-3"
              style={{ backgroundColor: "#8a1515", border: "#8a1515" }}
              as="input"
              type="submit"
              value="Get Soccer Teams"
              onClick={(e) => handleSubmit(e)}
            />
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default FormPlayer;
