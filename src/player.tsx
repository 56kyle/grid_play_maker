
import React, { FunctionComponent, useState } from 'react';

interface PlayerProps {
    xi: number,
    yi: number,
}

interface DraggableState {
  isDown: boolean;
  posX: number;
  posY: number;
  screenX: number;
  screenY: number;
}


export const Player: FunctionComponent<PlayerProps> = (props) => {
    const [actions, setActions] = useState([]);
    return <div>
        <svg>
            <circle>
            </circle>
        </svg>
        {actions.map((action: Action) => {
            return <Action key={action.key}/>
        })}
    </div>
}



const onMouseDown: (state: DraggableState) => (e: MouseEvent) => {
      return {
        ...state,
        isDown: true,
        screenX: e.screenX,
        screenY: e.screenY
      }
    },

