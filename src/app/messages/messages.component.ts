import { Component, OnInit } from '@angular/core'
import { MessageService } from '../message.service'
import { Message } from '../model/Message'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  messages$: Observable<Message[]>

  getMessages() {
    this.messages$ = this.messageService.fetchMessages()
  }

  ngOnInit() {
    this.getMessages()
  }

  onKey(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const target = event.target as HTMLInputElement
      this.messageService.postMessage(target.value).subscribe(m => {
        this.getMessages()
        console.log('message sent:', m)
      })
      target.value = ''
    }
  }

}
