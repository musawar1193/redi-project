import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Courses from './pages/courses/Courses'
import Main from "./pages/Main/Main";
import Lessons from "./pages/lessons/Lessons";

function App() {
  return (
      <Router>
          <div className="App">
              <Route path='/courses'>
                <Courses />
              </Route>
              <Route path='/course/:lesson'>
                  <Lessons />
              </Route>
              <Route exact path="/">
                  <Main />
              </Route>
          </div>
      </Router>
  );
}

export default App;
