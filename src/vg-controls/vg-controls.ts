import {Component} from 'angular2/core';

import {VgAPI} from '../services/vg-api';

@Component({
    selector: 'vg-controls',
    template: `<ng-content></ng-content>`,
    styles: [`
        :host {
            position: absolute;
            display: flex;
            width: 100%;
            height: 50px;
            z-index: 300;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
        }

        :host vg-time-display {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            display: flex;
            justify-content: center;
            height: 50px;
            width: 60px;
            cursor: pointer;
            color: white;
            line-height: 50px;
            pointer-events: none;
        }
    `]
})
export class VgControls {
    constructor(public API:VgAPI) {

    }
}