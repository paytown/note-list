import { combineReducers } from 'redux';
import noteList from './noteReducer';
import noteDetail from './noteDetailReducer';
import session from './sessionReducer';

export default combineReducers({
  noteList,
  noteDetail,
  session
});
