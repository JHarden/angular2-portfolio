import { Component, Input } from '@angular/core';
import { Job } from './Job';

@Component({
    selector: 'my-job-detail',
    template:
    `
    <section>
        <div *ngIf="job" class="selected-job">
			<h2>{{job.company}}</h2>
			<h3>{{job.title}}</h3>
            <p>{{job.description}}</p>   
            <p>
                <a href="{{job.url}}" target="_blank">{{job.url}}</a>
            </p>         
		</div>
    </section>
    `
})


export class JobDetailComponent {

    @Input() job: Job;

}