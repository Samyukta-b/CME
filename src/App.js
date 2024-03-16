import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Test1 from './test1.js';
import Test2 from './test2.js';

function App() {
  return (
    <Router>
      <div>
        <Link to="/audio-to-sign-language">Audio to Sign language</Link>
        <Link to="/sign-language-to-audio">Sign language to Audio</Link>
      <Routes>
        <Route path="/audio-to-sign-language" element={<Test1/>} />
        <Route path="/sign-language-to-audio" element={<Test2/>} />
        {/* Define Route for other pages here */}
      </Routes>
    

      </div>
    </Router>
  );
}

export default App;
