import { Component } from '@angular/core';
import { Constants } from './config/constants';

const about = Constants.aboutMe;

@Component({
    selector: 'about-me',
    template:
    `
    <div class="about-content">
        <h2>About Me</h2>
        <p>{{about}}</p>
    </div>
    `
})

export class AboutMeComponent {

    name: string;
    about: string = about;

}
