import { Component, OnInit } from '@angular/core'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

}
