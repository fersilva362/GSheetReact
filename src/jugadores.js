import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.css";

function Jugadores({ playersArr }) {
    return (
        <>
            <Table striped hover  >

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
            </Table>

        </>

    );
}

export default Jugadores;