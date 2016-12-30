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
var core_1 = require("@angular/core");
var constants_1 = require("./config/constants");
var JOBS = constants_1.Constants.JOBS;
var TITLE = constants_1.Constants.title;
var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.jobList = JOBS;
        this.title = TITLE;
        this.deselectAll = function () {
            console.log('deselectAll');
            for (var _i = 0, _a = _this.jobList; _i < _a.length; _i++) {
                var job = _a[_i];
                job.state = 'void';
            }
        };
    }
    AppComponent.prototype.onSelect = function (job) {
        this.deselectAll();
        job.state = 'active';
        this.selectedJob = job;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\t<h1>{{title}}</h1>\n\t<section>\n\t<about-me></about-me>\n\t</section>\n\t<section class=\"job\">\n\t\t<ul class=\"job-list\">\n\t\t<li *ngFor=\"let job of jobList\" (click)=\"onSelect(job)\" [ngClass]=\"{'selected' : selectedJob === job}\">\n\t\t\t\t<span>{{job.company}}</span>\n\t\t</li>\n\t</ul>\n\t</section>\n\t<section class=\"job-wrapper\">\n\t\t<article *ngFor=\"let job of jobList\" class=\"job-details\">\n\t\t\t<my-job-detail [job]=\"job\"></my-job-detail>\n\t\t</article>\n\t</section>\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map