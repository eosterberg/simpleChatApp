import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { StoreModule } from '@ngrx/store'
import { reducers, initialState } from './reducers/main'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { SettingsComponent } from './settings/settings.component'
import { MessagesComponent } from './messages/messages.component'
import { MessageService } from './message.service'
import { WelcomeComponent } from './welcome/welcome.component'

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    MessagesComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { initialState })
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
