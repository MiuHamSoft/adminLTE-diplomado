import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/services/http/http.service';
import { LoadingService } from 'src/app/services/loading/loading.service';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})

export class TablesComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'edad', 'genero'];
  dataSource = null;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpService,
    private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.loadingService.showLoading();
    this.http.retrieveData("").subscribe(
      (result) => {
        this.dataSource = new MatTableDataSource(result.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        this.loadingService.hideLoading();
      });
  }

}
