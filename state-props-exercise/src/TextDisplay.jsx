import React, { useState } from 'react';

function TextDisplay(props) {

  return (
    <div>
      <p>{'тут повинен відображатися лічильник'}</p>
      <button>+</button>
      <button>-</button>
    </div>
  );
}

export default TextDisplay;