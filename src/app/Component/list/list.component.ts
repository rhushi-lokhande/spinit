import {
    Component,
    EventEmitter,
    Input,
    Output,
    ContentChild,
    TemplateRef,
    OnInit
} from '@angular/core';

@Component({
    selector: 'spinit-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    constructor() { }
    @Input() items: any[];
    @ContentChild(TemplateRef) templateRef: TemplateRef<any>;
    ngOnInit() {
    }
}
