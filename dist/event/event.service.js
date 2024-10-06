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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventService = void 0;
const common_1 = require("@nestjs/common");
const event_model_1 = require("../models/event.model");
const sequelize_1 = require("@nestjs/sequelize");
const google_calendar_service_1 = require("../google-calendar/google-calendar.service");
let EventService = class EventService {
    constructor(eventModel, googleService) {
        this.eventModel = eventModel;
        this.googleService = googleService;
    }
    async fetchEvents() {
        return this.eventModel.findAll();
    }
    async createEvent(eventData) {
        try {
            return await this.googleService.addEvent(eventData).then(() => {
                eventData.title = eventData.summary;
                eventData.start = eventData.start.dateTime;
                eventData.end = eventData.end.dateTime;
                this.eventModel.create(eventData);
            });
        }
        catch (e) {
            return e;
        }
    }
};
exports.EventService = EventService;
exports.EventService = EventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(event_model_1.EventModel)),
    __metadata("design:paramtypes", [Object, google_calendar_service_1.GoogleCalendarService])
], EventService);
//# sourceMappingURL=event.service.js.map