import { Component } from '@angular/core';
import { Constants } from './config/constants';

private const nav = Constants.NAVIGATION;

@Component({
    selector: 'navigation',
    template:
    `
    <span>
        <ul class="navigation-wrapper" id="navigation-list">
            <li class="header-icon">
                <a href="#">John Harden</a>
            </li>
            <li *ngFor="let item of navigation">
                <a href="{{item.anchor}}"> {{item.name}} </a>
            </li>
        </ul>
    </span>
    `
})

export class NavigationComponent {

    navigation: any[] = nav;

}
