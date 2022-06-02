import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';
import { TravelAppService } from '../services/travel-app.service';

@Component({
  selector: 'app-master-view2',
  templateUrl: './master-view2.component.html',
  styleUrls: ['./master-view2.component.scss']
})
export class MasterView2Component implements OnInit {
  public northwindCategories: any = null;
  public travelAppImageSet2: any = null;

  constructor(
    private northwindService: NorthwindService,
    private travelAppService: TravelAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Categories').subscribe(data => this.northwindCategories = data);
    this.travelAppService.getData('Image Set 2').subscribe(data => this.travelAppImageSet2 = data);
  }
}
