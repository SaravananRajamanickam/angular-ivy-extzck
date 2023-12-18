import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { IMessage } from './app.component';

@Injectable({ providedIn: 'root' })
export default class AppService {
  query(): Observable<IMessage> {
    const response = {
      messages: [
        {
          text: 'Hi there, 👋 Welcome to ACL Digital!',
        },
        {
          text: 'Please click the below link to fill out the required details and     submit.',
        },
        {
          text: 'https://www.acldigital.com/"',
        },
      ],
    };
    return from(response.messages);
  }
}
