import React from 'react';
import AppBar from './components/ui/AppBar';
import MainContainer from './components/ui/MainContainer';
import Container from './components/ui/Container';
import ThreadList from './components/ui/ThreadList';

function App() {
  return (
    <React.Fragment>
      <AppBar />
      <MainContainer>
        <Container>
          <ThreadList />
        </Container>
      </MainContainer>
    </React.Fragment>
  );
}

export default App;
