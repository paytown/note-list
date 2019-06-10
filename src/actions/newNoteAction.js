// import { createAction } from 'promise-middleware-redux';
// import { createNote } from '../services/notesApi';

// export const NEW_NOTE = 'NEW_NOTE';
// export const newNote = ({ title, body }) => ({
//   type: NEW_NOTE,
//   payload: {
//     title: title,
//     body: body
//   }
// });

import { createAction } from 'promise-middleware-redux';
import { createNote } from '../services/notesApi';

export const [
  newNote,
  NEW_NOTE,
  NEW_NOTE_PENDING
] = createAction('NEW_NOTE', createNote);
