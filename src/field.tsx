import * as React from 'react';
import Player from './player';
import Marking from './marking';
import { v4 as uuidv4 } from 'uuid';
import { stringify } from 'querystring';

export interface FieldProps {
  key: string,
}

export interface FieldState {
  players: Map<string, Player>,
  lastPlayer?: string,
  markings: Map<string, Marking>,
  lastMarking?: string,
}

export default class Field extends React.Component<FieldProps, FieldState> {
  constructor(props: FieldProps) {
    super(props);

    this.state = {
      players: new Map<string, Player>(),
      markings: new Map<string, Marking>(),
    }
  }

  addPlayer = () => {
    this.setState((state, props) => {
      let player = new Player({key: uuidv4(), field: this, lastPlayer: this.state.lastPlayer})
      state.players.set(player.props.key, player);
      return state;
    })
  }

  undoPlayer = () => {
    if (this.state.lastPlayer) {
      this.deletePlayer(this.state.lastPlayer);
    } else {
    }
  }

  deletePlayer = (key: string) => {
    this.setState((prevState, props) => {
      if (prevState.lastPlayer) {
        let currentPlayer = this.state.players.get(key)
        prevState.players.delete(key);
        let state = {lastPlayer: currentPlayer?.props.lastPlayer, players: prevState.players}
        return state;
      } else {
        

      }
    })
  }

  public render() {
    return (
      <div className="Field">
        {this.state.players.map((player: Player) => {
          return <Player key={player.key} field={this} />;
        })}
        {markings.map((marking: Marking) => {
          return <Marking key={marking.key} field={this} />;
        })}
      </div>
    );
  }
}

