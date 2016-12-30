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
var nav = constants_1.Constants.NAVIGATION;
var NavigationComponent = (function () {
    function NavigationComponent() {
        this.navigation = nav;
    }
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    core_1.Component({
        selector: 'navigation',
        template: "\n    <span>\n        <ul class=\"navigation-wrapper\" id=\"navigation-list\">\n            <li class=\"header-icon\">\n                <a href=\"#\">John Harden</a>\n            </li>\n            <li *ngFor=\"let item of navigation\">\n                <a href=\"{{item.anchor}}\"> {{item.name}} </a>\n            </li>\n        </ul>\n    </span>\n    "
    }),
    __metadata("design:paramtypes", [])
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=app.navigation.component.js.map