import { Injectable } from '@angular/core';
import { DataService } from './data.service'

const path = '/api/v1/reports/';

@Injectable({
  providedIn: 'root'
})
export class ReportService {


  constructor(private dataService: DataService) { }

  getAll() {
    return this.dataService.get(path);
  }
  
}
