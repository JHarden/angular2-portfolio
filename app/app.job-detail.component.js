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
var Job_1 = require("./Job");
var JobDetailComponent = (function () {
    function JobDetailComponent() {
    }
    return JobDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Job_1.Job)
], JobDetailComponent.prototype, "job", void 0);
JobDetailComponent = __decorate([
    core_1.Component({
        selector: 'my-job-detail',
        template: "\n    <div *ngIf=\"job\" class=\"selected-job\" [@jobState]=\"job.state\">\n        <h2>{{job.company}}</h2>\n        <h3>{{job.title}}</h3>\n        <p>{{job.description}}</p>   \n        <p>\n            <a href=\"{{job.url}}\" target=\"_blank\">{{job.url}}</a>\n        </p>         \n    </div>\n    ",
        animations: [
            core_1.trigger('jobState', [
                core_1.state('active', core_1.style({ opacity: 1, transform: 'translateX(0)' })),
                core_1.transition('void => *', [
                    core_1.style({
                        opacity: 0,
                        transform: 'translateX(-100%)'
                    }),
                    core_1.animate('0.4s ease-in')
                ]),
                core_1.transition('* => void', [
                    core_1.animate('0.4s 10 ease-out', core_1.style({
                        opacity: 0,
                        transform: 'translateX(100%)'
                    }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], JobDetailComponent);
exports.JobDetailComponent = JobDetailComponent;
//# sourceMappingURL=app.job-detail.component.js.map