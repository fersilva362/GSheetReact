import { useLocation } from "react-router-dom"
import { Table } from 'react-bootstrap'

export default function MatchPage({ playersArr }) {
    const location = useLocation()
    const newSearch = new URLSearchParams(location.search).getAll("players")

    const theyPlay = playersArr.filter((obj) => newSearch.includes(obj.name))
    const newPlayer = newSearch.filter(ele => !theyPlay.map(obj => obj.name).includes(ele)).map(name => ({ name: name, match: 0, goals: 0, score: 0 }))
    const allWantToPlay = theyPlay.concat(newPlayer).sort((a, b) => b.score - a.score)

    let teamPlayer1 = []
    let teamPlayer2 = []
    for (const player of allWantToPlay) {
        if (teamPlayer1.length > teamPlayer2) {
            teamPlayer2.push(player)
        } else { teamPlayer1.push(player) }
    }
    console.log(teamPlayer1, '< player 1', 'player2>', teamPlayer2)
    console.log()
    console.log(Math.max(teamPlayer1.length, teamPlayer2.length))



    return (<>
        <div>{JSON.stringify(allWantToPlay)}</div>
        <Table striped hover  >
            <thead  >
                <tr style={{ backgroundColor: '#e495e4' }}>

                    <th>Goliat's team</th>
                    <th>David's team</th>

                </tr>
            </thead>
            <tbody >
                {Array.from({ length: Math.max(teamPlayer1.length, teamPlayer2.length) }, (_, idx) => idx + 1).map((_, idx) => {

                    return (<tr key={idx}>
                        <td>{teamPlayer1[idx]?.name ?? 'vacante'}</td>
                        <td>{teamPlayer2[idx]?.name ?? 'vacante'}</td>

                    </tr>)
                })}

            </tbody>
        </Table>

    </>)

}