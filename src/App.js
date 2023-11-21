import NavBar from './components/NavBar';
import './App.css';
import Dogs from './components/Dogs';
import Cats from './components/Cats';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

function App() {
  return (

    <>
    <Router>
      <body>
      <NavBar />
     
        <div className='container'>
     
          <Routes>
            <Route path='/' exact element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/funcat' element={ <Cats /> } />
            <Route path='/fundog' element={ <Dogs /> } />
          </Routes>

        </div>

      <Footer />

      </body>
      </Router>
    </>

   
  );
}

export default App;