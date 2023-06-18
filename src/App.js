import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MainContent from './Components/MainContent/MainContent';
import Home from './pages/Home';
import Movies from './pages/Movies';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import SearchField from './Components/SearchField/SearchField';
import TvSeries from './pages/TvSeries';
import Bookmark from './pages/Bookmark';
import data from './data.json'
function App() {
  let [searchQuery, setSearch] = useState("");
  let [listResult, setListResult] = useState();
  const handleSearchField = (event) => {
    let results = data.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    // console.log(results);
    // listResult=results.map(item=>item=[item]);
    console.log(results);
    console.log("lestreult:" + results)
    setListResult(results);
    // console.log(listResult)

    //setListResult(listResult)

    setSearch(event.target.value);


  }

  useEffect(() => {
    setSearch(searchQuery);
    //console.log(searchQuery);

  }, [searchQuery]);

  return (


    <HashRouter>
      <div>
        <Navbar />
        <SearchField onChange={handleSearchField} />

        <Routes>
          <Route path="/" element={<Home query={searchQuery} list={listResult} />}></Route>
          <Route path="/movies" element={<Movies query={searchQuery} list={listResult} />}></Route>
          <Route path="/tvseries" element={<TvSeries query={searchQuery} list={listResult} />}></Route>
          <Route path="/bookmark" element={<Bookmark query={searchQuery} list={listResult} />}></Route>



        </Routes>
      </div>
    </HashRouter>



  );
}

export default App;
