import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf(condition: boolean){
    if (condition) {
      this.vcr.createEmbeddedView(this.tr);
    }else{
      this.vcr.clear();
    }
  }
  constructor(
    private tr: TemplateRef<HTMLElement>,
    private vcr: ViewContainerRef
  ) { }


}
