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

  fetchMessages(): Observable<Message[]> {
    return this.http.get(
      messageApiUrl,
      httpOptions
    ).pipe(
        tap(msgs => { console.log('msgs:', msgs) }
      )
    ) as Observable<Message[]>
  }

  postMessage(msg: string, userName: string) {
    return this.http.post(
      messageApiUrl,
      { userName, msg },
      httpOptions
    ) as Observable<Message>
  }

}
