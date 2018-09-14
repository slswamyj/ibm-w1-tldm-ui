import {Component, OnInit} from '@angular/core';
import {MessageService} from '../message.service';

@Component({
    selector: 'app-main-component',
    templateUrl: './main-component.component.html',
    styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

    constructor(private messageService: MessageService) {
    }

    ngOnInit() {
        this.messageService.establishConnection();
    }
}
