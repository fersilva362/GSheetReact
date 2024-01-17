import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import PlayerScore from "./widget/players_score";
import { useNavigate } from "react-router-dom";

function Jugadores({ playersArr }) {
  const navigate = useNavigate();
  return (
    <>
      <Container
        style={{
          width: "570px",
          height: "60px",
        }}
      ></Container>
      {playersArr.map(({ name, match, goals, score }, index) => {
        return (
          <PlayerScore
            key={index}
            name={name}
            match={match}
            score={score}
            index={index + 1}
          />
        );
      })}

      {/* button */}
      <div className="container-fluid mt-5 d-flex justify-content-center">
        <Button
          onClick={() => navigate("/armar-equipo")}
          size="lg"
          style={{ backgroundColor: "#8a1515", border: "#8a1515" }}
        >
          I Want To Play!
        </Button>
      </div>
    </>
  );
  {
    /* <Table striped hover  >

                <thead  >
                    <tr style={{ backgroundColor: '#e495e4' }}>
                        <th>Name</th>
                        <th>Matches</th>
                        <th>Rank</th>

                    </tr>
                </thead>
                <tbody >
                    {playersArr.map(({ name, match, goals, score }) => {

                        return (

                            <tr>
                                <td>{name}</td>
                                <td>{match}</td>
                                <td>{goals}</td>
                                <td>{score}</td>
                            </tr>)
                    })}

                </tbody>
            </Table> */
  }
}

export default Jugadores;
