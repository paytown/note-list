import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNoteDetail } from '../../actions/newNoteAction';
import NoteDetail from '../../components/notes/NoteDetail';
import { getNoteDetail, getNoteDetailLoading } from '../../selectors/noteDetailSelectors';


class NoteDetailById extends PureComponent {
  static propTypes = {
    noteDetail: PropTypes.object,
    loading: PropTypes.bool,
    fetch: PropTypes.func
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { noteDetail, loading } = this.props;
    if(loading) return <h1>Loading...</h1>;
    
    return <NoteDetail noteDetail={noteDetail} />;
  }
}

const mapStateToProps = state => ({
  noteDetail: getNoteDetail(state),
  loading: getNoteDetailLoading(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch(){
    dispatch(fetchNoteDetail(props.match.params.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteDetailById);
