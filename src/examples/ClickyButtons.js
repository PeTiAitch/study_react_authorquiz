import React from 'react';
import { range } from 'lodash';

function ClickyButtons({ numberOfButtons, onSelection }) {
    const makeButton = v => <button key={v} id={v} onClick={event => onSelection(event.target.id)}>{v}</button>;
    return <div>
        {range(1, numberOfButtons + 1).map(makeButton)}
    </div>;
}

export default ClickyButtons;