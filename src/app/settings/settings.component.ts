import { Component, OnInit } from '@angular/core'

import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import { State } from '../reducers/main'
import { State as MessageState, MessageActionTypes, SetUsername, selectMessage, selectUsername} from '../reducers/message'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  username$: Observable<string>

  constructor(
    private store: Store<State>
  ) { 
    this.username$ = store.pipe(select(selectUsername))
  }

  ngOnInit() {
  }

  input(e) {
    this.store.dispatch(new SetUsername(e.target.value))
  }
}
