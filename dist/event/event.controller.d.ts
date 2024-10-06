import { EventService } from "./event.service";
export declare class EventEntity {
    summary: string;
    description: string;
    location: string;
    start: object;
    end: object;
}
export declare class EventController {
    private eventService;
    constructor(eventService: EventService);
    fetchEvents(): Promise<any>;
    createEvent(eventData: EventEntity): Promise<any>;
}
