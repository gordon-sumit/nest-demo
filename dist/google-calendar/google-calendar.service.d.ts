export declare class GoogleCalendarService {
    private oauth2Client;
    constructor();
    addEvent(eventData: any): Promise<import("gaxios").GaxiosResponse<import("googleapis").calendar_v3.Schema$Event>>;
}
