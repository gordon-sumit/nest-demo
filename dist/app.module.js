"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const school_controller_1 = require("./schools/school/school.controller");
const school_service_1 = require("./schools/school/school.service");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("./models/user.model");
const schoolUser_model_1 = require("./models/schoolUser.model");
const school_model_1 = require("./models/school.model");
const team_model_1 = require("./models/team.model");
const userTeam_model_1 = require("./models/userTeam.model");
const sport_model_1 = require("./models/sport.model");
const sport_controller_1 = require("./sports/sport/sport.controller");
const sport_service_1 = require("./sports/sport/sport.service");
const auth_module_1 = require("./auth/auth.module");
const event_controller_1 = require("./event/event.controller");
const event_service_1 = require("./event/event.service");
const event_model_1 = require("./models/event.model");
const google_calendar_service_1 = require("./google-calendar/google-calendar.service");
const vegetable_controller_1 = require("./vegetable/vegetable.controller");
const slack_service_1 = require("./slack/slack.service");
const vegetable_module_1 = require("./vegetable/vegetable.module");
const vegetable_model_1 = require("./models/vegetable.model");
const path_1 = require("path");
const serve_static_1 = require("@nestjs/serve-static");
const process = require("process");
const config_1 = require("@nestjs/config");
console.log(process.env.DATABASE_HOST, 'jugjgygy');
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            sequelize_1.SequelizeModule.forFeature([schoolUser_model_1.SchoolUserModel, school_model_1.SchoolModel, team_model_1.Teams, userTeam_model_1.UserTeams, sport_model_1.Sports, event_model_1.EventModel]),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: process.env.DATABASE_HOST,
                port: parseInt(process.env.PORT),
                username: process.env.DATABASE_USER,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
                models: [user_model_1.UserModel, schoolUser_model_1.SchoolUserModel, school_model_1.SchoolModel, team_model_1.Teams, userTeam_model_1.UserTeams, sport_model_1.Sports, event_model_1.EventModel, vegetable_model_1.VegetableModel],
                autoLoadModels: true,
                synchronize: true,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'uploads'),
                serveRoot: '/uploads',
                serveStaticOptions: {
                    index: false,
                },
            }),
            auth_module_1.AuthModule,
            vegetable_module_1.VegetableModule
        ],
        controllers: [app_controller_1.AppController, school_controller_1.SchoolController, sport_controller_1.SportController, event_controller_1.EventController, vegetable_controller_1.VegetableController],
        providers: [app_service_1.AppService, school_service_1.SchoolService, sport_service_1.SportService, event_service_1.EventService, google_calendar_service_1.GoogleCalendarService, slack_service_1.SlackService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map