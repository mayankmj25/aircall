import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Flexbox from './Flexbox.jsx';
import Header from './Header.jsx';
import AllCalls from './components/AllCalls.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('inbox');
  useEffect(() => {
    fetch('https://cerulean-marlin-wig.cyclic.app/activities').then(response => response.json()).then(data => {
      setData(data)
    })
  },[])
  const getInboxData = () => {
    return data.filter((call) => call.call_type==='missed')
  }
  return (
    <Flexbox className='container' flexDirection='column' justifyContent='space-between'>
      <Flexbox flexDirection='column'>
        <Flexbox className='header'>
        <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
        </Flexbox>
      <Flexbox className="container-view">
        <AllCalls allCalls = {activeTab === 'inbox' ? getInboxData(data) : data}/>
      </Flexbox>
      </Flexbox>
      <Flexbox className='footer'>
        <Footer />
      </Flexbox>
    </Flexbox>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
