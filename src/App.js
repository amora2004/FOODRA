import './App.css';
import About from './component/About/About';
import Food from './component/Food/Food';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Navs from './component/Navs/Navs';
import Profile from './component/Profile/Profile';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Review from './component/Review/Review';
import FAQ from './component/FAQ/FAQ';
import Selling from './component/Home/Selling/Selling';




function App() {

  return (
    <>
      <Router>
        <Navs />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/about' element={< About />} />
          <Route path='/food' element={< Food />} />
          <Route path='/selling' element={<Selling />} />
          <Route path='/review' element={< Review />} />
          <Route path='/faq' element={<FAQ />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
