import { Module } from '@nestjs/common';
import { CabsService } from './cabs.service';
import {CabsController} from "./cabs.controller";

@Module({
  providers: [CabsService],
  controllers:[CabsController],
})
export class CabsModule {}
