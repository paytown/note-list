import { post, get } from './request';

export const createNote = note => post('/api/v1/notes', note);
export const getNotes = () => get('/api/v1/notes');
export const getNoteDetail = id => get(`/api/v1/notes/${id}`);
