import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import PlayerScore from "../widget/players_score";
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
}

export default Jugadores;
