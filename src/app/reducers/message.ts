import { Action, createSelector, createFeatureSelector } from '@ngrx/store'

export interface State {
  username: string;
}

export const initialState: State = {
  username: 'Anonymous'
}

export enum MessageActionTypes {
  SET_USERNAME = 'SET_USERNAME',
  SET_MESSAGES = 'SET_MESSAGES',
}

export class Decrement implements Action {
  readonly type = MessageActionTypes.SET_MESSAGES
}

export class SetUsername implements Action {
  readonly type = MessageActionTypes.SET_USERNAME

  constructor(public username: string) {}
}

export type MessageActions = Decrement | SetUsername

export function messageReducer(state: State = initialState, action: MessageActions) {
  switch (action.type) {
    case MessageActionTypes.SET_USERNAME:
      return {
          ...initialState,
          username: action.username
      } 

    default: return state
  }
}

export const selectMessage = createFeatureSelector<State>('message')
export const selectUsername = createSelector(selectMessage, (state: State) => state.username)