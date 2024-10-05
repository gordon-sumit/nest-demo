import { Test, TestingModule } from '@nestjs/testing';
import { CabsService } from './cabs.service';

describe('CabsService', () => {
  let service: CabsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CabsService],
    }).compile();

    service = module.get<CabsService>(CabsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
