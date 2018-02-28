import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { tap } from 'rxjs/operators'
import { messages, Message } from './model/Message'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../environments/environment';

const messageApiUrl = environment.messageApiUrl
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class MessageService {

  constructor(private http: HttpClient) {}

  username = 'Anonymous'

  fetchMessages(): Observable<Message[]> {
    return this.http.get(
      messageApiUrl,
      httpOptions
    ).pipe(
        tap(msgs => { console.log('msgs:', msgs) }
      )
    ) as Observable<Message[]>
  }

  postMessage(msg: String) {
    let message = { userName: this.username, msg }
    return this.http.post(
      messageApiUrl,
      message,
      httpOptions
    ) as Observable<Message>
  }

}
