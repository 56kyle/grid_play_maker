import * as React from 'react';
import Player from './player';
import './field.css';

export interface FieldProps {
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
    console.log('field - addPlayer');
    this.setState((prevState, props) => {
      let state = {players: prevState.players};
      let player = new Player({key: this.state.players.length, location: this.state.players.length, field: this});
      state.players.push(player);
      return state;
    })
  }

  undoPlayer = () => {
    console.log('field - undoPlayer');
    this.setState((prevState, props) => {
      let state = {players: prevState.players};
      state.players.pop();
      return state;
    })
  }

  sidelines = () => {
    return (
      <g className="sidelines">
        <line x1='0' y1='0' x2='0' y2={this.props.height} fill='white' stroke='white' strokeWidth={this.props.width * .05}/>
        <line x1={this.props.width} y1='0' x2={this.props.width} y2={this.props.height} fill='white' stroke='white' strokeWidth={this.props.width * .05}/>
      </g>
    );
  }

  public render() {
    return (
      <div className="Wrapper">
        <svg className="Field" height={this.props.height} width={this.props.width}>
          {this.sidelines()}
          {this.state.players.map((player: Player) => {
            console.log(this);
            return (<Player key={player.props.key} location={player.props.location} field={this} />);
          })}
        </svg>
        <div className="UI">
          <button className="player-button" onClick={(e) => {
            this.addPlayer();
          }}/>
          <button className="player-button" onClick={(e) => {
            this.undoPlayer();
          }}/>
        </div>
      </div>
    );
  }
}

