
import * as React from 'react';
import Field from './field'
import Action from './action'

export interface PlayerProps {
  key: string,
  field: Field,
  lastPlayer?: string,
}

export interface PlayerState{
  radius: number,
  x: number,
  y: number,
}

export default class Player extends React.Component<PlayerProps, PlayerState> {
  constructor(props: PlayerProps) {
    super(props);

    this.state = {
      radius: 40,
      x: 0,
      y: 0,
    }
  }

  public render() {
    return (
      <svg height={this.state.radius * 2} width={this.state.radius * 2}>
        <circle cx='0' cy='0' r='40' stroke='black' fill='red'/>
      </svg>
    );
  }
}




