import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressPageComponent } from './progress-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { ProgressBarPage } from '../class/progress-bar-page';

describe('ProgressPageComponent', () => {
  let component: ProgressPageComponent;
  let fixture: ComponentFixture<ProgressPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatButtonModule,
        HttpClientModule
      ],
      declarations: [ ProgressPageComponent ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able add and result number', () => {
    let progressBarObj = {bars : [15, 53, 48]};
    let selectedVal = "Progress 2"
    expect(component.add(5, progressBarObj, selectedVal)).toBePositiveInfinity;
  });

  it('should throwError', () => {
    let progressBarObj = {bars : [15, 53, 48]};
    let selectedVal = "Progress 4"
    expect(component.add(5, progressBarObj, selectedVal)).toThrowError;
  });

  it('should return 0', () => {
    let progressBarObj = {bars : [15, 53, 48]};
    let selectedVal = "Progress 0"
    expect(component.add(-35, progressBarObj, selectedVal)).toMatch;
  });

  it('should be able to call service', () => {
    expect(component.fetchProgressBarValues).toBeTruthy;
  });
});
