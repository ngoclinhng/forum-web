import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppBar from './components/ui/AppBar';
import MainContainer from './components/ui/MainContainer';
import PopularThreads from './pages/PopularThreads';
import NewThreads from './pages/NewThreads';
import ThreadPage from './pages/ThreadPage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <MainContainer>
        <Routes>
          <Route path='/' element={<PopularThreads />} />
          <Route path='/new-threads' element={<NewThreads />} />
          <Route path='/new-threads/:cursor' element={<NewThreads />} />
          <Route path='/threads/:id' element={<ThreadPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
