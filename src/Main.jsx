import React from 'react';
import { Current } from './Current'
import { PageNotFound } from './PageNotFound'
import { Testing } from './Testing';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Current />} />
        <Route path='/testing' element={<Testing />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
