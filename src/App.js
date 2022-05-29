import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import MainContainer from './components/ui/MainContainer';
import PopularThreads from './pages/PopularThreads';
import Threads from './pages/Threads';
import Thread from './pages/Thread';
import NewThread from './pages/NewThread';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <MainContainer>
        <Routes>
          <Route path='/' element={<PopularThreads />} />
          <Route path='/threads' element={<Threads />} />
          <Route path='/threads/:id' element={<Thread />} />
          <Route path='/threads/new' element={<NewThread />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
