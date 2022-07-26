import React from 'react';
import logo from './logo.svg';
import Data from './Components/User';
import { Route , Routes } from 'react-router-dom';
import View from './Components/Parking-view';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Data/>}></Route>
        <Route path='View/:data' element={<View/>}></Route>
        <Route path='/Register' element={<Data/>}></Route>
      {/* <div className='page'><Data/></div> */}
    </Routes>
  );
}

export default App;
