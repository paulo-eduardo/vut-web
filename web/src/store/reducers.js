import {
  CHANGE_SEARCHFIELD_PENDING,
  CHANGE_SEARCHFIELD_SUCCESS,
  CHANGE_SEARCHFIELD_FAILED,
  REQUEST_TOOLS_PENDING,
  REQUEST_TOOLS_SUCCESS,
  REQUEST_TOOLS_FAILED
} from "./constants";

const initialStateTool = {
  tools: [],
  isPending: true
};

export const searchField = (state = initialStateTool, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD_PENDING:
      return Object.assign({}, state, { isPending: true });
    case CHANGE_SEARCHFIELD_SUCCESS:
      return Object.assign({}, state, {
        tools: action.payload,
        isPending: false
      });
    case CHANGE_SEARCHFIELD_FAILED:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};

export const requestTools = (state = initialStateTool, action = {}) => {
  switch (action.type) {
    case REQUEST_TOOLS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_TOOLS_SUCCESS:
      return Object.assign({}, state, {
        tools: action.payload,
        isPending: false
      });
    case REQUEST_TOOLS_FAILED:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};
