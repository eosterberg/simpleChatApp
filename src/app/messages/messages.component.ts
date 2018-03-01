import { Component, OnInit } from '@angular/core'
import { Message } from '../model/Message'
import { Observable } from 'rxjs/Observable'
import { MessageEffects } from '../reducers/message.effects'
import { Store, select } from '@ngrx/store'
import { State } from '../reducers/main'
import { selectMessages, FetchMessages, PostMessage } from '../reducers/message'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private store: Store<State>) { 
    this.messages$ = store.pipe(select(selectMessages))
  }

  messages$: Observable<Message[]>

  getMessages() {
    this.store.dispatch(new FetchMessages)
  }

  ngOnInit() {
    this.getMessages()
  }

  onKey(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      let target = event.target as HTMLInputElement
      this.store.dispatch(new PostMessage(target.value))
      target.value = ''
    }
  }

}
