import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './about.jsx';
import Contact from './contact.jsx';
import Index from './index.jsx';
import Courses from './courses.jsx';
import Events from './events.jsx';
import Pricing from './pricing.jsx';
import Trainers from './trainers.jsx';
import CourseDetails from './course-details.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/course-details" element={<CourseDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
