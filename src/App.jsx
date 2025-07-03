import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

import Personal from './pages/Personal';
import Navigation from './pages/Navigation';

import Qualification from './pages/Qualification';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import Home from './pages/Home';

function App() {

  return (
    <div id='app-section'>
      <BrowserRouter>
        <Personal />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='qualification' element={<Qualification />}/>
            <Route path='experience' element={<Experience />}/>
            <Route path='projects' element={<Projects />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='*' element={<Navigate to="/" replace />}/>
          </Route>
        </Routes>
        <Navigation />
      </BrowserRouter>
    </div>
  )
}

export default App;