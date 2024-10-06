import { Sports } from "../../models/sport.model";
import { Repository } from "sequelize-typescript";
export declare class SportService {
    private sportModel;
    constructor(sportModel: Repository<Sports>);
    getAllSports(): Promise<Sports[]>;
}
