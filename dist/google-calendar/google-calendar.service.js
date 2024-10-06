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
exports.GoogleCalendarService = void 0;
const common_1 = require("@nestjs/common");
const googleapis_1 = require("googleapis");
const fs = require("fs");
const process = require("process");
let GoogleCalendarService = class GoogleCalendarService {
    constructor() {
        const key = JSON.parse(fs.readFileSync("nestjs-436911-d509d0a71f6b.json", 'utf8'));
        this.oauth2Client = new googleapis_1.google.auth.JWT({
            email: key.client_email,
            key: key.private_key,
            scopes: ['https://www.googleapis.com/auth/calendar'],
        });
    }
    async addEvent(eventData) {
        const calendar = googleapis_1.google.calendar({
            version: 'v3', auth: this.oauth2Client
        });
        return await calendar.events.insert({
            calendarId: process.env.CALENDARID,
            requestBody: eventData,
        });
    }
};
exports.GoogleCalendarService = GoogleCalendarService;
exports.GoogleCalendarService = GoogleCalendarService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GoogleCalendarService);
//# sourceMappingURL=google-calendar.service.js.map