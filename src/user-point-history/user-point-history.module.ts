import { Module } from '@nestjs/common';
import { UserPointHistoryController } from './user-point-history.controller';
import { UserPointHistoryService } from './user-point-history.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPointHistory } from './user-point-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserPointHistory])],
  controllers: [UserPointHistoryController],
  providers: [UserPointHistoryService]
})
export class UserPointHistoryModule {}
