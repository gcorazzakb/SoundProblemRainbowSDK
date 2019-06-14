import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MessageService {

  private subject = new Subject<any>();

  constructor() { }

  sendMessage(conversationID: string) {
    this.subject.next(conversationID);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

}
