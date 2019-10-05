
export const QueryWord = 'QueryWord';
export interface QueryWordAction {
  type:typeof  QueryWord,
  payload: string,
};
export function queryWord(word: string): QueryWordAction {
  return {
    type: QueryWord,
    payload: word
  };
};

export const AddToVocabulary = 'AddToVocabulary';　
export interface AddToVocabularyAction {
  type:typeof AddToVocabulary,
  payload: string,
};
export function addToVocabulary(word: string): AddToVocabularyAction {
  return {
    type: AddToVocabulary,
    payload: word
  };
};

export type ActionTypes =
 QueryWordAction |
  AddToVocabularyAction;