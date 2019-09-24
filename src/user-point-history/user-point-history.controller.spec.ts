import { Test, TestingModule } from '@nestjs/testing';
import { UserPointHistoryController } from './user-point-history.controller';

describe('UserPointHistory Controller', () => {
  let controller: UserPointHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserPointHistoryController],
    }).compile();

    controller = module.get<UserPointHistoryController>(UserPointHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
