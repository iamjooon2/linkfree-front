const CHANGE_INPUT = 'linkcomponents/CHANGE_INPUT';
const INSERT = 'linkcomponents/INSERT';
const REMOVE = 'linkcomponents/REMOVE';

export const changeInput = (input) => ({
  type : CHANGE_INPUT,
  input
});

let id = 3; //더미데이터가 3으로 시작해서

export const insert = (title, url) => ({
  type : INSERT,
  linkcomponent : {
    id: id++,
    title,
    url
  }
});

export const remove = id => ({
  type : REMOVE,
  id
});

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

function linkcomponents(state = initialState, action) {
  switch (action.type){
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      };
    case INSERT:
      return {
        ...state,
        linkcomponents: state.linkcomponents.concat(action.linkcomponent)
      };
    case REMOVE:
      return {
        ...state,
        linkcomponents: state.linkcomponents.filter(linkcomponent => linkcomponent.id !== action.id)
      };
    default:
      return state;
  }
}

export default linkcomponents;