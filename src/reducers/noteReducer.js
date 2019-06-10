import { NEW_NOTE } from '../actions/newNoteAction';

const initialState = [];

export default function reducer(state = initialState, action) {
  console.log(action);
  switch(action.type) {
    case NEW_NOTE:
      return [...state, action.payload];
    default:
      return state;
  }
}
