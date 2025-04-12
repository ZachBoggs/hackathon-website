import React from 'react';
import { Sample } from './Sample'
import { PageNotFound } from './PageNotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Sample />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
