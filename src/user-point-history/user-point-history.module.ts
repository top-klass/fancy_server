import { Module } from '@nestjs/common';
import { UserPointHistoryController } from './user-point-history.controller';
import { UserPointHistoryService } from './user-point-history.service';

@Module({
  controllers: [UserPointHistoryController],
  providers: [UserPointHistoryService]
})
export class UserPointHistoryModule {}
