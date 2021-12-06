import { Component, OnInit } from '@angular/core';
import * as model from "../api/models";
import * as api from "../api/services";

@Component({
  selector: 'app-mrc',
  templateUrl: './mrc.component.html',
  styleUrls: ['./mrc.component.css']
})
export class MrcComponent implements OnInit {

  mrcList?: model.GeneralMerchantsList

  constructor(private mrcService: api.GeneralMerchantsService) { }

  ngOnInit(): void {
    this.getMRCs()
  }

  getMRCs(): void {
    this.mrcService.generalMerchantsGetAll().subscribe(mrcList => (this.mrcList = mrcList))
  }

}
