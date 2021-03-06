import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClickCounter extends Component {
  
  static propTypes = {
    limit: PropTypes.number.isRequired,
  }

  /**
   * This is an alternative syntax for 
   *  constructor(props) {
   *   super(props);
   *   this.state = {counter: 0};
   *   this.handleClick = this.handleClick().bind(this);
   */  
  state = {
    counter: 0,
    disableButton: false,
  };

  /**
   * Used stage-2 the class-field syntax
   * which privents of using this line in constructor
   *  this.onClick = this.handleClick.bind(this);
   */
  handleClick = () => {
    this.setState((prevState) => {
      return {
        counter: (this.props.limit <= prevState.counter) 
          ? prevState.counter : (prevState.counter + 1),
        disableButton: (this.props.limit <= prevState.counter)
          ? !prevState.disableButton : prevState.disableButton
      };
    });
  };

  render() {
    return (
      <div>
        <input 
          type="button" 
          value="Click Me!" 
          onClick={this.handleClick} 
          disabled={this.state.disableButton} />
        <h5>
          <div>You clicked on "Click Me!" {this.state.counter} times</div>
        </h5>
        {(this.state.disableButton && <div>YOU HAVE TO STOP! Go out and meet up with friends!</div>)}
      </div>
    );
  };
};

export default ClickCounter;
