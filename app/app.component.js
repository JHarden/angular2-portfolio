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
var constants_1 = require('./config/constants');
var JOBS = constants_1.Constants.JOBS;
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
            template: "<h1>Testing BrowserSync</h1>\n\t\t<div class=\"job\">\n\t\t\t<ul class=\"job-list\">\n\t\t\t<li *ngFor=\"let job of jobList\" (click)=\"onSelect(job)\">\n\t\t\t\t\t<span>{{job.company}}</span>\n\t\t\t</li>\n\t\t</ul>\n\t\t<my-job-detail [job]=\"selectedJob\"></my-job-detail>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map