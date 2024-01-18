import { Container } from "react-bootstrap";
const FixtureMatch = ({ date, players_1, players_2, goals_T1, goals_T2 }) => {
  return (
    <Container
      fluid
      style={{
        width: "580px",
        height: "140px",
      }}
      className="p-0  mb-2"
    >
      <div className="col">
        <div
          className="row  p-0 m-0 rounded-top-3 "
          style={{
            height: "32px",
            width: "198px",
            backgroundColor: "#94BE1F",
          }}
        >
          <p
            className="text-center text-white fw-bold "
            style={{ fontSize: "24px" }}
          >
            {date}
          </p>
        </div>
        <Container className="mt-1"></Container>

        <Container
          fluid
          style={{
            width: "580px",

            boxShadow: "2px 2px 5px rgb(230, 230, 230)",
          }}
          className="p-0 m-0 bg-danger"
        >
          <div
            className="row flex-nowrap p-1 m-0 bg-black "
            style={{ height: "92px", marginBottom: "10px" }} //75
          >
            <Container className="text-center p-1" style={{ width: "220px" }}>
              <div
                className="row d-flex align-items-center justify-content-end"
                style={{ paddingInline: "1px" }}
              >
                {/* player1 */}
                <Container className="m-0 p-1 " style={{ width: "160px" }}>
                  <p
                    className="text-center text-white   "
                    style={{ margin: 0, fontSize: "18px" }}
                  >
                    {players_1}
                  </p>
                </Container>
                {/* logo */}
                <Container
                  className="text-center p-0 m-0"
                  style={{
                    width: "65px",
                    height: "65px",
                  }}
                >
                  <img height={"100%"} src="assets/logo_players1.png" alt="" />
                </Container>
              </div>
            </Container>
            {/* marcador */}
            <Container
              className=" p-1 d-flex  justify-content-center align-items-center flex-fill"
              style={{ width: "50px" }} //50
            >
              <p
                className="text-center text-white  "
                style={{
                  marginBottom: "0",
                  fontSize: "22px",
                }}
              >
                {goals_T1 && goals_T2 ? `${goals_T1} - ${goals_T2}` : "vs"}
              </p>
            </Container>

            <Container className=" p-1" style={{ width: "220px" }}>
              <div
                className="row d-flex align-items-center "
                style={{ paddingInline: "1px" }}
              >
                {/* logo 2 */}
                <Container
                  className="text-center p-0 m-0"
                  style={{
                    width: "65px",
                    height: "65px",
                  }}
                >
                  <img height={"100%"} src="assets/logo_teams2.png" alt="" />
                </Container>
                {/* players2 */}
                <Container
                  className="m-0 p-1"
                  style={{ width: "160px", fontSize: "18px" }}
                >
                  <p className="text-center text-white  " style={{ margin: 0 }}>
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
