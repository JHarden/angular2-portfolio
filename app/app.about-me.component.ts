import { Component } from '@angular/core';
import { Constants } from './config/constants';

const about = Constants.aboutMe;

@Component({
    selector: 'about-me',
    template:
    `
    <section id="about-me">
    <h2>About Me</h2>
    <p>{{about}}</p>

    </section>    
    `
})

export class AboutMeComponent {

    name: string;
    about: string = about;

}
