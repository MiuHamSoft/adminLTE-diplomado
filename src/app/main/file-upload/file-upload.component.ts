import { Component, OnInit } from '@angular/core';
import { FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  public files: NgxFileDropEntry[] = [];

  public filesToUpload = [];

  constructor() { }

  ngOnInit(): void {
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files.concat(...[this.files]);
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          let reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = () => {
            let auxFile = reader.result.toString();
            let regex = /data:(.*);base64,/;
            console.log(auxFile)
            let auxObj = {
              type: file.type,
              data: auxFile.replace(regex, ""),
              name: file.name
            }
            this.filesToUpload.push(auxObj);
          };
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }

  clearFilesArray() {
    this.files = [];
  }

  uploadFiles() {
    console.log(this.filesToUpload)
  }

}
