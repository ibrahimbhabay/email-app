import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MessageDTO } from '../dto/message.dto';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private _messages = new BehaviorSubject<MessageDTO[]>([]);
  private baseUrl = environment.emailPostmarkApi;
  private inMemoryDataStorage: { messages: MessageDTO[] } = { messages: [] };
  constructor(private http: HttpClient) { }

  get messages() {
    return this._messages.asObservable();
  }

  browseAll() {
    try{
      this.http.get(`${this.baseUrl}/fetch-all`).subscribe(
        data => {
          this.inMemoryDataStorage.messages = (data) as MessageDTO[];
          this._messages.next(Object.assign({}, this.inMemoryDataStorage).messages);
        }
      );
    } catch(error){
      console.log('Unable to load messages')
      console.log(error)
    }

  }

  send(message: MessageDTO) {
    const headers = { 'content-type': 'application/json'};
    try{
      this.http
      .post<MessageDTO>(`${this.baseUrl}/send`, JSON.stringify(message),{'headers':headers})
      .subscribe(
        data => {
          this.inMemoryDataStorage.messages.push(data);
          this._messages.next(Object.assign({}, this.inMemoryDataStorage).messages);
        }
      );
    }
    catch(error){
        console.log('Unable to load messages')
        console.log(error)
    }
  }
}

