import React from 'react';

class RefExample extends React.Component {
    constructor() {
        super();
        this.myDiv = React.createRef();
    }
    
    componentDidMount() {
        this.myDiv.current.innerHTML += "<br/> Set on the wrapped DOM element. <strong>Unsafe</strong>";
    }

    render() {
        return <div ref={this.myDiv}>{"Set in render <strong>Safe</strong>"}</div>;
    }
}

export default RefExample;