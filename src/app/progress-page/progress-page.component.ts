import { Component, OnInit } from '@angular/core';
import { ProgressHttpService } from '../services/progress-http.service';
import { ProgressBarPage } from '../class/progress-bar-page';

@Component({
  selector: 'app-progress-page',
  templateUrl: './progress-page.component.html',
  styleUrls: ['./progress-page.component.less']
})
export class ProgressPageComponent implements OnInit {

  progressBarObj = null;
  selectedVal : string ;

  constructor(
    public progressHttpService : ProgressHttpService
  ) { }

  ngOnInit() {
    // this.progressBarObj = {"buttons":[47,40,-10,-20],"bars":[13,69,27, -89],"limit":150};
    this.fetchProgressBarValues();

    this.selectedVal = "Progress 0";
  }

  fetchProgressBarValues(){
    return this.progressHttpService.getProgressBarValues().subscribe((data: {}) => {
      console.log(data);
      this.progressBarObj = data;
    })
  }
  
  add(buttonVal:number){
    this.progressBarObj.bars.filter((element, i) => { 
      return this.selectedVal === "Progress "+i ? ((this.progressBarObj.bars[i] + buttonVal) <= 0 ? this.progressBarObj.bars[i] = 0 : this.progressBarObj.bars[i] += buttonVal) : 0;
   });
  }

}
