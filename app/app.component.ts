
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
	<section>
	<about-me></about-me>
	</section>
	<section class="job">
		<ul class="job-list">
		<li *ngFor="let job of jobList" (click)="onSelect(job)" [ngClass]="{'selected' : selectedJob === job}">
				<span>{{job.company}}</span>
		</li>
	</ul>
	</section>
	<section class="job-wrapper">
		<article *ngFor="let job of jobList" class="job-details">
			<my-job-detail [job]="job"></my-job-detail>
		</article>
	</section>
  `
})

export class AppComponent {

	jobList: Job[] = JOBS;
	title = TITLE;
	selectedJob: Job;

	onSelect(job: Job): void {
		this.deselectAll();
		job.state = 'active';
		this.selectedJob = job;
	}

	private deselectAll = () => {

		console.log('deselectAll');
		for(let job of this.jobList){

			job.state = 'void';

		}
	}

}
