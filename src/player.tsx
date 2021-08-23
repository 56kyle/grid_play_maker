
import React from 'react';
import Field from './field'
import Action from './action'
import {SVGDraggable} from 'typescript-react-draggable';

export interface PlayerProps {
  key: number,
  location: number,
  field: Field,
}

export interface PlayerState{
  selected?: boolean,
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
      <SVGDraggable>
        <svg height={this.state.radius * 2} width={this.state.radius * 2}>
          <circle cx='0' cy='0' r='40' stroke='black' fill='red'/>
        </svg>
      </SVGDraggable>
    );
  }
}




