import {Injectable} from '@nestjs/common';
import {EventModel} from "../models/event.model";
import {InjectModel} from "@nestjs/sequelize";
import {GoogleCalendarService} from "../google-calendar/google-calendar.service";
import {logging} from "googleapis/build/src/apis/logging";

@Injectable()
export class EventService {
    constructor(@InjectModel(EventModel) private eventModel: typeof EventModel,
                private googleService: GoogleCalendarService) {
    }

    async fetchEvents():Promise<any>{
        return this.eventModel.findAll();
    }

    async createEvent(eventData): Promise<any> {
        try {
            return await this.googleService.addEvent(eventData).then(()=>{
                eventData.title = eventData.summary
                eventData.start = eventData.start.dateTime
                eventData.end = eventData.end.dateTime
                this.eventModel.create(eventData)
            })
        } catch (e) {
            return e
        }
    }

}
