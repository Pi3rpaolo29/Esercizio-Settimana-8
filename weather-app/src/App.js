import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from './components/NavbarComponent';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ResultsPage from './pages/ResultsPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Container>          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
