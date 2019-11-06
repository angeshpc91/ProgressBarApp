import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ProgressHttpService } from './progress-http.service';
import { ProgressBarPage } from '../class/progress-bar-page';

describe('ProgressHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [ProgressHttpService]
  }));

  it('should be created', () => {
    const service: ProgressHttpService = TestBed.get(ProgressHttpService);
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    const service: ProgressHttpService = TestBed.get(ProgressHttpService);
    expect(service.getProgressBarValues).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: ProgressHttpService = TestBed.get(ProgressHttpService);
    expect(service.handleError).toBeTruthy();
   });

   it('should throw 502 error', () => {
    const service: ProgressHttpService = TestBed.get(ProgressHttpService);
    expect(service.handleError({status: 502, message: 'Bad Gateway'})).toBeTruthy();
   });
});
