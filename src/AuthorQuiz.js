import React from 'react';
import ConditionalDisplay from './examples/ConditionalDisplay';

import './bootstrap.min.css';



function AuthorQuiz() {
  return (
    <div className="App">
          Author Quiz

          <ConditionalDisplay isVisible={false}>
              <h1>A <span>Sum</span></h1>
              <p>This can be either visible or not!</p>
          </ConditionalDisplay>
    </div>
  );
}

export default AuthorQuiz;
