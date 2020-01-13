import { Test, TestingModule } from '@nestjs/testing';
import { TypeormconfigService } from './typeormconfig.service';

describe('TypeormconfigService', () => {
  let service: TypeormconfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeormconfigService],
    }).compile();

    service = module.get<TypeormconfigService>(TypeormconfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
