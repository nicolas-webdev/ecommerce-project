import { directory } from "../../lib/directory.data";
const INITIAL_STATE = directory;

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
