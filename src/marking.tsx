import * as React from 'react';
import Field from './field';

export interface MarkingProps {
  key: string,
  field: Field,
  width: number,
  height: number,
}

export interface MarkingState {
}

export default class Marking extends React.Component<MarkingProps, MarkingState> {
  constructor(props: MarkingProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <svg height={this.props.height} width={this.props.width}>
        
      </svg>
    );
  }
}
