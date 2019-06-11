import { combineReducers } from 'redux';
import noteList from './noteReducer';
import noteDetail from './noteDetailReducer';

export default combineReducers({
  noteList,
  noteDetail
});
