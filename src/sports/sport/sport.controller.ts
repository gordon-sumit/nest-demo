import {Controller, Get} from '@nestjs/common';
import {SportService} from "./sport.service";

@Controller('sport')
export class SportController {
    constructor(private sportService: SportService) {
    }

    @Get()
    getAllSports() {
        return this.sportService.getAllSports();
    }
}
