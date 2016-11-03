
import { Component } from '@angular/core';
import { Job }   from './Job';
import { Constants } from './config/constants';

const JOBS = Constants.JOBS;

@Component({
  selector: 'my-app',
  template:
  `<h1>Testing BrowserSync</h1>
		<div class="job">
			<ul class="job-list">
			<li *ngFor="let job of jobList" (click)="onSelect(job)">
					<span>{{job.company}}</span>
			</li>
		</ul>
		<my-job-detail [job]="selectedJob"></my-job-detail>
  </div>
  `
})


export class AppComponent {

	jobList = JOBS;
  	title = 'John Harden Portfolio';
	selectedJob: Job;

	  onSelect(job: Job) : void{
		  this.selectedJob = job;
	  }

}
