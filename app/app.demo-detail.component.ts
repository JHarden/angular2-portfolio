import { 
    Component,
    Input
 } from '@angular/core';

import { Demo } from './demo';

@Component({
    selector: 'demo-detail',
    template:
    `
    <div *ngIf="demo" class="demo-content">
        <h2>{{demo.title}}
         <span class="line"></span>
         </h2>
       
        <p>{{demo.description}}</p>
    
        <a target="_blank" href="{{demo.url}}" class="demo-link" >Start the Demo</a>
        <a target="_blank" href="{{demo.githubUrl}}" class="github-link">view on github</a>
    
    </div>
    `
})

export class DemoDetailComponent {

    @Input() demo: Demo;

}
