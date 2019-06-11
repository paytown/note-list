import { createAction } from 'promise-middleware-redux';
import { createNote, getNotes, getNoteDetail } from '../services/notesApi';

export const [
  newNote,
  NEW_NOTE,
  NEW_NOTE_PENDING
] = createAction('NEW_NOTE', createNote);

export const [
  fetchNotes,
  FETCH_NOTES,
  FETCH_NOTES_PENDING
] = createAction('FETCH_NOTES', getNotes);

export const [
  fetchNoteDetail,
  FETCH_NOTE_DETAIL,
  FETCH_NOTE_DETAIL_PENDING,
] = createAction('FETCH_NOTE_DETAIL', getNoteDetail);
