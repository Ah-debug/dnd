import React from 'react';
import { concat } from '../../../core/lib/utils';

const App = () => {
  return (
    <div className="App">
      { concat('Hello', 'World', 'Culture') }
    </div>
  );
};

export default App;
