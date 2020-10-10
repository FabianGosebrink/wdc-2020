import {
  Directive,
  HostListener,
  ElementRef,
  EventEmitter,
  Output
} from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmDirective {
  @HostListener('click', ['$event']) onClick($event) {
    this.itemClicked();
  }

  @Output() confirmed = new EventEmitter<boolean>();

  constructor() {}

  itemClicked(): void {
    const result = confirm('Really???');

    this.confirmed.emit(result);
  }
}