import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'reusable-timer',
  templateUrl: './reusable-timer.component.html',
  styleUrls: ['./reusable-timer.component.css']
})
export class ReusableTimerComponent implements OnInit {

  timer: Observable<number>;

  constructor() { }

  ngOnInit() {
    this.timer = interval(1000);
  }
}
