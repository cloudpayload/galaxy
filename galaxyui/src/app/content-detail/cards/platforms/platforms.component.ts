import { Component, Input, OnInit } from '@angular/core';

import { CardConfig } from 'patternfly-ng/card/basic-card/card-config';
import { Platform } from '../../../resources/platforms/platform';

@Component({
    selector: 'card-platforms',
    templateUrl: './platforms.component.html',
    styleUrls: ['./platforms.component.less'],
})
export class CardPlatformsComponent implements OnInit {
    // Used to track which component is being loaded
    componentName = 'CardPlatformsComponent';

    constructor() {}

    @Input()
    platforms: Platform[];

    config: CardConfig;

    ngOnInit() {
        this.config = {
            titleBorder: true,
            topBorder: true,
        } as CardConfig;
    }
}
