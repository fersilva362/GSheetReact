import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.css";

function DarkTable({ match }) {
    return (<>

        <Table striped hover  >
            <thead  >
                <tr style={{ backgroundColor: '#e495e4' }}>
                    <th>Date</th>
                    <th>Goliat's team</th>
                    <th>David's team</th>
                    <th>Goliat scores</th>
                    <th>David scores</th>
                </tr>
            </thead>
            <tbody >
                {match.map(({ date, players_1, players_2, goals_T1, goals_T2 }, idx) => {

                    return (

                        <tr key={idx}>
                            <td>{date}</td>
                            <td>{players_1}</td>
                            <td>{players_2}</td>
                            <td>{goals_T1}</td>
                            <td>{goals_T2}</td>
                        </tr>)
                })}

            </tbody>
        </Table>


    </>

    );
}

export default DarkTable;