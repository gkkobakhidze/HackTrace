import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import * as React from "react";


import About from '../src/pages/about/AboutPage';
import Layout from './Layout';
import IncidentSubmit from '../src/pages/submit/IncidentSubmit';
import TestPage from './pages/testPage/testPage';
// --------------------------------------------------------------

export default function App() {
  return (

  <Routes>

    <Route path="" element= {<Layout/> } >
      <Route path="/" element= {<IncidentSubmit/> } />
      <Route path="/about" element= {<About/> } />
      <Route path="/test" element= {<TestPage/> } />

    </Route>
  </Routes>
  )
}







