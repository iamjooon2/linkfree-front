import {createAction, handleActions} from 'redux-actions';
import { STATEMENT_TYPES } from '../../../../Users/gnldl/AppData/Local/Microsoft/TypeScript/4.5/node_modules/@babel/types/lib/index';

const CHANGE_INPUT = 'linkcomponents/CHANGE_INPUT';
const INSERT = 'linkcomponents/INSERT';
const REMOVE = 'linkcomponents/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3; //더미데이터가 3으로 시작해서

export const insert = (title, url) => ({
  type : INSERT,
  linkcomponent : {
    id: id++,
    title,
    url
  }
});

export const remove = createAction(REMOVE, id => id);

const initialState = { //dummy data
  input: '',
  linkcomponents : [{
    id : 1,
    title : 'drakejin',
    url : 'https://github.com/drakejin'
  },
  {
    id : 2,
    title : 'junhee',
    url : 'https://naver.com'
  }
  ]
};

const linkcomponents = handleActions({
    [CHANGE_INPUT]: (state, action) => ({...state, input: action.payload}),
    [INSERT] : (state, action) => ({
      ...state,
      linkcomponents: state.linkcomponents.concat(action.payload),
    }),
    [REMOVE] : (state, action) => ({
      ...state,
      linkcomponents: state.linkcomponents.filter(linkcomponent => linkcomponent.id !== action.payload),
    }),
  },
  initialState,
)

export default linkcomponents;