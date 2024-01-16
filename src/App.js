import { useEffect, useState } from 'react'
import './App.css';
import DarkTable from './DarkTable';
import Jugadores from './jugadores';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout';
import FormPlayer from './FormPlayers';
import MatchPage from './MatchPage';


function App() {
  const [match, setMatch] = useState([])
  useEffect(() => {
    fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRklhWozJdAqNjiint5ZUUlavPlf5lmZ3xhAwMYTUGw8i4XBVdYGv97emEHlCgm6blZc_A7nVcNt_Ij/pub?gid=0&single=true&output=tsv').then(response => response.text()).then(data => {
      const array = data.split('\n').slice(1).map((row) => {

        const [date, players_1, players_2, goals_T1, goals_T2] = row.split('\t')
        return { date, players_1, players_2, goals_T1: parseInt(goals_T1), goals_T2: parseInt(goals_T2) }

      });
      setMatch(array);

    }
    );
  }, [])
  console.log(match)
  let players = new Map()
  if (match.length !== 0) {
    for (const { players_1, players_2, goals_T1, goals_T2 } of match) {

      const names1 = players_1.split(',');
      const names2 = players_2.split(',')
      for (let name of names1) {
        name = name.trim()
        let player = players.get(name) || { name: name, match: 0, goals: 0 };
        player.match++; player.goals += goals_T1 - goals_T2;
        players.set(name, player)
      }
      for (let name of names2) {
        name = name.trim()
        let player = players.get(name) || { name: name, match: 0, goals: 0 };
        player.match++; player.goals += goals_T2 - goals_T1;
        players.set(name, player)
      }
    }
  }
  const playersArr = Array.from(players.values()).sort((a, b) => b.goals - a.goals).map(player => ({ ...player, score: Math.round(player.goals / player.match) }));
  //
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, children: [{
        path: "/",
        element: <DarkTable match={match} />,
      }, {
        path: "jugadores",
        element: <Jugadores playersArr={playersArr} />
      }, {
        path: "armar-equipo",
        element: <FormPlayer playersArr={playersArr} />,

      }, {
        path: "post",
        element: <MatchPage playersArr={playersArr} />,

      },

      ]
    },

  ]);

  return (<RouterProvider router={router} />)
}

export default App;
