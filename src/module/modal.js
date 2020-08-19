// action type
const OPEN_MODAL = 'modal/OPEN_MODAL';
const CLOSE_MODAL = 'modal/CLOSE_MODAL';

// 액션 생성 함수
export const openModal = () => {
  console.log('click',);
  return { type: OPEN_MODAL, payload : {
    modal: true,
  } }
}

export const closeModal = () => {
  console.log('click',);
  return { 
    type: CLOSE_MODAL, 
    payload: { modal: false } 
  }
}

const initialState = {
  modal : false,
};

// reducer 선언
export default function modal(state = initialState, action){
  switch(action.type){
    case OPEN_MODAL: 
      return {
        ...state,
        modal: action.payload,
      }
    case CLOSE_MODAL: 
      return {
        ...state,
        modal: action.payload,
      }
    default:
      return state;
  }
}



