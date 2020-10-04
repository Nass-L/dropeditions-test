import { Component, OnInit } from '@angular/core';
import { TickerService } from '../../services/ticker.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-body-list',
  templateUrl: './body-list.component.html',
  styleUrls: ['./body-list.component.css']
})
export class BodyListComponent implements OnInit {
 
  tickersList : any = [];
  tickerSubscription: Subscription;


  constructor(private tickerService: TickerService) {

   }

  ngOnInit(): void {
    //subscribe to object observale
    this.tickerSubscription = this.tickerService.tickersSubject.subscribe(
      (tickers: any[]) => {
        this.tickersList= tickers;
      }
    );
    this.tickerService.emitTickerSubject();

  }
  

}
