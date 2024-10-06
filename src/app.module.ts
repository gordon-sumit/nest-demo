import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {SchoolController} from './schools/school/school.controller';
import {SchoolService} from './schools/school/school.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {UserModel} from "./models/user.model";
import {SchoolUserModel} from "./models/schoolUser.model";
import {SchoolModel} from "./models/school.model";
import {Teams} from "./models/team.model";
import {UserTeams} from "./models/userTeam.model";
import {Sports} from "./models/sport.model";
import {SportController} from './sports/sport/sport.controller';
import {SportService} from './sports/sport/sport.service';
import {AuthModule} from './auth/auth.module';
import {EventController} from './event/event.controller';
import {EventService} from './event/event.service';
import {EventModel} from "./models/event.model";
import {GoogleCalendarService} from './google-calendar/google-calendar.service';
import {VegetableController} from './vegetable/vegetable.controller';
import {SlackService} from './slack/slack.service';
import {VegetableModule} from './vegetable/vegetable.module';
import {VegetableModel} from "./models/vegetable.model";
import { join } from 'path';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as process from "process";
import {ConfigModule} from "@nestjs/config";

console.log(process.env.DATABASE_HOST,'jugjgygy')
@Module({
    imports: [
        ConfigModule.forRoot(),
        SequelizeModule.forFeature([SchoolUserModel, SchoolModel, Teams, UserTeams, Sports, EventModel]),
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.PORT),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            models: [UserModel, SchoolUserModel, SchoolModel, Teams, UserTeams, Sports, EventModel, VegetableModel],
            autoLoadModels: true,
            synchronize: true,
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'uploads'),
            serveRoot: '/uploads',  // URL path to access the files (e.g., http://localhost:3000/uploads/filename.jpg)
            serveStaticOptions: {
                index: false,  // Disable looking for 'index.html' in the uploads folder
            },
        }),
        AuthModule,
        VegetableModule],
    controllers: [AppController, SchoolController, SportController, EventController, VegetableController],
    providers: [AppService, SchoolService, SportService, EventService, GoogleCalendarService, SlackService],
})
export class AppModule {
}
