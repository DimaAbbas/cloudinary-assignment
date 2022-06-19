import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NewTag from './view/components/newTag/NewTag';
import Tags from './view/components/tagsList/Tags';
import PhotosList from './view/components/photosList/PhotosList';
import AssignedPhotos from './view/components/assignedPhotos/AssignedPhotos';

function App() {
  return (
    <div className="App">
      <div className='column1'>
        <NewTag />
        <Tags />
      </div>
      <div className='column2'>
        <PhotosList />
        <AssignedPhotos />
      </div>
    </div>
  );
}

export default App;
