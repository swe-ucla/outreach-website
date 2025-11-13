import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import MeetTheTeam from './MeetTheTeam';
import Contact from './Contact';

function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/contact-us" element={<Contact />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
