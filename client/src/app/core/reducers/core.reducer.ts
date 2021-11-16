import { ICoreReducers } from './interface';
import { ERRORMESSAGE } from './type';

export const initialState: ICoreReducers = {
  errorMessage: '',
};
export function CoreReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case ERRORMESSAGE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
