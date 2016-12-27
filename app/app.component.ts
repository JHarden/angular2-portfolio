
import { Component } from '@angular/core';
import { Job } from './Job';
import { Constants } from './config/constants';

const JOBS = Constants.JOBS;
const TITLE = Constants.title;

@Component({
	selector: 'my-app',
	template:
	`
	<h1>{{title}}</h1>
	<about-me></about-me>
	<section class="job">
		<ul class="job-list">
		<li *ngFor="let job of jobList" (click)="onSelect(job)">
				<span>{{job.company}}</span>
		</li>
	</ul>
	<my-job-detail [job]="selectedJob"></my-job-detail>
	</section>
  `
})

export class AppComponent {

	jobList = JOBS;
	title = TITLE;
	selectedJob: Job;

	onSelect(job: Job): void {
		this.selectedJob = job;
	}

}
