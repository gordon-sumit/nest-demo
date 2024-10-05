import {Body, Controller, Get, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {EventService} from "./event.service";
import {GoogleCalendarService} from "../google-calendar/google-calendar.service";
import {ApiBody} from "@nestjs/swagger";
import axios from "axios";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from 'multer';
import { extname } from 'path';



export class EventEntity {
    summary: string;
    description: string;
    location: string;
    start: object;
    end: object;
}

@Controller('event')
export class EventController {
    constructor(private eventService: EventService) {
    }

    @Get()
    fetchEvents() {
        return this.eventService.fetchEvents();
    }

    @Post()
    @ApiBody({
        schema: {
            type: 'object',
            properties:
                {
                    summary: {type: 'string', example: 'Event title'},
                    description: {type: 'string', example: 'Event description'},
                    location: {type: 'string', example: 'Event room'},
                    start: {
                        type: 'object',
                        example: {
                            dateTime: "1985-04-30T18:30:00.000Z",
                            timeZone: "America/Los_Angeles"
                        }
                    },
                    end: {
                        type: 'object',
                        example: {
                            dateTime: "1985-04-30T18:30:00.000Z",
                            timeZone: "America/Los_Angeles"
                        }
                    }
                },
        },
    })
    createEvent(@Body() eventData: EventEntity) {
        return this.eventService.createEvent(eventData)
    }


}
