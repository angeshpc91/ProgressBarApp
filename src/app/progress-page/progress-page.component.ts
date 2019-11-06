import { Component, OnInit } from '@angular/core';
import { ProgressHttpService } from '../services/progress-http.service';
import { ProgressBarPage } from '../class/progress-bar-page';

@Component({
  selector: 'app-progress-page',
  templateUrl: './progress-page.component.html',
  styleUrls: ['./progress-page.component.less']
})
export class ProgressPageComponent implements OnInit {

  progressBarObj:ProgressBarPage;
  selectedVal : string ;

  constructor(
    public progressHttpService : ProgressHttpService
  ) { 
    this.selectedVal = "Progress 0";
    this,this.progressBarObj = {
      bars:[],
      buttons:[],
      limit: 0
    }
  }

  ngOnInit() {
    this.fetchProgressBarValues();
  }

  fetchProgressBarValues(){
    return this.progressHttpService.getProgressBarValues().subscribe((data: {}) => {
      this.progressBarObj.bars = data['bars'];
      this.progressBarObj.buttons = data['buttons'];
      this.progressBarObj.limit = data['limit'];
    })
  }
  
  add(buttonVal:number, progressBarArr, selectedProgress){
    this.progressBarObj = progressBarArr;
    this.selectedVal = selectedProgress;
    this.progressBarObj.bars.filter((element, i) => { 
      return this.selectedVal === "Progress "+i ? ((this.progressBarObj.bars[i] + buttonVal) <= 0 ? this.progressBarObj.bars[i] = 0 : this.progressBarObj.bars[i] += buttonVal) : 0;
    });
  }
}
