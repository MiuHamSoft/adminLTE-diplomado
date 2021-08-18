import { Component, OnInit } from '@angular/core';
import { ExcelExampleService } from '../services/documents/excel-example.service';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'app-excel-export',
  templateUrl: './excel-export.component.html',
  styleUrls: ['./excel-export.component.scss']
})
export class ExcelExportComponent implements OnInit {

  isDataLoaded: boolean = false;
  studentsList = [];

  constructor(private excelService: ExcelExampleService,
    private http: HttpService) { }

  ngOnInit(): void {
    this.getStudentsList();
  }

  getStudentsList() {
    this.http.retrieveData("").subscribe(
      (result) => {
        this.studentsList = result.data;

        this.isDataLoaded = true;
      });
  }

  generateExcel() {
    this.excelService.getExcel(this.studentsList);
  }

}
