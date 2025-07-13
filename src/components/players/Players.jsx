import { useEffect, useState } from "react";
import Player from "../player/Player";


const Players = ({ handleSelectedPlayers }) => {

    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('/public/players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])

    return (
        <div className="grid lg:grid-cols-3 gap-6">
            {
                players.map(player => <Player key={player.playerId} player={player} handleSelectedPlayers={handleSelectedPlayers} />)
            }
        </div>
    );
};

export default Players;