"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dog_routes_1 = require("./dogs/dog.routes");
var cat_routes_1 = require("./cats/cat.routes");
// Route Configuration
exports.routes = [
    {
        path: '',
        redirectTo: '/dogs',
        pathMatch: 'full'
    }
].concat(cat_routes_1.catRoutes, dog_routes_1.dogRoutes);
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map