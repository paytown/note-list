import React from 'react';
import PropTypes from 'prop-types';

function NoteForm({ onSubmit, onChange, title, body, submitText }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="title" value={title} placeholder="Title" onChange={onChange} />
      <textarea name="body" value={body} placeholder="Body" onChange={onChange}></textarea>
      <button>{submitText}</button>
    </form>
  );
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  submitText: PropTypes.string
};

NoteForm.defaultProps = {
  submitText: 'Submit'
};

export default NoteForm;
