import {Component, Input} from '@angular/core';
import { Job } from './Job';

@Component({
    selector: 'my-job-detail',
    template:
    `
    <section>
        <h2>{{job}}</h2>
        <p>
            This is the description of the Job
        <p>
        <div *ngIf="job" class="selected-job">
			<h2>{{job.company}}</h2>
			<p>{{job.title}}</p>
		</div>
    </section>
    `
})


export class JobDetailComponent {

    @Input()
    job: Job;
}