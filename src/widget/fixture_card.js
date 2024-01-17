import { Container } from "react-bootstrap";
const FixtureMatch = ({ date, players_1, players_2, goals_T1, goals_T2 }) => {
  return (
    <Container
      fluid
      style={{
        width: "580px",
        height: "120px",
      }}
      className="p-0  mb-1"
    >
      <div className="col">
        <div
          className="row  p-0 m-0 rounded-top-3 "
          style={{
            height: "25px",
            width: "150px",
            backgroundColor: "#94BE1F",
          }}
        >
          <p
            className="text-center text-white fw-bold "
            style={{ fontSize: "18px" }}
          >
            {date}
          </p>
        </div>
        <Container className="mt-1"></Container>

        <Container
          fluid
          style={{
            width: "580px",

            boxShadow: "1px 1px 3px rgb(230, 230, 230)",
          }}
          className="p-0 m-0 bg-danger"
        >
          <div
            className="row flex-nowrap p-1 m-0 bg-black "
            style={{ height: "75px", marginBottom: "10px" }}
          >
            <Container className="text-center p-1" style={{ width: "250px" }}>
              <div
                className="row d-flex align-items-center justify-content-end"
                style={{ paddingInline: "1px" }}
              >
                <Container className="m-0 p-1 " style={{ width: "160px" }}>
                  <p
                    className="text-center text-white fw-bold  "
                    style={{ margin: 0 }}
                  >
                    {players_1}
                  </p>
                </Container>
                <Container
                  className="text-center p-0 m-0"
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <img height={"100%"} src="assets/logo_players1.png" alt="" />
                </Container>
              </div>
            </Container>

            <Container
              className=" p-1 d-flex  justify-content-center align-items-center flex-fill"
              style={{ width: "50px" }}
            >
              <p
                className="text-center text-white fw-bold "
                style={{ paddingBottom: "12px", marginBottom: "0" }}
              >
                {`${goals_T1} - ${goals_T2}`}
              </p>
            </Container>

            <Container className=" p-1" style={{ width: "250px" }}>
              <div
                className="row d-flex align-items-center "
                style={{ paddingInline: "1px" }}
              >
                <Container
                  className="text-center p-0 m-0"
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <img height={"100%"} src="assets/logo_teams2.png" alt="" />
                </Container>
                <Container className="m-0 p-1" style={{ width: "160px" }}>
                  <p
                    className="text-center text-white fw-bold "
                    style={{ margin: 0 }}
                  >
                    {players_2}
                  </p>
                </Container>
              </div>
            </Container>
          </div>
        </Container>
      </div>
    </Container>
  );
};
export default FixtureMatch;
