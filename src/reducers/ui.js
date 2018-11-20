const initialState = {
  modalContent: null,
  modalStyle: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      const { top, left, height, width } = action.target.getBoundingClientRect();

      return Object.assign({}, state, {
        modalContent: action.content,
        modalStyle: {
          top: top + height / 2,
          left: left + width / 2
        }
      });
    
    case 'CLOSE_MODAL':
      return Object.assign({}, state, {
        modalContent: null
      });
    
    default:
  }

  return state;
};
