
import React, { useState } from 'react';
import Player from './player';
import Marking from './marking';

interface FieldProps {
    width: number,
    height: number,
}

const Field: FunctionComponent<FieldProps> = (props) => {
    const [players, setPlayers] = useState([]);
    const [markings, setMarkings] = useState([]);
    return <div className="Field">
        {players.map((player: Player) => {
            return <Player key={player.key}/>
        })}
        {markings.map((marking: Marking) => {
            return <Marking key={marking.key}/>
        })}
    </div>
}

Field.defaultProps = {
    width: 500,
    height: 500,
}



