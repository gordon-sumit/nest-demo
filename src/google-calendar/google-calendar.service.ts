import {Injectable} from '@nestjs/common';
import {google} from "googleapis";
import * as fs from "fs";
import * as process from "process";

@Injectable()
export class GoogleCalendarService {
    private oauth2Client;

    constructor() {
        // const key = JSON.parse(fs.readFileSync("nestjs-436911-d509d0a71f6b.json", 'utf8'));
        // this.oauth2Client = new google.auth.JWT({
        //     email: key.client_email,
        //     key: key.private_key,
        //     scopes: ['https://www.googleapis.com/auth/calendar'],
        // })
    }

    async addEvent(eventData) {
        const calendar = google.calendar({
            version: 'v3', auth: this.oauth2Client
        });
        return await calendar.events.insert({
            calendarId: process.env.CALENDARID,
            requestBody: eventData,
        });
    }
}
