import {Sports} from "../../models/sport.model";
import {Repository} from "sequelize-typescript";
import {InjectModel} from "@nestjs/sequelize";
import {Injectable} from "@nestjs/common";

@Injectable()
export class SportService {
    constructor(@InjectModel(Sports) private sportModel:Repository<Sports>) {
    }

    getAllSports():Promise<Sports[]>{
        return this.sportModel.findAll();
    }
}
