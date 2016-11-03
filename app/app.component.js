"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var JOBS = [
    { id: 1, company: 'PNI Digital Media', title: 'Front End Developer' },
    { id: 2, company: 'Central 1', title: 'Software Specialist 2' },
    { id: 3, company: 'Pramerica', title: 'Java Developer' },
];
var Job = (function () {
    function Job() {
    }
    return Job;
}());
exports.Job = Job;
var AppComponent = (function () {
    function AppComponent() {
        this.jobList = JOBS;
        this.title = 'John Harden Portfolio';
    }
    AppComponent.prototype.onSelect = function (job) {
        this.selectedJob = job;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Testing BrowserSync</h1>\n  <div class=\"job\">\n  \t<ul class=\"job-list\">\n\t  <li *ngFor=\"let job of jobList\" (click)=\"onSelect(job)\">\n\t  \t\t<span>{{job.company}}</span>\n\t  </li>\n\t</ul>\n\t<div *ngIf=\"selectedJob\" class=\"selected-job\">\n\t\t<h2>{{selectedJob.company}}</h2>\n\t\t<p>{{selectedJob.title}}</p>\n\t</div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map