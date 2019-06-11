import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

function NoteList({ noteList }) {
  const listItem = noteList.map(note => (
    <li key={note._id}>
      <Note note={note} />
    </li>
  ));

  return (
    <ul>
      {listItem}
    </ul>
  );
}

NoteList.propTypes = {
  noteList: PropTypes.array.isRequired
};

export default NoteList;
