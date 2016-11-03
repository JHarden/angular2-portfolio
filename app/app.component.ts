
import { Component } from '@angular/core';

const JOBS: Job[] = [
  { id: 1, company: 'PNI Digital Media', title: 'Front End Developer'  },
  { id: 2, company: 'Central 1' , title: 'Software Specialist 2'  },
  { id: 3, company: 'Pramerica', title: 'Java Developer'  },
];



export class Job {
	id: number;
	company: string;
	title: string;
}

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
	<div *ngIf="selectedJob" class="selected-job">
		<h2>{{selectedJob.company}}</h2>
		<p>{{selectedJob.title}}</p>
	</div>
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
