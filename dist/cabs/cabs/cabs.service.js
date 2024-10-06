"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CabsService = void 0;
const common_1 = require("@nestjs/common");
let CabsService = class CabsService {
    getAllCabs() {
        return [
            {
                cabId: 101,
                name: 'maruti-desire',
                title: 'Maruti Suzuki Desire'
            },
            {
                cabId: 102,
                name: 'maruti-brezza',
                title: 'Maruti Suzuki Brezza'
            },
            {
                cabId: 103,
                name: 'maruti-alto',
                title: 'Maruti Suzuki Alto'
            },
            {
                cabId: 104,
                name: 'maruti-swift',
                title: 'Maruti Suzuki Swift'
            }
        ];
    }
};
exports.CabsService = CabsService;
exports.CabsService = CabsService = __decorate([
    (0, common_1.Injectable)()
], CabsService);
//# sourceMappingURL=cabs.service.js.map