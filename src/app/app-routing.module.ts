import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'

import { SettingsComponent } from './settings/settings.component'
import { MessagesComponent } from './messages/messages.component'
import { WelcomeComponent } from './welcome/welcome.component'

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'messages', component: MessagesComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
