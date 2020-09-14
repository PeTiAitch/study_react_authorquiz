import React from 'react';
import PropTypes from 'prop-types';

function ConditionalDisplay(props) {
    return (<div>
        {props.isVisible ? props.children : null}
    </div>);
}

ConditionalDisplay.propTypes = {
    isVisible: PropTypes.bool.isRequired
};

export const Test = () => {
    return (
        <ConditionalDisplay isVisible={true}>
            <h1>A <span>Sum</span></h1>
            <p>This can be either visible or not!</p>
        </ConditionalDisplay>
    )
}

export default ConditionalDisplay;