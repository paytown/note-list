import React from 'react';
import PropTypes from 'prop-types';

function NoteDetail({ noteDetail }) {
  return (
    <>
      <h2>{noteDetail.title}</h2>
      <p>{noteDetail.body}</p>
    </>
  );
}

NoteDetail.propTypes = {
  noteDetail: PropTypes.object.isRequired
};

export default NoteDetail;
