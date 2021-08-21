import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CsvUploadService } from 'src/app/services/csv/csv-upload.service';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.scss']
})
export class CsvUploadComponent implements OnInit {

  studentsList = [];

  dateInMilis = Date.now();

  searchValue = "";

  @ViewChild('studentsListPaginator') paginator: MatPaginator;
  listPaginatorData: Observable<any>;
  listDataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  myControl = new FormControl();
  filteredStudents: Observable<any>;

  constructor(private csvUpload: CsvUploadService,
    private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.setFormListener();
  }

  onFileUpload(event) {
    let files = event.srcElement.files;
    let csvFile = files[0];

    this.csvUpload.processCSV(csvFile);
    this.csvUpload.jsonSuccess.subscribe((result) => {
      this.studentsList = result;
      this.setPaginator(result);
    })
  }

  setPaginator(studentsList) {
    this.listDataSource.data = studentsList;
    this.changeDetectorRef.detectChanges();
    this.listDataSource.paginator = this.paginator;
    this.listPaginatorData = this.listDataSource.connect();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.studentsList.filter(value =>
      (value.name.toLowerCase().includes(filterValue)) ||
      (value.id.toLowerCase().includes(filterValue)));
  }

  setFormListener() {
    this.filteredStudents = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  getDisplayFn() {
    return ((val) => `${val.id} - ${val.name} ${val.fathersLastName} ${val.mothersLastName}`);
  }

  printFormValue() {
    console.log(this.myControl.value);
  }

}
