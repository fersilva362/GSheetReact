import { Container } from "react-bootstrap";
const PlayerScore = ({ name, match, score, index }) => {
  name = name.toUpperCase();
  match = match.toString();

  return (
    <Container fluid className="d-flex justify-content-center mt-3 ">
      <Container
        fluid
        style={{
          width: "510px",
        }}
        className="p-0 m-0 "
      >
        <div
          className="row flex-nowrap p-0 m-0 bg-black"
          style={{
            height: "75px",
            marginBottom: "10px",
            boxShadow: "2px 2px 3px rgb(230, 230, 230)",
            background: "linear-gradient(45deg, black,black, #d21615)",
          }}
        >
          <Container className="text-center p-0" style={{ width: "250px" }}>
            <div
              className="row d-flex "
              style={{
                paddingInline: "1px",
              }}
            >
              {/* players info */}
              <Container className="m-0 p-1 " style={{ width: "200px" }}>
                <div className="col ">
                  <p
                    className="text-start text-white fw-bold m-0  "
                    style={{ fontSize: "22px" }}
                  >
                    {name}
                  </p>
                  <p
                    className="text-start text-white m-0  "
                    style={{ fontSize: "12px" }}
                  >
                    {match} match played
                  </p>
                  <p
                    className="text-start text-white m-0 "
                    style={{ fontSize: "12px" }}
                  >
                    scoring goals: {score} (neat goals)
                  </p>
                </div>
              </Container>
            </div>
          </Container>

          <Container
            className="m-0 p-0 d-flex justify-content-center align-items-center"
            style={{
              width: "75px",
              height: "75px",
              backgroundColor: "#94BE1F",
            }}
          >
            <p
              style={{ fontSize: "32px" }}
              className="text-center text-white fw-bold m-0"
            >
              # {index}
            </p>
          </Container>
        </div>
      </Container>{" "}
    </Container>
  );
};
export default PlayerScore;
