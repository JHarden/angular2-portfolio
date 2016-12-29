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
    <section>
        <div *ngIf="job" class="selected-job" [@jobState]="job.state">
			<h2>{{job.company}}</h2>
			<h3>{{job.title}}</h3>
            <p>{{job.description}}</p>   
            <p>
                <a href="{{job.url}}" target="_blank">{{job.url}}</a>
            </p>         
		</div>
    </section>
    `
    ,
    animations: [
        trigger('jobState', [
            state('inactive', style({
                backgroundColor: '#EE0000',
            })),
            state('active',   style({
                backgroundColor: '#EBEBEB',
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]

})


export class JobDetailComponent {

    @Input() job: Job;

}