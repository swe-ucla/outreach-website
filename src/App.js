import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import MeetTheTeam from './MeetTheTeam';
import Contact from './Contact';
import HiEngineer from './HiEngineer';
import ProjectScientist from './ProjectScientist';
import EngineeringStayover from './EngineeringStayover';
import FallWorkshop from './FallWorkshop';
import Projects from './Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/contact-us" element={<Contact />}/>
          <Route path="/hi-engineer" element={<HiEngineer />}/>
          <Route path="/project-scientist" element={<ProjectScientist />}/>
          <Route path="/engineering-stayover" element={<EngineeringStayover />}/>
          <Route path="/fall-workshop" element={<FallWorkshop />}/>
          <Route path="/projects" element={<Projects />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
