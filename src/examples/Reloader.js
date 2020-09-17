import React, { Component } from 'react';

class Reloader extends Component {
    state = {
        content: ""
    }

    onChar = (event) => {
        this.setState({ content: event.target.value });
    }

    onGoTime = (event) => {
        if (this.state.content !== "reload") {
            event.preventDefault();
        }
    }
    
    render() {
        return (
            <form onSubmit={this.onGoTime}>
                <input type="text" value={this.state.content} onChange={this.onChar} />
                <input type="submit" value="Go Time" />
            </form>);
    }
}

export default Reloader;