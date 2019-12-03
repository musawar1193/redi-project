
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Courses from './pages/courses/Courses'
import Main from "./pages/Main/Main";
import Lessons from "./pages/lessons/Lessons";
import LessonMaterial from "./pages/lessons/LessonMaterial"

function App() {
  return (
      <Router>
          <div className="App">
              <Route path='/courses'>
                <Courses />
              </Route>
              <Switch>
                  <Route
                      exact
                      path="/course/:course_id"
                      render={props => <Lessons {...props} />}
                  />
                  <Route
                      path="/course/:course_id/:lesson_id"
                      render={props => <LessonMaterial {...props} />}
                  />
              </Switch>

              <Route exact path="/">
                  <Main />
              </Route>
          </div>
      </Router>
  );
}

export default App
