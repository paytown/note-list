import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions/newNoteAction';
import NoteList from '../../components/notes/NoteList';
import { getNotes, getNotesLoading } from '../../selectors/noteListSelectors';

class AllNotes extends PureComponent {
  static propTypes = {
    noteList: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() { 
    this.props.fetch();
  }

  render() {
    const { loading, noteList } = this.props;
    if(loading) return <h1>Loading...</h1>;

    return <NoteList noteList={noteList} />;
  }
}

const mapStateToProps = state => ({
  noteList: getNotes(state),
  loading: getNotesLoading(state)
});

const mapDispatchToProps = dispatch => ({ 
  fetch() {
    dispatch(fetchNotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllNotes);
