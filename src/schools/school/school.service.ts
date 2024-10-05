import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {SchoolModel} from "../../models/school.model";

@Injectable()
export class SchoolService {
    constructor(@InjectModel(SchoolModel) private school: typeof SchoolModel) {
    }

    getAllSchool():Promise<SchoolModel[]>{
        return this.school.findAll();
    }
}
