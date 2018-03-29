"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cat_list_component_1 = require("./cat-list.component");
var cat_details_component_1 = require("./cat-details.component");
// Route Configuration
exports.catRoutes = [
    { path: 'cats', component: cat_list_component_1.CatListComponent },
    { path: 'cats/:id', component: cat_details_component_1.CatDetailsComponent }
];
//# sourceMappingURL=cat.routes.js.map