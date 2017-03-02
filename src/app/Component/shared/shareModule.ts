
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
import { Component } from '@angular/core';


@Directive({
    selector: '[expTemplateLoader]'
})
export class TemplateLoderDirective implements OnInit {
    @Input('expTemplateLoader') templateRef: TemplateRef<any>;
    @Input() item: any;
    constructor(private _vcr: ViewContainerRef) { }

    ngOnInit() {
        let view = this._vcr.createEmbeddedView(this.templateRef, {
            '\$implicit': this.item
        });
    }
}

@Directive({
    selector: '[expTemplate]',
})
export class ExpTemplateDirective {
    constructor(public eRef: ElementRef) { }
}

@NgModule({
    imports: [],
    exports: [TemplateLoderDirective, ExpTemplateDirective],
    declarations: [TemplateLoderDirective, ExpTemplateDirective]
})
export class SharedModule { }