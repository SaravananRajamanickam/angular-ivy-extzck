import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  concatMap,
  delay,
  scan,
  share,
  skipLast,
  startWith,
} from 'rxjs/operators';
import AppService from './app.service';

export interface IChatResponse {
  messages: Observable<IMessage>[];
}
export interface IMessage {
  text: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text$ = this.appService.query().pipe(
    concatMap(({ text }) => {
      const share$ = of(text).pipe(delay(1000), share());
      return share$.pipe(delay(1000), startWith(share$), skipLast(1));
    }),
    scan((arr, v) => [...arr, v], [])
  );

  constructor(private appService: AppService) {}
}
