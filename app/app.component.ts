
import { Component } from '@angular/core';
import { Job } from './Job';
import { DemoComponent } from '../app.demo.component';
import { Constants } from './config/constants';

const JOBS = Constants.JOBS;
const TITLE = Constants.title;
const DEMOS = Constants.DEMOS;

@Component({
	selector: 'my-app',
	template:
	`
	<div class="app-container">

		<navigation></navigation>

		<h1>{{title}}</h1>

		<section id="about">
			<about-me></about-me>
		</section>

		<section class="demo-wrapper" id="demos">
			<div class="demos" *ngFor="let demo of demoList">
				<demo-detail [demo]="demo"></demo-detail>
			</div>
		</section>

		<section class="job" id="work">
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


	</div>
  `
})

export class AppComponent {

	jobList: Job[] = JOBS;
	demoList: Demo[] = DEMOS;
	title = TITLE;
	selectedJob: Job;

	onSelect(job: Job): void {
		this.deselectAll();
		job.state = 'active';
		this.selectedJob = job;
	}

	private deselectAll = () => {

		for(let job of this.jobList){
			job.state = 'void';
		}
	}
}
