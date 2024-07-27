import { Component, OnInit } from '@angular/core';

import { ReportService } from '../services/report.service'

@Component({
  selector: 'app-report-management',
  templateUrl: './report-management.component.html',
  styleUrls: ['./report-management.component.css']
})
export class ReportManagementComponent implements OnInit {

  isLoading = true;
  reports: any;


  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.retrieveReports()
  }


  retrieveReports() {
    this.isLoading = true;
    this.reportService.getAll()
       .subscribe(
        response => {
          this.reports = response["data"];
          this.isLoading = false;
        });
  }
}




