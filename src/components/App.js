import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from '../container/notes/HomePage';
import NoteDetailById from '../container/notes/NoteDetailById';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:id" component={NoteDetailById} />
      </Switch>
    </Router>
  );
}
