import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NewTag from './view/components/newTag/NewTag';
import Tags from './view/components/tagsList/Tags';

function App() {
  return (
    <div className="App">
      <div className='column1'>
        <NewTag />
        <Tags />
      </div>
      <div className='column2'>
        <p>Hiii</p>
      </div>
    </div>
  );
}

export default App;
