import { Test, TestingModule } from '@nestjs/testing';
import { AuthuserService } from './authuser.service';

describe('AuthuserService', () => {
  let service: AuthuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthuserService],
    }).compile();

    service = module.get<AuthuserService>(AuthuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
