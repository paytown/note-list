import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions/newNoteAction';
import NoteList from '../../components/notes/NoteList';
