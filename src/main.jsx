import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Search from './pages/Search';
import Movie from './pages/Movie';
import Home from './pages/Home';
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={ <App /> } >
          <Route path='/' element={ <Home /> } />
          <Route path='movie/:id' element={ <Movie /> } />
          <Route path='search' element={ <Search /> } />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
