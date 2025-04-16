import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent {
  @Input() nombre: string = '';
  @Output() sumar = new EventEmitter<number>();

  sumarUno() {
    this.sumar.emit(1);
  }
}