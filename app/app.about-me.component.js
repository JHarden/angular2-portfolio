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
var about = constants_1.Constants.aboutMe;
var AboutMeComponent = (function () {
    function AboutMeComponent() {
        this.about = about;
    }
    return AboutMeComponent;
}());
AboutMeComponent = __decorate([
    core_1.Component({
        selector: 'about-me',
        template: "\n    <section id=\"about-me\">\n    <h2>About Me</h2>\n    <p>{{about}}</p>\n\n    </section>    \n    "
    }),
    __metadata("design:paramtypes", [])
], AboutMeComponent);
exports.AboutMeComponent = AboutMeComponent;
//# sourceMappingURL=app.about-me.component.js.map