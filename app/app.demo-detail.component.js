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
var demo_1 = require("./demo");
var DemoDetailComponent = (function () {
    function DemoDetailComponent() {
    }
    return DemoDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", demo_1.Demo)
], DemoDetailComponent.prototype, "demo", void 0);
DemoDetailComponent = __decorate([
    core_1.Component({
        selector: 'demo-detail',
        template: "\n    <div *ngIf=\"demo\" class=\"demo-content\">  \n        <h2>{{demo.title}}\n         <span class=\"line\"></span>\n         </h2>\n       \n        <p>{{demo.description}}</p>\n    \n        <a target=\"_blank\" href=\"{{demo.url}}\" class=\"demo-link\" >Start the Demo</a>\n        <a target=\"_blank\" href=\"{{demo.githubUrl}}\" class=\"github-link\">view on github</a>\n    \n    </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], DemoDetailComponent);
exports.DemoDetailComponent = DemoDetailComponent;
//# sourceMappingURL=app.demo-detail.component.js.map