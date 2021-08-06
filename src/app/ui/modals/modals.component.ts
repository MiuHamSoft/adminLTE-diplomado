import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  showToastrSuccess() {
    this.toastr.success("Mensaje de éxito", "Acción completada");
  }

  showToastrInfo() {
    this.toastr.info("Mensaje informativo", "Info");
  }

}
