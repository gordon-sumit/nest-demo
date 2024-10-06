import { EventModel } from "../models/event.model";
import { GoogleCalendarService } from "../google-calendar/google-calendar.service";
export declare class EventService {
    private eventModel;
    private googleService;
    constructor(eventModel: typeof EventModel, googleService: GoogleCalendarService);
    fetchEvents(): Promise<any>;
    createEvent(eventData: any): Promise<any>;
}
