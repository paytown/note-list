export const createNote = note => {
  return Promise.resolve({
    _id: '311',
    ...note
  });
};
