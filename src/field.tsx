import * as React from 'react';
import Player from './player';
import Marking from './marking';

export interface FieldProps {
  key: number,
  height: number,
  width: number,
}

export interface FieldState {
  selection?: Player,
  players: Player[],
}

export default class Field extends React.Component<FieldProps, FieldState> {
  constructor(props: FieldProps) {
    super(props);

    this.state = {
      players: [],
    };
  }

  addPlayer = () => {
    this.setState((prevState, props) => {
      let state = {players: prevState.players};
      let player = new Player({key: this.state.players.length, field: this});
      state.players.push(player);
      return state;
    })
  }

  undoPlayer = () => {
    this.setState((prevState, props) => {
      let state = {players: prevState.players};
      state.players.pop();
      return state;
    })
  }

  deletePlayer = (key?: number) => {
    let finalKey: number
    if (!key && this.state.selection) {
      finalKey = this.state.selection.props.key;
    }
    if (key) {
      finalKey = key;
      this.setState((prevState, props) => {
        let state = {players: prevState.players};
        delete state.players[finalKey];
        return state;
      })
    }
  }

  sidelines = () => {
    return (
      <g className="sidelines">
        <line x1='0' y1='0' x2='0' y2={this.props.height} fill='white' stroke='white' strokeWidth={this.props.width * .05}/>
        <line x1='0' y1='0' x2='0' y2={this.props.height} fill='white' stroke='white' strokeWidth={this.props.width * .05}/>
      </g>
    );
  }

  public render() {
    return (
      <div className="Wrapper">
        <svg className="Field" height={this.props.height} width={this.props.width}>
          {this.sidelines()}
          {this.state.players.map((player: Player) => {
            return <Player key={player.props.key} field={this} />;
          })}
        </svg>
        <div className="UI">
          <button onClick={(e) => {
            this.addPlayer();
          }}/>
          <button onClick={(e) => {
            this.undoPlayer();
          }}/>
          <button onClick={(e) => {
            this.deletePlayer();
          }}/>
        </div>
      </div>
    );
  }
}

