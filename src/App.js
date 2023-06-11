import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MainContent from './Components/MainContent/MainContent';
import Home from './pages/Home';
import Movies from './pages/Movies';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import SearchField from './Components/SearchField/SearchField';
import TvSeries from './pages/TvSeries';
import Bookmark from './pages/Bookmark';
function App() {
  return (
    

<BrowserRouter>
<div>
<Navbar/>
<SearchField/>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/tvseries" element={<TvSeries />}></Route>
        <Route path="/bookmark" element={<Bookmark />}></Route>
 
          
        
      </Routes>
      </div>
    </BrowserRouter>

   
    
  );
}

export default App;
