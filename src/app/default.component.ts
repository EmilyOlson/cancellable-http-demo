import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
    templateUrl: './default.template.html',
    selector: 'app-root',
})
export class DefaultComponent implements OnInit {
    constructor(private readonly stateService: StateService) {
    }

    ngOnInit() {
        this.stateService.go('default.home');
    }
}