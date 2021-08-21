import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvUploadService {
  studentsList = [];

  private confirmation = new Subject<any>();
  jsonSuccess = this.confirmation.asObservable();

  constructor(private parser: Papa,
    private toast: ToastrService) { }

  processCSV(file: File) {
    this.studentsList = [];
    let totalElements = 0

    this.parser.parse(file, {
      header: true,
      delimiter: ",",
      beforeFirstChunk: (chunk) => {
        var rows = chunk.split(/\r\n|\r|\n/);
        rows[0] = this.transformHeader(rows[0]);

        return rows.join("\r\n");
      },
      step: (row) => {
        totalElements++;

        if (row.errors.length > 0) {
          let message = `${row.errors[0].message} - On row: ${row.errors[0].row + 1}`;
          this.showWarning(message);

          return;
        }

        this.studentsList.push(row.data);
      },
      complete: () => {
        if (this.studentsList.length == totalElements) {
          this.confirmation.next(this.studentsList);
        }
      }
    });
  }

  showWarning(message) {
    this.toast.warning(message);
  }

  transformHeader(header) {
    let headers = header.split(",");

    headers.forEach((item, index, array) => {
      array[index] = this.modifyHeaderNames(item);
    });

    return headers;
  }

  modifyHeaderNames(header) {
    switch (header) {
      case "matrícula":
        return "id";

      case "nombre":
        return "name";

      case "apellido_paterno":
        return "fathersLastName";

      case "apellido_materno":
        return "mothersLastName";

      case "edad":
        return "age";

      case "género":
        return "gender";
    }
  }
}
