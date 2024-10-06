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
exports.CabsController = void 0;
const common_1 = require("@nestjs/common");
const cabs_service_1 = require("./cabs.service");
let CabsController = class CabsController {
    constructor(cabService) {
        this.cabService = cabService;
    }
    getAllCabs() {
        return this.cabService.getAllCabs();
    }
};
exports.CabsController = CabsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CabsController.prototype, "getAllCabs", null);
exports.CabsController = CabsController = __decorate([
    (0, common_1.Controller)('cabs'),
    __metadata("design:paramtypes", [cabs_service_1.CabsService])
], CabsController);
//# sourceMappingURL=cabs.controller.js.map