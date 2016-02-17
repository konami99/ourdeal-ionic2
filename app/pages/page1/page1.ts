import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Page} from 'ionic-framework/ionic';
import {Deal} from '../../mocks/deal'
import {DealService} from '../../services/deal.service'


@Page({
  templateUrl: 'build/pages/page1/page1.html',
  providers: [DealService]
})

export class Page1 implements OnInit {
  public deals: Deal[];  
    
  constructor(private dealService: DealService) {

  }
  
  getDeals(){
      this.dealService.getHeroes().then(deals=>this.deals = deals);
  }
  
  ngOnInit(){
      this.getDeals();
  }
}
