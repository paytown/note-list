export const NEW_NOTE = 'NEW_NOTE';
export const newNote = (title, body) => ({
  type: NEW_NOTE,
  payload: {
    title: title,
    body: body
  }
});
