import { SchoolService } from "./school.service";
export declare class SchoolController {
    private schoolService;
    constructor(schoolService: SchoolService);
    getAllSchools(): Promise<import("../../models/school.model").SchoolModel[]>;
}
