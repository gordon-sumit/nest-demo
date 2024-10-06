import { SportService } from "./sport.service";
export declare class SportController {
    private sportService;
    constructor(sportService: SportService);
    getAllSports(): Promise<import("../../models/sport.model").Sports[]>;
}
