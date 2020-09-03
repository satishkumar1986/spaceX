import { Component, OnInit } from '@angular/core';
import { SpaceService } from '../shared/service/space.service';
import { Global } from '../shared/service/global';
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  allData: any;

  constructor(private _spaceService: SpaceService) { }

  ngOnInit(): void {
    this.getAllData();

  }

  getAllData() {
    this._spaceService.getAllData(Global.BASE_API_PATH).subscribe(res => {
      console.log(res);
      this.allData = res
    })
  }


  getDataYearWise(year: any) {
    //console.log(year);
    this._spaceService.getDataYearWise(Global.BASE_API_PATH + '&launch_success=true&land_success=true&launch_year=' + year).subscribe(res => {
      console.log(res);
      this.allData = res
    })
  }

  getDataSuccLaunch(status: any) {
    //console.log(year);
    this._spaceService.getDataSuccLaunch(Global.BASE_API_PATH + '&launch_success=' + status).subscribe(res => {
      console.log(res);
      this.allData = res
    })
  }

  getDataSuccLanding(status: any) {
    //console.log(year);
    this._spaceService.getDataSuccLanding(Global.BASE_API_PATH + '&launch_success=true&land_success=true' + status).subscribe(res => {
      console.log(res);
      this.allData = res
    })
  }





}
