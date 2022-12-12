import { Component, OnInit } from '@angular/core';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { MessageDTO } from '../../dto/message.dto';
import { EmailService } from '../../service/email.service';
import { MessageFolderEnum } from '../utils/message.folder.enum';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  sentEmails$ : Observable<MessageDTO[]>;
  destroy$: Subject<boolean> = new Subject<boolean>();
  title: string = "Inbox folder"

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {

    this.emailService.browseAll();
    this.sentEmails$ = this.emailService.messages.pipe(map(
      (messages) => {
        return messages.filter(
          (message) => 
             { return message.Folder === MessageFolderEnum.INBOX_FOLDER }
          )
         }),takeUntil(this.destroy$))}

  ngOnDestroy(): void {
  this.destroy$.next(true);
  this.destroy$.complete();
  }

}
