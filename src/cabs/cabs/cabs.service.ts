import { Injectable } from '@nestjs/common';

@Injectable()
export class CabsService {
    getAllCabs(){
        return [
            {
                cabId:101,
                name:'maruti-desire',
                title:'Maruti Suzuki Desire'
            },
            {
                cabId:102,
                name:'maruti-brezza',
                title:'Maruti Suzuki Brezza'
            },
            {
                cabId:103,
                name:'maruti-alto',
                title:'Maruti Suzuki Alto'
            },
            {
                cabId:104,
                name:'maruti-swift',
                title:'Maruti Suzuki Swift'
            }
        ];
    }
}
