import React, { Component } from 'react';

class EvenCounter extends React.Component {
    state = { clicks: 0 };

    clickHandler = (event) => {
        const clicksNew = this.state.clicks + 1;
        this.setState({ clicks: clicksNew });
        if (clicksNew % 2 === 0) {
            this.props.onEvenClick(clicksNew);
        }
    }

    render() {
        return <div onClick={this.clickHandler}>
            This div has been clicked {this.state.clicks} times.
        </div>;
    }
}

const Test = () => (
    <EvenCounter onEvenClick={(data) => { console.log(`even ${data}`); }} />
);

export default Test;