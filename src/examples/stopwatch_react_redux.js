import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect } from 'react-redux';
import { createStore } from 'redux'

let container = createStore((model = { running: false, time: 0 }, action) => {
    const updates = {
        'START': (model) => Object.assign({}, model, { running: true }),
        'STOP': (model) => Object.assign({}, model, { running: false }),
        'TICK': (model) => Object.assign({}, model, { time: model.time + (model.running ? 1 : 0) })
    };
    return (updates[action.type] || (() => model))(model);
});

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch, props) => ({
    onStart: () => { dispatch({ type: 'START' }); },
    onStop: () => { dispatch({ type: 'STOP' }); }
});

const Stopwatch = connect(mapStateToProps, mapDispatchToProps)((props) => {
    let minutes = Math.floor(props.time / 60);
    let seconds = props.time - (minutes * 60);
    let secondsFormatted = `${seconds < 10 ? '0' : ''}${seconds}`;

    return <div>
        <p>{minutes}:{secondsFormatted}</p>
        <button onClick={props.running ? props.onStop : props.onStart}>
            {props.running ? 'Stop' : 'Start'}
        </button>
    </div>;
});;

export const renderExample = () => {
    ReactDOM.render(
        <Provider store={container}>
            <Stopwatch />
        </Provider>,
        document.getElementById('root')
    );

    setInterval(() => {
        container.dispatch({ type: 'TICK' });
    }, 1000);
}

