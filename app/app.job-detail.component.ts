import { 
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate 
} from '@angular/core';

import { Job } from './Job';

@Component({
    selector: 'my-job-detail',
    template:
    `
    <div *ngIf="job" class="selected-job" [@jobState]="job.state">
        <h2>{{job.company}}</h2>
        <h3>{{job.title}}</h3>
        <p>{{job.description}}</p>   
        <p>
            <a href="{{job.url}}" target="_blank">{{job.url}}</a>
        </p>         
    </div>
    `
    ,
    animations: [
        trigger('jobState', [
            state('active', style({opacity: 1, transform: 'translateX(0)'})),
            transition('void => *', [
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            animate('0.4s ease-in')
            ]),
            transition('* => void', [
            animate('0.4s 10 ease-out', style({
                opacity: 0,
                transform: 'translateX(100%)'
            }))
            ])
        ])
    ]
})


export class JobDetailComponent {

    @Input() job: Job;

}