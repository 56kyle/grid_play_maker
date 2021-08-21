import * as React from 'react';
import Action from './action';

export interface VectorProps {
  key: string,
  action: Action,
  xi: number,
  yi: number,
  xf: number,
  yf: number,
}

export interface VectorState {
  x: number,
  y: number,
}

export default class Vector extends React.Component<VectorProps, VectorState> {
  constructor(props: VectorProps) {
    super(props);

    this.state = {
      x: this.props.xi,
      y: this.props.yi,
    }
  }

  public render() {
    return (
      <svg height={Math.abs(this.props.yf - this.props.yi)} width={Math.abs(this.props.xf - this.props.xi)}>
        <line x1={this.state.x} y1={this.state.y} x2={this.props.xf} y2={this.props.yf}/>
        
      </svg>
    );
  }
}







