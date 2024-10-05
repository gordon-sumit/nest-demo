import {Controller, Get} from '@nestjs/common';
import {CabsService} from "./cabs.service";

@Controller('cabs')
export class CabsController {
constructor(private cabService: CabsService) {
}
    @Get()
    getAllCabs(){
        return this.cabService.getAllCabs();
    }


}
