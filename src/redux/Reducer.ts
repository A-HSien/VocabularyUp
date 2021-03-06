import { QueryWord, AddToVocabulary, ActionTypes } from "./Actions";
import { Word } from "./States";

type State = any;

const initState: State = {
  vocabulary: [],
};

export const reducer = (
  state = initState,
  action: ActionTypes

): State => {

  switch (action.type) {
    case QueryWord: {
      return {
        vocabulary: [action.payload, ...state.vocabulary]
      };
    }
    case AddToVocabulary: {
      return {
        vocabulary: [action.payload, ...state.vocabulary]
      };
    }
    default:
      return state;
  }
};