import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import {count} from 'rxjs/operators';



@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy{

  private myObsSubscription: Subscription;
  constructor() { }
  public choice = 'one';
  // @ViewChild('select') select;
  // choice = this.select;


  ngOnInit(): void {
    // built-in observable
    // this.myObsSubscription = interval(1000).subscribe({ next(count) {console.log(count);}
    // });

    // Create a custom Observable
    const customIntervalObs = new Observable(observer => {
      let count = 0;
      let flag = true;
      setInterval(() => {
        // emit the value
        observer.next(count);

        if (count === 2){
          observer.complete();
        }
        if (count > 3){
          observer.error('Count is greater than 3!');
        }
        count ++;
      }, 1000);
    });

    this.myObsSubscription = customIntervalObs.subscribe( (count) => {
      console.log(count);
    },
      error => {
      console.log(error);
      alert(error.message);
      },
      () => {
      console.log('Completed!');
      });
  }

  unsubscribe(){
    this.myObsSubscription.unsubscribe();
  }
  ngOnDestroy() {
    this.myObsSubscription.unsubscribe();
  }
}
