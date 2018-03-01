import { Injectable } from '@angular/core'
import { Action, Store } from '@ngrx/store'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators'

import { MessageActionTypes, ReceivedMessages, PostMessage, FetchMessages } from './message'
import { MessageService } from '../message.service'
import { Message } from '../model/Message'
import { State } from './main'

@Injectable()
export class MessageEffects {
  @Effect() fetchMessages$: Observable<Action> = this.actions.pipe(
    ofType(MessageActionTypes.FETCH_MESSAGES),
    mergeMap(action =>
        this.messageService.fetchMessages().pipe(
        // If successful, dispatch success action with result
        map((msgs: Message[]) => new ReceivedMessages(msgs)),
        // If request fails, dispatch failed action
        //catchError(() => of({ type: 'LOGIN_FAILED' }))
      )
    )
  )
  
  @Effect() postMessage$: Observable<Action> = this.actions.pipe(
    ofType(MessageActionTypes.POST_MESSAGE),
    withLatestFrom(this.store),
    mergeMap(([action, state]) => {
        let msg = (action as PostMessage).msg        
        return this.messageService.postMessage(msg, state.message.username).pipe(
        // If successful, dispatch success action with result
        map((msg: Message) => new FetchMessages()),
        // If request fails, dispatch failed action
        //catchError(() => of({ type: 'LOGIN_FAILED' }))
      )
    })
  )

  constructor(
    private messageService: MessageService,
    private actions: Actions,
    private store: Store<State>
  ) {}
}