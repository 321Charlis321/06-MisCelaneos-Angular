import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  alerta: any = 'alert-danger';
  // tslint:disable-next-line: ban-types
  propiedades: any = {
    danger: false
  };
  loading = false;

  constructor() { }

  ngOnInit() {
  }
  ejecutar() {
  this.loading = true;
  setTimeout(() => {
    this.loading = false;

  }, 3000);
  }

}
