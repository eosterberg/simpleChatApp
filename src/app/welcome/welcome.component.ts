import { Component } from '@angular/core'

@Component({
  selector: 'app-welcome',
  template: `<h1>Welcome to {{title}}!</h1>`,
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  title = 'SimpleChatApp'
}
