import { ActionReducerMap } from '@ngrx/store'
import { messageReducer, State as MessageState, initialState as messageState } from './message'

export interface State {
  message: MessageState;
}

export const reducers: ActionReducerMap<State> = {
    message: messageReducer
}

export const initialState: State = {
    message: messageState
}


  

