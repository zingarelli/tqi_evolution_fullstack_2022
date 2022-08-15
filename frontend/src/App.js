import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

import Home from './components/pages/Home';
import Purchase from './components/pages/Purchase';
import Book from './components/pages/Book';
import Sale from './components/pages/Sale';

function App() {
  return (
    <div className="App">
      <Router>    
        <Navbar />
        <main className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/book' element={<Book />} />
            <Route path='/purchase' element={<Purchase />} />
            <Route path='/sale' element={<Sale />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
