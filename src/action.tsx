import * as React from 'react';
import Player from './player';
import Vector from './vector';

export interface ActionProps {
  key: number,
  player: Player,
}

export interface ActionState {
}

export default class Action extends React.Component<ActionProps, ActionState> {
  constructor(props: ActionProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        
      </div>
    );
  }
}


