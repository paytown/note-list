import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from '../container/notes/HomePage';
import NoteDetailById from '../container/notes/NoteDetailById';
import { Callback } from '../container/auth/callback';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/callback" component={Callback} />
        <Route exact path="/:id" component={NoteDetailById} />
      </Switch>
    </Router>
  );
}
