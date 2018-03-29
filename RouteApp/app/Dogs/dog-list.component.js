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
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
var core_1 = require("@angular/core");
var pet_service_1 = require("../pet.service");
var DogListComponent = /** @class */ (function () {
    function DogListComponent(petService) {
        this.petService = petService;
    }
    // Load data ones componet is ready
    DogListComponent.prototype.ngOnInit = function () {
        // Pass retreived pets to the property
        this.dogs = this.petService.findPets('dog');
    };
    DogListComponent = __decorate([
        core_1.Component({
            template: "\n    <h2>Dogs</h2>\n    <p>List of dogs</p>\n    <ul class=\"demo-list-icon mdl-list\">\n      <li class=\"mdl-list__item\" *ngFor=\"let dog of dogs | async\">\n        <span class=\"mdl-list__item-primary-content\">\n            <i class=\"material-icons mdl-list__item-icon\">pets</i>\n            <a [routerLink]=\"['/dogs', dog.id.$t]\">{{dog.name.$t}}</a>\n        </span>\n      </li>\n    </ul>\n    "
        })
        // Component class implementing OnInit
        ,
        __metadata("design:paramtypes", [pet_service_1.PetService])
    ], DogListComponent);
    return DogListComponent;
}());
exports.DogListComponent = DogListComponent;
//# sourceMappingURL=dog-list.component.js.map