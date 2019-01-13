import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
    @Input() multy = false;
    @Input() set options(data) {
        console.log(data);
        if (this.multy) {} else {
            this.current = data.current;
            this.list = data.list;
        }
    }
    @Output() whenChange: EventEmitter<string> = new EventEmitter<string>();
    private current: string | string[];
    private list: string[];
    constructor() { }
    select(current: string) {
        console.log(current);
        this.whenChange.emit(current);
    }
    ngOnInit() {
    }
}
