import { SchoolModel } from "../../models/school.model";
export declare class SchoolService {
    private school;
    constructor(school: typeof SchoolModel);
    getAllSchool(): Promise<SchoolModel[]>;
}
