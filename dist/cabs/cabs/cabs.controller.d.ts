import { CabsService } from "./cabs.service";
export declare class CabsController {
    private cabService;
    constructor(cabService: CabsService);
    getAllCabs(): {
        cabId: number;
        name: string;
        title: string;
    }[];
}
