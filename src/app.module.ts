import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookmarkModule } from './bookmark/bookmark.module';
import { UserPointHistoryModule } from './user-point-history/user-point-history.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BookmarkModule, UserPointHistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
