import React from 'react';

export default class Voting extends React.Component {
  render() {
    const {pair=[]} = this.props;

    const buttonVoting = pair.map((item, i) => <button key={item+i}>
      <h1>{item}</h1>
    </button>); 

    return (
      <div className="voting">
        {buttonVoting}
      </div>
    )
  }
}