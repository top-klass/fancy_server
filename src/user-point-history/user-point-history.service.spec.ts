import { Test, TestingModule } from '@nestjs/testing';
import { UserPointHistoryService } from './user-point-history.service';

describe('UserPointHistoryService', () => {
  let service: UserPointHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserPointHistoryService],
    }).compile();

    service = module.get<UserPointHistoryService>(UserPointHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
