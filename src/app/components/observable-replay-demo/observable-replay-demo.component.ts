import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { interval, ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'observable-replay-demo',
  templateUrl: './observable-replay-demo.component.html',
  styleUrls: ['./observable-replay-demo.component.scss']
})
export class ObservableReplayComponent implements OnInit {
  public name: string = ':)';
  private countToOnehundred: ReplaySubject<number> = null;
  public group1: any = [];
  public group2: any = [];
  public group3: any = [];
  public group4: any = [];
  public test: any = {key: 1, text: 'junk'};
  public JSON = JSON;

  constructor() {}

  ngOnInit() {
    this.startCounting();
    this.setSubscribers();    
  }

  private startCounting() {
    this.countToOnehundred = new ReplaySubject();
    for (let step = 0; step < 10; step++) {
      this.delay(1000 * step).then(() => {
        this.countToOnehundred.next(step);
        if(step === 9) {
          this.countToOnehundred.complete();
        }
      });
    }    
  }

  private delay(timer: number, val?: any) {
    return new Promise(function(resolve) { 
        setTimeout(resolve.bind(null, val), timer);
    });
 }
 
  private setSubscribers() {
    this.subscribeToCounter(this.group1)
    setTimeout(() => {this.subscribeToCounter(this.group2)}, 5000);
    setTimeout(() => {this.subscribeToCounter(this.group3)}, 10000);
    setTimeout(() => {this.subscribeToCounter(this.group4)}, 12000);
    setTimeout(()=> {this.test.junk = 1;}, 15000);
  }

  private subscribeToCounter = (group) => {
    this.countToOnehundred.subscribe(val => {    
      group.push(this.test);  
    });
  }
}
