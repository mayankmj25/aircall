import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Flexbox from './Flexbox.jsx';

import Header from './Header.jsx';

const App = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://cerulean-marlin-wig.cyclic.app/activities').then(response => response.json()).then(data => {
      setData(data)
    })
  },[])
  return (
    <Flexbox className='container' flexDirection='column'>
      <Header/>
      <Flexbox className="container-view">Some activities should be here</Flexbox>
    </Flexbox>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
