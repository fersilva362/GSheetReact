import "bootstrap/dist/css/bootstrap.css";
import FixtureMatch from "../widget/fixture_card";
import { Container } from "react-bootstrap";

function DarkTable({ match }) {
  return (
    <>
      <Container
        style={{
          width: "580px",
          height: "60px",
        }}
      ></Container>
      {match.map(({ date, players_1, players_2, goals_T1, goals_T2 }, idx) => {
        players_1 = players_1.split(",").join(" ").toUpperCase();
        players_2 = players_2.split(",").join(" ").toUpperCase();
        return (
          <FixtureMatch
            date={date}
            goals_T1={goals_T1}
            players_1={players_1}
            players_2={players_2}
            goals_T2={goals_T2}
          />
        );
      })}
      ,
    </>
  );
}

export default DarkTable;
