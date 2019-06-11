import {
  FETCH_NOTE_DETAIL,
  FETCH_NOTE_DETAIL_PENDING
} from '../actions/newNoteAction';

const initialState = {
  loading: false,
  noteDetail: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_NOTE_DETAIL:
      return { ...state, loading: false, noteDetail: action.payload };
    case FETCH_NOTE_DETAIL_PENDING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
