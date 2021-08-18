import { Component, OnInit } from '@angular/core';
import { PDFProgressData } from 'ng2-pdf-viewer';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {

  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor() { }

  ngOnInit(): void {
  }

  onLoadComplete() {
    console.log("Load complete")
  }

  onError(event) {
    console.log(event)
  }

  onProgress(progressData: PDFProgressData) {
    console.log(progressData.loaded)
  }

  downloadPDF() {
    FileSaver.saveAs(this.pdfSrc, "ejemplo.pdf")
  }

}
