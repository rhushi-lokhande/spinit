import {
    AfterViewInit,
    Directive,
    EventEmitter,
    Input,
    NgModule,
    OnInit,
    Output,
    TemplateRef,
    ViewContainerRef,
    ElementRef
} from '@angular/core';

@Directive({
  selector: '[spinitTemplateLoder]'
})
export class TemplateLoderDirective {

  @Input('spinitTemplateLoder') templateRef: TemplateRef<any>;
  @Input() item: any;
  constructor(private _vcr: ViewContainerRef) { }

  ngOnInit() {
    let view = this._vcr.createEmbeddedView(this.templateRef, {
      '\$implicit': this.item
    });
  }

}
