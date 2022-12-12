import { Component, OnInit } from '@angular/core';
import { EmailService } from './core/service/email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private emailService: EmailService){
  }
  ngOnInit(): void {
    this.emailService.browseAll();
  }

}
