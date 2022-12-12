import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { MessageDTO } from '../../dto/message.dto';
import { EmailService } from '../../service/email.service';
import { MessageFolderEnum } from '../utils/message.folder.enum';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit, OnDestroy {

  sentEmails$ : Observable<MessageDTO[]>;
  destroy$: Subject<boolean> = new Subject<boolean>();
  title: string = "Sent folder"
  
  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.emailService.browseAll();
    this.sentEmails$ = this.emailService.messages.pipe(map(
      (messages) => {
        return messages.filter(
          (message) => 
             { return message.Folder === MessageFolderEnum.SENT_FOLDER }
          )
         }),takeUntil(this.destroy$))
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
