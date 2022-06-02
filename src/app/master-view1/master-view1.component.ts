import { Component, OnInit } from '@angular/core';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-master-view1',
  templateUrl: './master-view1.component.html',
  styleUrls: ['./master-view1.component.scss']
})
export class MasterView1Component implements OnInit {
  public financialBoxOfficeRevenue: any = null;

  constructor(
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.financialService.getData('Box Office Revenue').subscribe(data => this.financialBoxOfficeRevenue = data);
  }
}
