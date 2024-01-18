import { useLocation, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import FixtureMatch from "../widget/fixture_card";

export default function MatchPage({ playersArr }) {
  const location = useLocation();
  const newSearch = new URLSearchParams(location.search).getAll("players");
  const navigate = useNavigate();

  const theyPlay = playersArr.filter((obj) => newSearch.includes(obj.name));
  const newPlayer = newSearch
    .filter((ele) => !theyPlay.map((obj) => obj.name).includes(ele))
    .map((name) => ({ name: name, match: 0, goals: 0, score: 0 }));
  const allWantToPlay = theyPlay
    .concat(newPlayer)
    .sort((a, b) => b.score - a.score);

  let teamPlayer1 = [];
  let teamPlayer2 = [];
  for (const player of allWantToPlay) {
    if (teamPlayer1.length > teamPlayer2.length) {
      teamPlayer2.push(player);
    } else {
      teamPlayer1.push(player);
    }
  }
  teamPlayer1 = teamPlayer1.map((ele) => ele["name"]);
  teamPlayer2 = teamPlayer2.map((ele) => ele["name"]);
  if (teamPlayer1.length > teamPlayer2.length) {
    teamPlayer2.push("vacante");
  }

  teamPlayer1 = teamPlayer1
    .reduce((curr, accu) => curr + " " + accu, "")
    .toUpperCase();
  teamPlayer2 = teamPlayer2
    .reduce((curr, accu) => curr + " " + accu, "")
    .toUpperCase();

  return (
    <>
      <Container
        style={{
          width: "580px",
          height: "160px",
        }}
      ></Container>
      <FixtureMatch
        date={"Next Match"}
        players_1={teamPlayer1}
        players_2={teamPlayer2}
        goals_T1={null}
        goals_T2={null}
      />

      <div className="container-fluid d-flex justify-content-center mt-5">
        <Button
          className="btn p-3"
          style={{ backgroundColor: "#8a1515", border: "#8a1515" }}
          as="input"
          type="submit"
          value="Back to Fixture"
          onClick={() => navigate("/")}
        />
      </div>
    </>
  );
}
