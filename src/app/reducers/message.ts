import { Action, createSelector, createFeatureSelector } from '@ngrx/store'
import { Message } from '../model/Message'

export interface State {
  username: string
  messages: Message[]
}

export const initialState: State = {
  username: 'Anonymous',
  messages: []
}

export enum MessageActionTypes {
  SET_USERNAME = 'SET_USERNAME',
  FETCH_MESSAGES = 'FETCH_MESSAGES',
  RECEIVED_MESSAGES = 'RECEIVED_MESSAGES',
  POST_MESSAGE = 'POST_MESSAGE',
}

export class FetchMessages implements Action {
  readonly type = MessageActionTypes.FETCH_MESSAGES
}

export class ReceivedMessages implements Action {
  readonly type = MessageActionTypes.RECEIVED_MESSAGES

  constructor(public msgs: Message[]) {}
}

export class PostMessage implements Action {
  readonly type = MessageActionTypes.POST_MESSAGE

  constructor(public msg: string) {}
}

export class SetUsername implements Action {
  readonly type = MessageActionTypes.SET_USERNAME

  constructor(public username: string) {}
}

export type MessageActions = 
  FetchMessages |
  ReceivedMessages |
  PostMessage |
  SetUsername

export function messageReducer(state: State = initialState, action: MessageActions) {
  switch (action.type) {
    case MessageActionTypes.SET_USERNAME:
      return {
          ...state,
          username: action.username
      } 
    case MessageActionTypes.RECEIVED_MESSAGES:
      return {
        ...state,
        messages: action.msgs
      }

    default: return state
  }
}

export const selectMessage = createFeatureSelector<State>('message')
export const selectUsername = createSelector(selectMessage, (state: State) => state.username)
export const selectMessages = createSelector(selectMessage, (state: State) => state.messages)