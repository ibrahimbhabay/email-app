import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MessageDTO } from '../../dto/message.dto';
import { EmailService } from '../../service/email.service';
import { MessageFolderEnum } from '../utils/message.folder.enum';

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.scss']
})
export class ComposerComponent implements OnInit {

  emailComposeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ){ }

  ngOnInit(): void {
    this.emailComposeForm = this.fb.group({

      From: [null, [Validators.required, Validators.email]],
      To: [null, [Validators.required, Validators.minLength(4)]],
      Subject: [null, []],
      TextBody: [null, []],
      });
  }

  sendEmail = () => {
    console.dir(   this.emailComposeForm.value)
    let messageBody: MessageDTO = this.emailComposeForm.value;
    messageBody.Folder = MessageFolderEnum.SENT_FOLDER;
    this.emailService.send(messageBody);
  }

}
