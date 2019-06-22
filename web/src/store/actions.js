import api from "../services/api";
import {
  CHANGE_SEARCHFIELD_PENDING,
  CHANGE_SEARCHFIELD_SUCCESS,
  CHANGE_SEARCHFIELD_FAILED,
  REQUEST_TOOLS_PENDING,
  REQUEST_TOOLS_SUCCESS,
  REQUEST_TOOLS_FAILED
} from "./constants";

export const searchField = (tags, only_tags) => dispatch => {
  dispatch({ type: CHANGE_SEARCHFIELD_PENDING });
  let url = "tools";
  if (tags) {
    url += (only_tags ? "?tags_only=" : "?q=") + tags;
  }
  api
    .get(url)
    .then(response =>
      dispatch({ type: CHANGE_SEARCHFIELD_SUCCESS, payload: response.data })
    )
    .catch(error =>
      dispatch({ type: CHANGE_SEARCHFIELD_FAILED, payload: error })
    );
};

export const requestTools = () => dispatch => {
  dispatch({ type: REQUEST_TOOLS_PENDING });
  api
    .get("tools")
    .then(response =>
      dispatch({ type: REQUEST_TOOLS_SUCCESS, payload: response.data })
    )
    .catch(error => dispatch({ type: REQUEST_TOOLS_FAILED, payload: error }));
};
