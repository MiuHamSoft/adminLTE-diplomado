import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.http.retrieveData("").subscribe(
      (result) => {
        console.log(result)
      });
  }

}
