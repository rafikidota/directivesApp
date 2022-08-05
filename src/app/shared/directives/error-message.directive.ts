import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-message]'
})
export class ErrorMessageDirective implements OnInit, OnChanges {


  htmlElement: ElementRef<HTMLElement>;
  // @Input() color: string = 'red';
  @Input() set color(value: string) {
    this.htmlElement.nativeElement.style.color = value;
  }
  // @Input() message: string = 'Este campo es requerido';
  @Input() set message(value: string) {
    this.htmlElement.nativeElement.innerText = value;
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    // this.setColor();
    // this.setMessage();
    this.setStyle();
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.message = changes['message'].currentValue;
    // this.setMessage();
    // this.setColor();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  }
  setStyle(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this.message;
  }

}
