import React, { useState } from 'react';
import { Input } from '@tao.shu/component';

const App = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <Input value={value} onChange={setValue} />
    </div>
  );
};
export default App;
