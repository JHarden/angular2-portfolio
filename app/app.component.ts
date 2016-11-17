
import { Component } from '@angular/core';
import { Job } from './Job';
import { Constants } from './config/constants';

const JOBS = Constants.JOBS;

@Component({
	selector: 'my-app',
	template:
	`
	<h1>John Harden's Portfolio</h1>
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
	title = 'John Harden Portfolio';
	selectedJob: Job;

	onSelect(job: Job): void {
		this.selectedJob = job;
	}

}
