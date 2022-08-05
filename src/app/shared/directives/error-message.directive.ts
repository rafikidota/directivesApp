import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-message]'
})
export class ErrorMessageDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() message: string = 'Este campo es requerido';

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }
  ngOnInit(): void {
    this.setColor();
    this.setMessage();
  }
  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }
  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this.message;
  }

}
