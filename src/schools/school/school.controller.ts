import {Controller, Get} from '@nestjs/common';
import {SchoolService} from "./school.service";

@Controller('school')
export class SchoolController {
    constructor(private schoolService: SchoolService) {
    }
    @Get()
    getAllSchools(){
        return this.schoolService.getAllSchool();
    }

}
